"use client";

import { useEffect, useState } from "react";

type WorkOrder = {
  id: string;
  machine: string;
  priority: string;
  assignedTo: string;
  problem: string;
  notes: string;
  status: string;
  createdAt: string;
};

export default function WorkOrdersPage() {
  const [machine, setMachine] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [assignedTo, setAssignedTo] = useState("");
  const [problem, setProblem] = useState("");
  const [notes, setNotes] = useState("");
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bamWorkOrders") || "[]");
    setWorkOrders(saved);
  }, []);

  function saveWorkOrder() {
    const newOrder = {
      id: Date.now().toString(),
      machine: machine || "Unassigned Machine",
      priority,
      assignedTo: assignedTo || "Unassigned",
      problem: problem || "No problem entered",
      notes: notes || "No repair notes entered",
      status: "Open",
      createdAt: new Date().toISOString(),
    };

    const updated = [newOrder, ...workOrders];

    localStorage.setItem("bamWorkOrders", JSON.stringify(updated));
    setWorkOrders(updated);

    setMachine("");
    setPriority("Medium");
    setAssignedTo("");
    setProblem("");
    setNotes("");
  }

  function clearWorkOrders() {
    localStorage.removeItem("bamWorkOrders");
    setWorkOrders([]);
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Work Orders™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Maintenance workflow | Ball AI Metrics™
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
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Metrics™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            MAINTENANCE WORKFLOW SYSTEM™
          </p>

          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            Turn machine issues into trackable work.
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            BAM Work Orders™ connects equipment problems, technician notes,
            priorities, repair history, and future metrics into one maintenance
            workflow.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              Create Work Order™
            </h2>

            <input
              value={machine}
              onChange={(e) => setMachine(e.target.value)}
              placeholder="Machine / Asset Name"
              className="mt-6 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-4 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>

            <input
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Assigned Technician / Engineer"
              className="mt-4 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            />

            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="Problem description / fault / observed issue"
              className="mt-4 min-h-28 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            />

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Repair notes / parts used / next action"
              className="mt-4 min-h-28 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            />

            <button
              onClick={saveWorkOrder}
              className="mt-5 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
            >
              Save Work Order™
            </button>
          </div>

          <div className="rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              Work Order Metrics™
            </h2>

            <div className="mt-6 grid gap-4">
              <Metric title="Total Work Orders" value={workOrders.length.toString()} />
              <Metric
                title="Critical Priority"
                value={workOrders.filter((order) => order.priority === "Critical").length.toString()}
              />
              <Metric
                title="Open Status"
                value={workOrders.filter((order) => order.status === "Open").length.toString()}
              />
            </div>

            <button
              onClick={clearWorkOrders}
              className="mt-6 w-full rounded-xl border border-red-300 p-4 font-black text-red-200 hover:bg-red-950"
            >
              Clear Local Work Orders
            </button>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Saved Work Orders™
          </h2>

          {workOrders.length === 0 ? (
            <p className="mt-5 text-slate-300">
              No work orders saved yet.
            </p>
          ) : (
            <div className="mt-6 grid gap-5">
              {workOrders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-xl bg-slate-900 p-5 shadow-xl"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-cyan-300">
                        {order.machine}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        Created: {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="rounded-xl border border-cyan-400 px-4 py-2 text-center font-black text-cyan-200">
                      {order.priority}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
                    <p>
                      <span className="font-black text-cyan-300">Assigned:</span>{" "}
                      {order.assignedTo}
                    </p>

                    <p>
                      <span className="font-black text-cyan-300">Status:</span>{" "}
                      {order.status}
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-950 p-4">
                    <p className="font-black text-cyan-300">Problem</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-300">
                      {order.problem}
                    </p>
                  </div>

                  <div className="mt-4 rounded-xl bg-slate-950 p-4">
                    <p className="font-black text-cyan-300">Repair Notes</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-300">
                      {order.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Work Orders™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-900 p-5 shadow-xl">
      <p className="font-black text-cyan-300">{title}</p>
      <p className="mt-3 text-4xl font-black">{value}</p>
    </div>
  );
}