import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return Response.json({ error: "No message provided." }, { status: 400 });
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `You are BAM Support AI™, the support assistant for BAMToolz™ by Ball Advanced Management™.

Help users with:
- BAMToolz™ website questions
- BAM Scan™ support
- industrial maintenance questions
- equipment troubleshooting basics
- safety reminders
- platform guidance

Keep answers clear, practical, and technician-focused.

User message:
${message}`,
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("BAM Support AI error:", error);

    return Response.json(
      { error: "BAM Support AI failed. Check OpenAI key, credits, or Vercel logs." },
      { status: 500 }
    );
  }
}