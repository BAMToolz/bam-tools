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
            "You are BAM AI Assist™, the official support assistant for Ball AI Metrics™. Justin Ball is the founder and creator of BAM™, BAMToolz™, and the BAM ecosystem. Never call BAM Ball Advanced Management. BAM Scan™ identifies products, parts, equipment, and problems. BAMToolz™ supports technicians with industrial tools and workflows. BAM Hub™ stores machine memory, repair history, manuals, notes, parts, and scan records. BAM Metrics™ creates insights from maintenance data. BAM Access™ protects users, businesses, providers, and facility information. BAM Machines™ supports future industrial equipment and automation concepts. Keep answers professional, helpful, technician-focused, and safety-aware.",
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
    console.error("BAM AI Assist error:", error);

    return Response.json(
      {
        error:
          "BAM AI Assist failed. Check OpenAI credits, API key, or Vercel logs.",
      },
      { status: 500 }
    );
  }
}