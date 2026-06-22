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

export default function HubMachinesPage() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    const savedMachines = JSON.parse(
      localStorage.getItem("bamHubMachines") || "[]"
    );

    setMachines(savedMachines.reverse());
  }, []);

  function clearMachines() {
    localStorage.removeItem("bamHubMachines");
    setMachines([]);
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              Machine List™
            </h1>

            <p className="mt-2 text-cyan-50">
              BAM Hub™ saved machine memory | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Scan™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Hub™
            </a>
            <a href="/hub/machine" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Latest Profile™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            SAVED MACHINE MEMORY™
          </p>

          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            {machines.length} Saved Machine{machines.length === 1 ? "" : "s"}
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            This page shows BAM Scan™ records saved to BAM Hub™ memory on this
            device. Future versions will connect this list to secure facility
            accounts and protected cloud storage.
          </p>
        </section>

        {machines.length === 0 ? (
          <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              No Machines Saved Yet
            </h2>

            <p className="mt-4 text-slate-300">
              Open BAM Scan™, scan equipment, then tap Save Scan to BAM Hub™.
            </p>

            <a
              href="/scanner"
              className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAM Scan™
            </a>
          </section>
        ) : (
          <section className="mt-8 grid gap-5 md:grid-cols-2">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="rounded-2xl bg-slate-950/95 p-6 shadow-xl"
              >
                <h3 className="text-2xl font-black text-cyan-300">
                  {machine.name || "Scanned Equipment"}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Saved:{" "}
                  {machine.createdAt
                    ? new Date(machine.createdAt).toLocaleString()
                    : "Unknown date"}
                </p>

                <div className="mt-5 grid gap-3 text-sm text-slate-300">
                  <p>
                    <span className="font-black text-cyan-300">Location:</span>{" "}
                    {machine.location || "Unassigned"}
                  </p>
                  <p>
                    <span className="font-black text-cyan-300">
                      Manufacturer:
                    </span>{" "}
                    {machine.manufacturer || "Not identified"}
                  </p>
                  <p>
                    <span className="font-black text-cyan-300">Model:</span>{" "}
                    {machine.model || "Not identified"}
                  </p>
                  <p>
                    <span className="font-black text-cyan-300">
                      Serial / Tag:
                    </span>{" "}
                    {machine.serial || "Not identified"}
                  </p>
                </div>

                <div className="mt-5 max-h-48 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  {machine.notes || "No scan notes saved."}
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Machine Memory Controls™
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Add New Scan™
            </a>

            <a
              href="/hub/machine"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open Latest Profile™
            </a>

            <button
              onClick={clearMachines}
              className="rounded-xl border border-red-300 px-6 py-3 text-center font-black text-red-200 hover:bg-red-950"
            >
              Clear Local Memory
            </button>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Hub™ | Machine List™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}