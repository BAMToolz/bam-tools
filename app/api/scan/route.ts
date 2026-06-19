import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded." },
        { status: 400 }
      );
    }

    const hasKey = !!process.env.OPENAI_API_KEY;

    if (!hasKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is missing in Vercel." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result:
        "✅ BAM Scan reached API. Image received. OpenAI key detected. Next step: reconnect vision.",
      imageName: image.name,
      imageType: image.type,
      imageSize: image.size,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "BAM Scan API failed.",
        details: String(error?.message || error),