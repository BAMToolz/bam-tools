"use client";

import { useEffect, useState } from "react";

type Machine = {
  id: string;
  name: string;
  location?: string;
  manufacturer?: string;
  model?: string;
  serial?: string;
  notes: string;
  createdAt: string;
};

export default function MetricsPage() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    const savedMachines = JSON.parse(
      localStorage.getItem("bamHubMachines") || "[]"
    );

    setMachines(savedMachines);
  }, []);

  const totalMachines = machines.length;
  const totalScans = machines.length;
  const knowledgeCaptured = machines.filter(
    (machine) => machine.notes && machine.notes.trim().length > 0
  ).length;

  const facilityHealth =
    totalMachines === 0
      ? "Waiting"
      : totalMachines < 3
        ? "Learning"
        : "Active";

  const downtimeRisk =
    totalMachines === 0
      ? "Waiting"
      : totalMachines < 3
        ? "Reviewing"
        : "Tracking";

  const repairTrends =
    totalMachines === 0
      ? "Waiting"
      : totalMachines < 3
        ? "Building"
        : "Learning";

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-8 shadow-2xl">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-4 text-5xl font-black">
              BAM Metrics™
            </h1>

            <p className="mt-2 text-cyan-50">
              Facility intelligence dashboard | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Scan™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Hub™
            </a>
            <a href="/hub/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machine List™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            FACILITY INTELLIGENCE DASHBOARD™
          </p>

          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            Turning machine memory into measurable intelligence.
          </h2>

          <p className="mt-5 max-w-5xl text-slate-300">
            BAM Metrics™ reads saved BAM Hub™ machine memory on this device and
            begins converting equipment scans into machine counts, scan totals,
            knowledge capture, reliability tracking, and future downtime metrics.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card title="Machines Connected™" value={totalMachines.toString()} />
          <Card title="Total BAM Scans™" value={totalScans.toString()} />
          <Card title="Knowledge Captured™" value={knowledgeCaptured.toString()} />
          <Card title="Facility Health™" value={facilityHealth} />
          <Card title="Downtime Risk™" value={downtimeRisk} />
          <Card title="Repair Trends™" value={repairTrends} />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Recent Machine Data™
          </h2>

          {machines.length === 0 ? (
            <div className="mt-5 rounded-xl bg-slate-900 p-5">
              <p className="text-slate-300">
                No machine data yet. Run BAM Scan™ and save equipment to BAM Hub™.
              </p>

              <a
                href="/scanner"
                className="mt-5 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
              >
                Open BAM Scan™
              </a>
            </div>
          ) : (
            machines
              .slice(-5)
              .reverse()
              .map((machine) => (
                <div
                  key={machine.id}
                  className="mt-5 rounded-xl bg-slate-900 p-5"
                >
                  <p className="text-xl font-black text-cyan-300">
                    {machine.name || "Scanned Equipment"}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Saved:{" "}
                    {machine.createdAt
                      ? new Date(machine.createdAt).toLocaleString()
                      : "Unknown date"}
                  </p>

                  <div className="mt-4 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                    <p>
                      <span className="font-black text-cyan-300">Location:</span>{" "}
                      {machine.location || "Unassigned"}
                    </p>
                    <p>
                      <span className="font-black text-cyan-300">Model:</span>{" "}
                      {machine.model || "Not identified"}
                    </p>
                    <p>
                      <span className="font-black text-cyan-300">
                        Manufacturer:
                      </span>{" "}
                      {machine.manufacturer || "Not identified"}
                    </p>
                    <p>
                      <span className="font-black text-cyan-300">Serial:</span>{" "}
                      {machine.serial || "Not identified"}
                    </p>
                  </div>
                </div>
              ))
          )}
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <ActionCard
            title="Add Machine Data™"
            text="Run BAM Scan™ and save another equipment record to BAM Hub™ memory."
            href="/scanner"
          />

          <ActionCard
            title="Open Machine List™"
            text="View all saved BAM Hub™ machine records stored on this device."
            href="/hub/machines"
          />

          <ActionCard
            title="Open Latest Profile™"
            text="View the latest saved machine profile and attached scan memory."
            href="/hub/machine"
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI™ Metrics Engine
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            Future BAM AI™ analysis will identify recurring failures, recommend
            preventative maintenance, predict downtime risk, preserve technician
            knowledge, and turn machine history into reliability improvement.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm">
          © 2026 BAM Metrics™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </section>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-950/95 p-6 shadow-xl">
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-4 text-3xl font-black">{value}</p>
    </div>
  );
}

function ActionCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl bg-slate-950/95 p-6 shadow-xl hover:bg-slate-900"
    >
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}