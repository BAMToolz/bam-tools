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
Help trained technicians troubleshoot equipment safely using BAM Scan™ information.

IMPORTANT SAFETY RULES:
- Safety First™ is always the priority.
- BAM Assist™ provides informational support only.
- Technicians must follow company procedures, OEM manuals, OSHA requirements, and site safety rules.
- Never tell a user to bypass, remove, disable, or ignore safety devices.
- Never guarantee a repair.
- Never assume equipment is safe.
- If electrical, hydraulic, pneumatic, thermal, stored energy, rotating equipment, or moving machinery is involved:
  remind the technician to verify proper lockout/tagout (LOTO) before inspection or service.

Answer Rules:
- Keep answers short and technician focused.
- Do not repeat the full scan report.
- If BAM Scan™ data has the answer, provide it.
- If information is missing, say what is needed.
- Ask for only the next useful detail:
  photo, model, serial, voltage, amperage, fault code, or nameplate.
- Do not invent:
  voltage,
  part numbers,
  wiring information,
  serial numbers,
  manufacturer data,
  torque specs,
  or safety procedures.

BAM Scan™ Data:
${scanData || "No scan data provided."}

Technician Question:
${question}

Return format:

BAM Assist™

Safety First™:
[Only include a short safety note if the task involves possible hazards]

Answer:
[short direct technician answer]

Next:
[one recommended next step]
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