import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// TEMPORARY TEST SWITCH
// true = BAM AI Assist works
// false = BAM AI Assist is locked
const TEST_PAID_ACCESS =
  process.env.BAM_TEST_PAID_ACCESS === "true";

export async function POST(req: Request) {
  try {
    // 🔒 PAID ACCESS CHECK
    if (!TEST_PAID_ACCESS) {
      return Response.json(
        {
          success: false,
          locked: true,
          error: "BAM AI Assist™ requires a BAM Pro subscription.",
        },
        { status: 402 }
      );
    }

    const body = await req.json();

    const question = String(body.question || "").trim();
    const scanData = body.scanData || "";

    if (!question) {
      return Response.json(
        {
          success: false,
          error: "No question provided.",
        },
        { status: 400 }
      );
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
- Answer the technician's question directly.
- Do not use long paragraphs.

Safety Rules:
- Do not bypass, remove, disable, or ignore safety devices.
- Do not guarantee a repair.
- Do not invent electrical, hydraulic, pneumatic, torque, wiring, part number, or OEM procedure details.
- Mention safety precautions when the question involves repair, inspection, electrical work, moving parts, or stored energy.

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
      success: true,
      locked: false,
      result: response.output_text || "No answer returned.",
    });
  } catch (error) {
    console.error("BAM Assist error:", error);

    return Response.json(
      {
        success: false,
        error:
          "BAM Assist failed. Check OpenAI key, credits, or Vercel logs.",
      },
      { status: 500 }
    );
  }
}