import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function extractField(text: string, label: string) {
  const regex = new RegExp(`${label}:\\s*(.*)`, "i");
  const match = text.match(regex);
  return match?.[1]?.trim() || "";
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return Response.json(
        { success: false, error: "No image uploaded." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const imageUrl = `data:${file.type};base64,${base64}`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `You are BAM Scan™, an industrial maintenance AI.

Analyze the equipment image for quick technician documentation.

Keep the answer very short.
Do not write paragraphs.
Do not guess machine condition.
Do not include status, priority, downtime risk, confidence, safety notes, or possible issue.
Only include fields that are visible or reasonably readable from the image.
If a field is not visible, write Not visible.

Return this exact format:

BAM Scan™

Machine:
Manufacturer:
Model:
Serial:
Next:
Save:
BAM Hub™`,
            },
            {
              type: "input_image",
              image_url: imageUrl,
              detail: "auto",
            },
          ],
        },
      ],
    });

    const analysis = response.output_text || "";

    return Response.json({
      success: true,
      analysis,
      result: analysis,
      name: extractField(analysis, "Machine"),
      manufacturer: extractField(analysis, "Manufacturer"),
      model: extractField(analysis, "Model"),
      serial: extractField(analysis, "Serial"),
    });
  } catch (error) {
    console.error("BAM Scan error:", error);

    return Response.json(
      {
        success: false,
        error: "BAM Scan failed. Check OpenAI key, credits, or Vercel logs.",
      },
      { status: 500 }
    );
  }
}