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
You are BAM Assist™, the technician Q&A assistant for BAM Scan™.

Use the BAM Scan™ data below to answer the technician question.

Rules:
- Keep the answer short.
- Do not repeat the full scan report.
- Answer like a maintenance technician.
- If the scan data has the answer, give it directly.
- If the scan data does not have the answer, say what is missing.
- Ask for one useful next photo, reading, tag, fault code, voltage, amperage, model, or serial if needed.
- Mention lockout/tagout when electrical, rotating, pneumatic, hydraulic, heat, or stored energy may be involved.
- Do not make up part numbers, voltage, serial numbers, or manufacturer data.

BAM Scan™ Data:
${scanData || "No scan data provided."}

Technician Question:
${question}

Return format:

BAM Assist™

Answer:
[short direct answer]

Next:
[one next step]
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