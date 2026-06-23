"use client";

import { useEffect, useState } from "react";

type Machine = {
  id: string;
  name: string;
  location?: string;
  manufacturer?: string;
  model?: string;
  serial?: string;
  notes?: string;
  createdAt?: string;
};

export default function HubPage() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    const savedMachines = JSON.parse(
      localStorage.getItem("bamHubMachines") || "[]"
    );

    setMachines(savedMachines);
  }, []);

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Hub™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Machine Memory™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/scanner" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">BAM Scan™</a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Work Orders™</a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Metrics™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            SAVED MACHINE MEMORY
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            BAM Hub™ remembers what BAM Scan™ captures.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            Saved machine identities from BAM Scan™ appear here as local machine
            memory. This is the foundation for equipment history, repair notes,
            work orders, manuals, parts, and future facility intelligence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Run BAM Scan™
            </a>

            <a
              href="/workorders"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Create Work Order™
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-cyan-300">
                Saved Machines™
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Machine profiles saved from BAM Scan™ on this device.
              </p>
            </div>

            <div className="rounded-full border border-cyan-300 bg-cyan-500/20 px-4 py-2 text-xs font-black text-cyan-200">
              {machines.length} SAVED
            </div>
          </div>

          {machines.length === 0 ? (
            <div className="mt-6 rounded-xl border border-cyan-400/30 bg-slate-900 p-6">
              <h3 className="text-xl font-black text-cyan-300">
                No machines saved yet.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Run BAM Scan™, identify a machine, then press “Save Machine
                Identity to BAM Hub™.”
              </p>

              <a
                href="/scanner"
                className="mt-5 inline-flex rounded-xl bg-cyan-500 px-5 py-3 font-black text-slate-950 hover:bg-cyan-400"
              >
                Open BAM Scan™
              </a>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {machines.map((machine) => (
                <MachineCard key={machine.id} machine={machine} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Protected Workflow™
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <WorkflowCard number="01" title="Scan" text="Capture equipment data." />
            <WorkflowCard number="02" title="Assist" text="Ask BAM AI™." />
            <WorkflowCard number="03" title="Save" text="Store machine memory." />
            <WorkflowCard number="04" title="Improve" text="Build history over time." />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-6 shadow-2xl sm:p-8">
          <h2 className="text-2xl font-black text-yellow-200">
            Access Required™
          </h2>

          <p className="mt-4 text-sm leading-6 text-yellow-50 sm:text-base">
            This prototype uses local device storage. Future BAM Hub™ machine
            history, serial numbers, repair records, manuals, drawings, and
            facility documentation should live behind BAM Access™ with protected
            company accounts and user roles.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Hub™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/scanner" className="hover:text-white">BAM Scan™</a>
            <a href="/workorders" className="hover:text-white">Work Orders™</a>
            <a href="/metrics" className="hover:text-white">Metrics™</a>
            <a href="/support" className="hover:text-white">Support</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function MachineCard({ machine }: { machine: Machine }) {
  return (
    <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-5 shadow-xl">
      <p className="text-xs font-black tracking-wide text-cyan-400">
        MACHINE PROFILE
      </p>

      <h3 className="mt-2 text-2xl font-black text-cyan-300">
        {machine.name || "Scanned Equipment"}
      </h3>

      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <p><span className="font-black text-cyan-300">Manufacturer:</span> {machine.manufacturer || "Pending identification"}</p>
        <p><span className="font-black text-cyan-300">Model:</span> {machine.model || "Pending identification"}</p>
        <p><span className="font-black text-cyan-300">Serial:</span> {machine.serial || "Pending identification"}</p>
        <p><span className="font-black text-cyan-300">Location:</span> {machine.location || "Unassigned"}</p>
      </div>

      {machine.notes && (
        <div className="mt-4 rounded-lg bg-slate-950 p-4">
          <p className="text-xs font-black text-cyan-300">Scan Notes</p>
          <p className="mt-2 line-clamp-5 whitespace-pre-wrap text-sm leading-6 text-slate-300">
            {machine.notes}
          </p>
        </div>
      )}

      {machine.createdAt && (
        <p className="mt-4 text-xs text-slate-400">
          Saved: {new Date(machine.createdAt).toLocaleString()}
        </p>
      )}
    </div>
  );
}

function WorkflowCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-400/40 bg-slate-900 p-5">
      <p className="text-sm font-black text-cyan-300">{number}</p>
      <h3 className="mt-2 text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
    </div>
  );
}