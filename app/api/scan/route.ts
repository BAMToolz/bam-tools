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

Analyze this equipment image for maintenance documentation.

Return this exact format:

BAM Scan™

Machine Name:
Manufacturer:
Model:
Serial/Tag:
Visible Parts:
Possible Issue:
Check Next:
Recommended Action:
Safety Notes:
Possible Parts:
Downtime Risk:
Priority:
Confidence:

BAM Hub™ Memory:
Scan data captured for future machine history.`,
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
      name: extractField(analysis, "Machine Name"),
      manufacturer: extractField(analysis, "Manufacturer"),
      model: extractField(analysis, "Model"),
      serial: extractField(analysis, "Serial/Tag"),
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