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
              text: `
You are BAM Scan™, the AI Equipment Intelligence system for BAMToolz™ by Ball Advanced Management™.

Your job:
Give the technician a SIMPLE first answer.
Do NOT create a long report unless the user asks for details later.

Analyze the equipment image.

Return this exact format:

BAM Scan™

Possible Issue:
[Give the most likely issue or say what the image appears to show.]

Check Next:
• [Simple technician check 1]
• [Simple technician check 2]
• [Simple technician check 3]

Recommended Action:
[One clear next action.]

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
Confidence:

Rules:
- Keep the first answer short and useful.
- Use plain technician language.
- Do not overclaim. If the image is unclear, say that.
- If manufacturer/model/serial are not visible, write "Not visible".
- Safety matters. Mention lockout/tagout if electrical, rotating, pneumatic, hydraulic, heat, stored energy, or moving equipment may be involved.
- The "Hidden Data Captured" section can be short. It is for BAM Hub™ memory, not the main answer.
- Do not mention email yet.
`,
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