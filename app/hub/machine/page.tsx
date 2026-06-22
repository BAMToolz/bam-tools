"use client";

import { useEffect, useState } from "react";

type Machine = {
  id: string;
  name: string;
  location: string;
  manufacturer: string;
  model: string;
  serial: string;
  notes: string;
  createdAt: string;
};

export default function MachineProfilePage() {
  const [machine, setMachine] = useState<Machine | null>(null);

  useEffect(() => {
    const savedMachines = JSON.parse(
      localStorage.getItem("bamHubMachines") || "[]"
    );

    if (savedMachines.length > 0) {
      setMachine(savedMachines[savedMachines.length - 1]);
    }
  }, []);

  const machineName = machine?.name || "Scanned Equipment";
  const location = machine?.location || "Unassigned";
  const manufacturer = machine?.manufacturer || "Not identified";
  const model = machine?.model || "Not identified";
  const serial = machine?.serial || "Not identified";
  const createdAt = machine?.createdAt
    ? new Date(machine.createdAt).toLocaleString()
    : "No saved scan yet";
  const notes = machine?.notes || "No BAM Scan™ memory saved yet on this device.";

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              Machine Profile™
            </h1>

            <p className="mt-2 text-cyan-50">
              BAM Hub™ machine memory | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Scan™
            </a>
            <a href="/hub/dashboard" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Dashboard™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Hub™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            EQUIPMENT MEMORY PROFILE™
          </p>

          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            {machineName}
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            This profile displays the latest BAM Scan™ saved to BAM Hub™ memory
            on this device. Future versions will connect this view to secure
            facility accounts and a protected database.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <Info title="Machine Name" value={machineName} />
          <Info title="Location" value={location} />
          <Info title="Manufacturer" value={manufacturer} />
          <Info title="Model" value={model} />
          <Info title="Serial / Asset Tag" value={serial} />
          <Info title="Saved Date" value={createdAt} />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Saved BAM Scan™ Memory
          </h2>

          <div className="mt-5 whitespace-pre-wrap rounded-xl bg-slate-900 p-5 text-sm leading-6 text-slate-300">
            {notes}
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Scan Records™"
            text="BAM Scan™ results attach to this machine profile so equipment knowledge is not lost after the scan."
          />

          <Card
            title="Repair History™"
            text="Track failures, repair actions, technician notes, parts used, downtime, and completed maintenance work."
          />

          <Card
            title="Engineering Notes™"
            text="Store process changes, improvement ideas, controls notes, upgrade plans, reliability findings, and machine observations."
          />

          <Card
            title="Parts & Manuals™"
            text="Connect part numbers, drawings, manuals, suppliers, wiring information, and spare inventory to each machine."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve field experience from maintenance teams so future technicians can learn faster and troubleshoot better."
          />

          <Card
            title="Reliability Metrics™"
            text="Future BAM Metrics™ will use profile history to show recurring failures, repair time, downtime, and improvement opportunities."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Machine Memory Timeline™
          </h2>

          <div className="mt-5 rounded-xl bg-slate-900 p-5">
            <p className="font-black text-cyan-300">
              01 — Profile Created
            </p>
            <p className="mt-2 text-slate-300">
              Machine profile shell created for BAM Hub™ memory development.
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-slate-900 p-5">
            <p className="font-black text-cyan-300">
              02 — Latest Scan Memory
            </p>
            <p className="mt-2 text-slate-300">
              {machine
                ? "Latest saved BAM Scan™ memory is now connected to this profile on this device."
                : "No saved scan found yet. Open BAM Scan™, scan equipment, and save it to BAM Hub™."}
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Next Build Step
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            The next task is creating a machine list so multiple saved scans can
            be opened individually instead of only showing the latest saved scan.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAM Scan™
            </a>

            <a
              href="/hub/dashboard"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open Dashboard™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Hub™ | Machine Profile™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <p className="text-sm font-black text-cyan-300">{title}</p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}