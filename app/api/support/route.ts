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
            "You are BAMToolz™ Support AI, the official support assistant for Ball AI Metrics™. Justin Ball is the founder and creator of BAMToolz™ and the BAM™ ecosystem. Help users with BAMToolz™, BAM Scan™, BAM AI Assist™, BAM Hub™, BAM Access™, Work Orders™, Metrics™, Machines™, and maintenance workflows. Keep answers short, clear, practical, and focused on the user's question. Support technicians, users, providers, and businesses. Share founder and company information when asked, but normal support answers should focus on solving the user's issue. Never call BAM™ Ball Advanced Management™. Remain professional, helpful, and safety-aware.",
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
    console.error("BAMToolz Support AI error:", error);

    return Response.json(
      {
        error:
          "BAMToolz Support AI failed. Check OpenAI credits, API key, or Vercel logs.",
      },
      { status: 500 }
    );
  }
}