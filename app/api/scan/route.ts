import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json({
        error: "No image uploaded."
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        error: "Missing OpenAI key."
      });
    }

    return NextResponse.json({
      result:
        "✅ BAM Scan AI connection ready. Image received. Vision engine next.",
      fileName: image.name,
      fileType: image.type,
      fileSize: image.size
    });

  } catch (error: any) {
    return NextResponse.json({
      error: "BAM Scan failed.",
      details: error.message
    });
  }
}