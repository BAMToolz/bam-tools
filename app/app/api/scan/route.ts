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

    return NextResponse.json({
      result:
        "Test scanner working. Image received by BAMToolz API. Next step is connecting OpenAI vision.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Scanner API failed." },
      { status: 500 }
    );
  }
}