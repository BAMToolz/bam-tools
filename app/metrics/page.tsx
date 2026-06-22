"use client";

import { useEffect, useState } from "react";

type Machine = {
  id: string;
  name: string;
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

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-8 shadow-2xl">
        <a href="/" className="font-bold text-cyan-200">
          ← Back to BAMToolz™
        </a>

        <p className="mt-8 text-sm font-black tracking-wide text-cyan-300">
          FACILITY INTELLIGENCE DASHBOARD™
        </p>

        <h1 className="mt-4 text-5xl font-black">
          BAM Metrics™
        </h1>

        <p className="mt-5 max-w-5xl text-slate-200">
          BAM Metrics™ converts machine history into measurable intelligence:
          downtime tracking, repair patterns, reliability scores, technician
          knowledge, and facility improvement data.
        </p>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Machines Connected™"
            value={totalMachines.toString()}
          />

          <Card
            title="Total BAM Scans™"
            value={totalScans.toString()}
          />

          <Card
            title="Facility Health™"
            value={
              totalMachines > 0
                ? "Learning"
                : "Waiting"
            }
          />

          <Card
            title="Downtime Risk™"
            value="Analyzing"
          />

          <Card
            title="Repair Trends™"
            value="Building"
          />

          <Card
            title="Knowledge Captured™"
            value={
              totalScans > 0
                ? "Active"
                : "None"
            }
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            Recent Machine Data™
          </h2>

          {machines.length === 0 ? (
            <p className="mt-5 text-slate-300">
              No machine data yet. Run BAM Scan™ and save equipment to BAM Hub™.
            </p>
          ) : (
            machines.slice(-5).reverse().map((machine) => (
              <div
                key={machine.id}
                className="mt-5 rounded-xl bg-slate-900 p-5"
              >
                <p className="font-black text-cyan-300">
                  {machine.name}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {new Date(machine.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI™ Metrics Engine
          </h2>

          <p className="mt-4 text-slate-300">
            Future BAM AI™ analysis will identify recurring failures,
            recommend preventative maintenance, predict downtime risk, and
            preserve technician knowledge across facilities.
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
      <h2 className="font-black text-cyan-300">
        {title}
      </h2>

      <p className="mt-4 text-3xl font-black">
        {value}
      </p>
    </div>
  );
}