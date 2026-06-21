import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return Response.json({ error: "No image uploaded." }, { status: 400 });
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

Analyze this equipment image and keep the answer simple.

Return:

BAM Scan™

Possible Issue:
Check Next:
Recommended Action:

BAM Hub™ Memory:
Scan data captured for future machine history.

Hidden Data Captured:
Manufacturer:
Model:
Serial/Tag:
Visible Parts:
Safety Notes:
Possible Parts:
Downtime Risk:
Priority:
Confidence:`,
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

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("BAM Scan error:", error);

    return Response.json(
      { error: "BAM Scan failed. Check OpenAI key, credits, or Vercel logs." },
      { status: 500 }
    );
  }
}