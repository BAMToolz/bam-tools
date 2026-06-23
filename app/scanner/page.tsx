"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scanData, setScanData] = useState("");
  const [scanStatus, setScanStatus] = useState("Waiting for equipment scan.");
  const [machineConnected, setMachineConnected] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [saveStatus, setSaveStatus] = useState("");

  async function runScan() {
    if (!file) {
      setScanStatus("Please select an equipment photo before scanning.");
      return;
    }

    setScanStatus("Analyzing equipment with BAM Scan™...");
    setMachineConnected(false);
    setMessages([]);
    setSaveStatus("");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      const report =
        data.analysis ||
        data.result ||
        data.message ||
        "BAM Scan™ connected, but no scan data was returned.";

      setScanData(report);
      setMachineConnected(true);
      setScanStatus("Equipment scan complete. BAM AI™ is ready.");

      setMessages([
        {
          role: "bam",
          text: "Equipment scan complete. Enter symptoms, readings, fault codes, technician notes, or repair questions.",
        },
      ]);
    } catch (error: any) {
      setScanStatus(error?.message || "BAM Scan™ connection failed.");
      setMachineConnected(false);
    }
  }

  async function saveToHub() {
    if (!scanData) {
      setSaveStatus("Run BAM Scan™ before saving to BAM Hub™.");
      return;
    }

    setSaveStatus("Saving scan to BAM Hub™...");

    const newMachine = {
      id: Date.now().toString(),
      name: "Scanned Equipment",
      location: "Unassigned",
      manufacturer: "Pending identification",
      model: "Pending identification",
      serial: "Pending identification",
      notes: scanData,
      createdAt: new Date().toISOString(),
    };

    const existingMachines = JSON.parse(
      localStorage.getItem("bamHubMachines") || "[]"
    );

    localStorage.setItem(
      "bamHubMachines",
      JSON.stringify([...existingMachines, newMachine])
    );

    try {
      await fetch("/api/machines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMachine),
      });
    } catch {
      console.log("BAM Hub™ cloud prototype save skipped.");
    }

    setSaveStatus("Scan saved to BAM Hub™ machine memory on this device.");
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const techText = input.trim();

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: "BAM AI™ is analyzing the scan and technician notes..." },
    ]);

    setInput("");

    try {
      const response = await fetch("/api/assist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: techText,
          scanData,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: data.result || data.error || "BAM AI™ returned no result.",
        },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: error?.message || "BAM AI™ connection failed.",
        },
      ]);
    }
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-5xl font-black">BAM Scan™</h1>

            <p className="mt-2 text-cyan-50">
              Capture → Identify → Troubleshoot → Remember
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Hub™
            </a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Work Orders™
            </a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Metrics™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAM SCAN™ EQUIPMENT INTELLIGENCE
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Scan equipment and turn machine data into action.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ captures equipment photos, tags, labels, panels, logs,
            and components, then connects the scan to BAM AI™ for technician
            support, troubleshooting, documentation, and machine memory.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Step number="01" title="Capture" text="Upload equipment image." />
            <Step number="02" title="Identify" text="Read visible machine data." />
            <Step number="03" title="Assist" text="Ask BAM AI™ what matters." />
            <Step number="04" title="Remember" text="Save to BAM Hub™." />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-6 shadow-2xl">
          <h2 className="text-2xl font-black text-yellow-200">Safety First™</h2>

          <p className="mt-3 text-sm leading-6 text-yellow-50">
            Informational support only. Follow OEM manuals, company procedures,
            OSHA requirements, site safety rules, PPE requirements, and proper
            lockout/tagout before inspection, troubleshooting, or repair.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              Equipment Image
            </h2>

            <p className="mt-4 text-slate-300">
              Upload a machine tag, equipment label, electrical panel,
              component, nameplate, fault screen, or maintenance log.
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-6 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4"
            />

            {file && (
              <p className="mt-3 text-cyan-300">
                Selected file: {file.name}
              </p>
            )}

            <button
              onClick={runScan}
              className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
            >
              Run BAM Scan™
            </button>
          </div>

          <div className="rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              Live Scan Status
            </h2>

            <div className="mt-6 rounded-xl bg-slate-900 p-5">
              <p className="font-black text-cyan-300">
                {machineConnected ? "Equipment Connected" : "Scanner Status"}
              </p>

              <p className="mt-2 text-slate-200">{scanStatus}</p>
            </div>

            <div className="mt-5 grid gap-3">
              <StatusItem label="Machine ID" value={machineConnected ? "Captured / Pending Review" : "Waiting"} />
              <StatusItem label="Manufacturer" value={machineConnected ? "Scan Data Available" : "Waiting"} />
              <StatusItem label="Model / Serial" value={machineConnected ? "Review Scan Result" : "Waiting"} />
              <StatusItem label="BAM AI™" value={machineConnected ? "Ready" : "Locked Until Scan"} />
            </div>
          </div>
        </section>

        {scanData && (
          <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              BAM AI™ Scan Analysis
            </h2>

            <div className="mt-5 whitespace-pre-wrap rounded-xl bg-slate-900 p-5 text-sm leading-6 text-slate-200">
              {scanData}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                onClick={saveToHub}
                className="rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
              >
                Save to BAM Hub™
              </button>

              <a
                href="/workorders"
                className="rounded-xl border border-cyan-400 p-4 text-center font-black text-cyan-200 hover:bg-cyan-950"
              >
                Create Work Order™
              </a>
            </div>

            {saveStatus && (
              <p className="mt-4 font-bold text-cyan-300">{saveStatus}</p>
            )}
          </section>
        )}

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI™ Technician Assist
          </h2>

          <p className="mt-4 text-slate-300">
            {machineConnected
              ? "Ask about symptoms, readings, fault codes, parts, next checks, safety steps, or repair direction."
              : "Run BAM Scan™ first to connect BAM AI™ to equipment data."}
          </p>

          {messages.map((msg, index) => (
            <div key={index} className="mt-4 rounded-xl bg-slate-900 p-5">
              <b className="text-cyan-300">
                {msg.role === "tech" ? "Technician" : "BAM AI™"}
              </b>

              <p className="mt-2 whitespace-pre-wrap text-slate-200">
                {msg.text}
              </p>
            </div>
          ))}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!machineConnected}
            placeholder={
              machineConnected
                ? "Example: Motor trips after startup. VFD shows overcurrent. What should I check first?"
                : "Scan equipment first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white"
          />

          <button
            onClick={sendMessage}
            disabled={!machineConnected || !input.trim()}
            className="mt-4 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
          >
            Run BAM AI™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Powered by BAM Hub™ Machine Memory
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            Every scan can become part of a machine profile. BAM Hub™ is designed
            to remember equipment history, technician notes, manuals, repair
            records, parts, and recurring issues so the facility gets smarter
            over time.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Card title="BAM Hub™" href="/hub" text="Machine memory, scan history, manuals, notes, and facility equipment records." />
            <Card title="BAM Work Orders™" href="/workorders" text="Turn scan results into assigned maintenance action and trackable repair history." />
            <Card title="BAM Metrics™" href="/metrics" text="Convert saved repairs, failures, and downtime into measurable facility intelligence." />
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/hub" className="hover:text-white">BAM Hub™</a>
            <a href="/workorders" className="hover:text-white">Work Orders™</a>
            <a href="/metrics" className="hover:text-white">Metrics™</a>
            <a href="/support" className="hover:text-white">Support</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Step({
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

function StatusItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4 rounded-xl border border-cyan-400/30 bg-slate-900 p-4">
      <span className="font-bold text-slate-300">{label}</span>
      <span className="text-right font-black text-cyan-300">{value}</span>
    </div>
  );
}

function Card({
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
      className="block rounded-xl bg-slate-900 p-6 shadow-xl hover:bg-slate-800"
    >
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}