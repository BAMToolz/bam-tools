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
      return Response.json(
        { error: "No message provided." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OPENAI_API_KEY is missing in Vercel Environment Variables." },
        { status: 500 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content:
            "You are BAM Support AI™, the support assistant for BAMToolz™ by Ball Advanced Management™. Keep answers clear, practical, technician-focused, and safety-aware.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return Response.json({
      result: response.output_text,
    });
  } catch (error) {
    console.error("BAM Support AI error:", error);

    return Response.json(
      {
        error:
          "BAM Support AI failed. Check OpenAI credits, API key, or Vercel logs.",
      },
      { status: 500 }
    );
  }
}