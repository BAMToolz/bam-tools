import { NextResponse } from "next/server";

let machines: any[] = [];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const view = searchParams.get("view");

  if (view === "latest") {
    const latestMachine =
      machines.length > 0 ? machines[machines.length - 1] : null;

    return NextResponse.json({
      success: true,
      service: "BAM Hub™",
      message: latestMachine
        ? "Latest BAM Hub™ machine memory returned."
        : "No BAM Hub™ machine memory saved yet.",
      count: machines.length,
      machine: latestMachine,
    });
  }

  return NextResponse.json({
    success: true,
    service: "BAM Hub™",
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
      service: "BAM Hub™",
      message: "Machine profile saved to BAM Hub™.",
      machineId: newMachine.id,
      count: machines.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        service: "BAM Hub™",
        error: "Machine profile could not be saved.",
      },
      { status: 500 }
    );
  }
}