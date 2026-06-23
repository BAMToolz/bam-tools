"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

type MachineIdentity = {
  name: string;
  manufacturer: string;
  model: string;
  serial: string;
};

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scanData, setScanData] = useState("");
  const [machineIdentity, setMachineIdentity] = useState<MachineIdentity>({
    name: "",
    manufacturer: "",
    model: "",
    serial: "",
  });
  const [machineConnected, setMachineConnected] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanFunText, setScanFunText] = useState("Scanner standing by.");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [saveStatus, setSaveStatus] = useState("");

  function cleanField(value: string, fallback: string) {
    if (!value || value.toLowerCase() === "not visible") {
      return fallback;
    }

    return value;
  }

  function startProgressAnimation() {
    setScanProgress(7);
    setScanFunText("Initializing BAM Scan™ identification engine...");

    const steps = [
      { progress: 18, text: "Preparing machine identity scan..." },
      { progress: 33, text: "Reading visible equipment markers..." },
      { progress: 49, text: "Searching for nameplate and tag details..." },
      { progress: 66, text: "Creating first machine identity profile..." },
      { progress: 82, text: "Connecting identity data to BAM AI™..." },
      { progress: 94, text: "Waiting for BAM AI™ response..." },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.progress);
        setScanFunText(step.text);
      }, 700 * (index + 1));
    });
  }

  async function runScan() {
    if (!file) {
      setScanFunText("Start with a machine nameplate, tag, label, or visible equipment image.");
      setScanProgress(0);
      return;
    }

    setMachineConnected(false);
    setMessages([]);
    setSaveStatus("");
    setMachineIdentity({
      name: "",
      manufacturer: "",
      model: "",
      serial: "",
    });
    startProgressAnimation();

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
        "BAM Scan™ connected, but no machine identity data was returned.";

      setScanData(report);

      setMachineIdentity({
        name: cleanField(data.name, "Scanned Equipment"),
        manufacturer: cleanField(data.manufacturer, "Pending identification"),
        model: cleanField(data.model, "Pending identification"),
        serial: cleanField(data.serial, "Pending identification"),
      });

      setMachineConnected(true);
      setScanProgress(100);
      setScanFunText("Machine identity started. BAM AI™ is ready.");

      setMessages([
        {
          role: "bam",
          text: "Machine identity started. BAM AI™ is ready. Ask about identification, first checks, parts, manuals, repairs, or what to save into BAM Hub™.",
        },
      ]);
    } catch (error: any) {
      setMachineConnected(false);
      setScanProgress(0);
      setScanFunText(error?.message || "Identification stopped. BAM Scan™ needs another try.");
    }
  }

  async function saveToHub() {
    if (!scanData) {
      setSaveStatus("Run BAM Scan™ before saving machine identity to BAM Hub™.");
      return;
    }

    setSaveStatus("Saving machine identity to BAM Hub™...");

    const newMachine = {
      id: Date.now().toString(),
      name: machineIdentity.name || "Scanned Equipment",
      location: "Unassigned",
      manufacturer: machineIdentity.manufacturer || "Pending identification",
      model: machineIdentity.model || "Pending identification",
      serial: machineIdentity.serial || "Pending identification",
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

    setSaveStatus(`${newMachine.name} saved to BAM Hub™ memory on this device.`);
  }

  async function sendMessage(customQuestion?: string) {
    const techText = customQuestion || input.trim();

    if (!techText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: "BAM AI™ is reviewing the machine identity and technician question..." },
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
              Identify → Assist → Save Machine Memory
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

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAM SCAN™ MACHINE IDENTIFICATION
          </p>

          <h2 className="mt-3 max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Identify equipment. Unlock machine intelligence.
          </h2>

          <p className="mt-4 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ begins with machine identification. Start with a nameplate,
            tag, label, or visible equipment image to identify the asset and
            connect BAM AI™ for technician support.
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Machine Identity Image
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Start with a machine nameplate, tag, label, or clear equipment image.
              BAM Scan™ creates the first machine identity profile.
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-6 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4"
            />

            {file && (
              <p className="mt-3 text-sm font-bold text-cyan-300">
                Selected: {file.name}
              </p>
            )}

            <button
              onClick={runScan}
              className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
            >
              Begin Identification™
            </button>
          </div>

          <div className="rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Identification Progress
            </h2>

            <div className="mt-6 rounded-xl bg-slate-900 p-5">
              <div className="mb-2 flex justify-between gap-4 text-sm font-bold text-cyan-300">
                <span>{scanFunText}</span>
                <span>{scanProgress}%</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>

            {machineConnected && (
              <div className="mt-5 rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-4">
                <p className="font-black text-cyan-300">
                  Machine identity loaded into BAM AI™
                </p>

                <div className="mt-4 grid gap-2 text-sm text-slate-300">
                  <p><span className="font-black text-cyan-300">Machine:</span> {machineIdentity.name}</p>
                  <p><span className="font-black text-cyan-300">Manufacturer:</span> {machineIdentity.manufacturer}</p>
                  <p><span className="font-black text-cyan-300">Model:</span> {machineIdentity.model}</p>
                  <p><span className="font-black text-cyan-300">Serial:</span> {machineIdentity.serial}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-5 shadow-2xl">
          <h2 className="text-xl font-black text-yellow-200">Safety First™</h2>

          <p className="mt-2 text-sm leading-6 text-yellow-50">
            Informational support only. Follow OEM manuals, company procedures,
            OSHA requirements, site safety rules, PPE, and lockout/tagout before
            inspection, troubleshooting, or repair.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI™ Technician Assist
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {machineConnected
              ? "Machine identity is loaded. Ask BAM AI™ what to verify, inspect, research, or save next."
              : "Begin machine identification first to connect BAM AI™ to the equipment."}
          </p>

          {machineConnected && (
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <button
                onClick={() => sendMessage("What visible machine identity details should I verify first?")}
                className="rounded-xl border border-cyan-400 p-3 text-sm font-black text-cyan-200 hover:bg-cyan-950"
              >
                Verify Identity™
              </button>

              <button
                onClick={() => sendMessage("What information should be added next to build this machine profile?")}
                className="rounded-xl border border-cyan-400 p-3 text-sm font-black text-cyan-200 hover:bg-cyan-950"
              >
                Build Profile™
              </button>

              <button
                onClick={() => sendMessage("Create a short machine identity note from this scan.")}
                className="rounded-xl border border-cyan-400 p-3 text-sm font-black text-cyan-200 hover:bg-cyan-950"
              >
                Identity Note™
              </button>
            </div>
          )}

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
                ? "Ask BAM AI™ about identification, verification, parts research, manuals, or next profile data..."
                : "Begin identification first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white"
          />

          <button
            onClick={() => sendMessage()}
            disabled={!machineConnected || !input.trim()}
            className="mt-4 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
          >
            Ask BAM AI™
          </button>

          {machineConnected && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                onClick={saveToHub}
                className="rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
              >
                Save Machine Identity to BAM Hub™
              </button>

              <a
                href="/workorders"
                className="rounded-xl border border-cyan-400 p-4 text-center font-black text-cyan-200 hover:bg-cyan-950"
              >
                Create Work Order™
              </a>
            </div>
          )}

          {saveStatus && (
            <p className="mt-4 font-bold text-cyan-300">{saveStatus}</p>
          )}
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