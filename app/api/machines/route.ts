import { NextResponse } from "next/server";

let machines: any[] = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "BAM Hub™ machine data is private. Public listing disabled.",
    count: machines.length,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newMachine = {
      id: Date.now().toString(),
      name: body.name || "Scanned Equipment",
      location: body.location || "Unassigned",
      manufacturer: body.manufacturer || "Not identified",
      model: body.model || "Not identified",
      serial: body.serial || "Not identified",
      notes: body.notes || "",
      createdAt: new Date().toISOString(),
    };

    machines.push(newMachine);

    return NextResponse.json({
      success: true,
      message: "Machine profile saved to BAM Hub™.",
      machineId: newMachine.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Machine profile could not be saved.",
      },
      { status: 500 }
    );
  }
} 