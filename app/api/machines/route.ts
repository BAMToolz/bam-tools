import { NextResponse } from "next/server";

let machines: any[] = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    machines,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newMachine = {
      id: Date.now().toString(),
      name: body.name || "Unnamed Machine",
      location: body.location || "Unknown Location",
      manufacturer: body.manufacturer || "Unknown Manufacturer",
      model: body.model || "Unknown Model",
      serial: body.serial || "Unknown Serial",
      notes: body.notes || "",
      createdAt: new Date().toISOString(),
    };

    machines.push(newMachine);

    return NextResponse.json({
      success: true,
      machine: newMachine,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create machine",
      },
      { status: 500 }
    );
  }
}