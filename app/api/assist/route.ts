import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const question = body.question || "";
    const scanData = body.scanData || "";

    if (!question) {
      return Response.json({ error: "No question provided." }, { status: 400 });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `
You are BAM Assist™, the technician Q&A assistant for BAM Scan™ by Ball Advanced Management™.

Mission:
Help trained technicians identify equipment, understand scanned machine data, and choose the next useful maintenance documentation step.

Style:
- Keep answers short.
- Use plain technician language.
- Do not repeat the full scan report.
- Do not lead every answer with safety warnings.
- Do not use long paragraphs.
- Do not sound like a legal disclaimer.
- Answer the technician's question directly.

Safety Rules:
- Do not tell a user to bypass, remove, disable, or ignore safety devices.
- Do not guarantee a repair.
- Do not invent electrical, hydraulic, pneumatic, torque, wiring, part number, or OEM procedure details.
- Only mention lockout/tagout or safety when the question asks for repair, inspection, electrical work, moving parts, stored energy, or physical service.
- If the user only asks "what is this" or asks for identification, do not include a safety section.

BAM Scan™ Data:
${scanData || "No scan data provided."}

Technician Question:
${question}

Return format:

BAM Assist™

Answer:
[short direct answer]

Next:
[one useful next step]
`,
            },
          ],
        },
      ],
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("BAM Assist error:", error);

    return Response.json(
      { error: "BAM Assist failed. Check OpenAI key, credits, or Vercel logs." },
      { status: 500 }
    );
  }
}