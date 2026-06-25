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
  const [scanFunText, setScanFunText] = useState("BAMToolz™ standing by.");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function cleanField(value: string, fallback: string) {
    if (!value || value.toLowerCase() === "not visible") return fallback;
    return value;
  }

  function startProgressAnimation() {
    setScanProgress(7);
    setScanFunText("Initializing BAMToolz™ industrial scan...");

    const steps = [
      { progress: 18, text: "Preparing equipment identity scan..." },
      { progress: 33, text: "Reading visible labels, tags, and markers..." },
      { progress: 49, text: "Searching for nameplate, model, and serial data..." },
      { progress: 66, text: "Organizing machine intelligence profile..." },
      { progress: 82, text: "Connecting results to BAM AI Assist™..." },
      { progress: 94, text: "Preparing technician guidance..." },
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
      setScanFunText(
        "Start with a machine nameplate, tag, label, fault screen, control panel, component, or visible equipment image."
      );
      setScanProgress(0);
      return;
    }

    setMachineConnected(false);
    setMessages([]);
    setScanData("");
    setMachineIdentity({
      name: "",
      manufacturer: "",
      model: "",
      serial: "",
    });

    startProgressAnimation();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("mode", "industrial");

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
        "No machine identity data was returned.";

      setScanData(report);

      setMachineIdentity({
        name: cleanField(data.name, "Scanned Equipment"),
        manufacturer: cleanField(data.manufacturer, "Pending identification"),
        model: cleanField(data.model, "Pending identification"),
        serial: cleanField(data.serial, "Pending identification"),
      });

      setMachineConnected(true);
      setScanProgress(100);
      setScanFunText("Machine connected. BAM AI Assist™ is ready.");

      setMessages([
        {
          role: "bam",
          text: "Machine connected. BAM AI Assist™ is ready. Ask about troubleshooting, parts, manuals, repairs, documentation, or maintenance history.",
        },
      ]);
    } catch (error: any) {
      setMachineConnected(false);
      setScanProgress(0);
      setScanFunText(
        error?.message || "Industrial identification stopped. Try another image."
      );
    }
  }

  async function sendMessage(customQuestion?: string) {
    const techText = customQuestion || input.trim();
    if (!techText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      {
        role: "bam",
        text: "BAM AI Assist™ is reviewing the machine identity...",
      },
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
          text: data.result || data.error || "BAM AI Assist™ returned no result.",
        },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: error?.message || "BAM AI Assist™ connection failed.",
        },
      ]);
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl">
          <a href="/" className="text-xs font-black text-cyan-300">
            ← BAMToolz™ Home
          </a>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            BAM Scan™
          </h1>

          <p className="mt-2 text-sm text-slate-300">
            Industrial equipment scanning, machine identity, and technician assist.
          </p>
        </header>

        <section className="rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950 p-6 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            INDUSTRIAL SCAN MODE™
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Scan the machine.
            <br />
            Connect BAM AI Assist™.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Upload a machine nameplate, equipment tag, fault screen, control
            panel, component, or visible equipment image.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-slate-950 p-5">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setFile(event.target.files?.[0] || null)}
              className="block w-full text-sm text-slate-300 file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-300 file:px-4 file:py-3 file:text-sm file:font-black file:text-slate-950"
            />

            <button
              onClick={runScan}
              className="mt-5 w-full rounded-2xl bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950 shadow-xl hover:bg-cyan-200"
            >
              Run BAM Scan™
            </button>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-300 transition-all"
                style={{ width: `${scanProgress}%` }}
              />
            </div>

            <p className="mt-3 text-sm font-bold text-cyan-200">
              {scanFunText}
            </p>
          </div>
        </section>

        {machineConnected && (
          <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950 p-6 shadow-2xl">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              MACHINE IDENTITY
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <InfoCard label="Machine" value={machineIdentity.name} />
              <InfoCard label="Manufacturer" value={machineIdentity.manufacturer} />
              <InfoCard label="Model" value={machineIdentity.model} />
              <InfoCard label="Serial" value={machineIdentity.serial} />
            </div>
          </section>
        )}

        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950 p-6 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAM AI ASSIST™
          </p>

          <div className="mt-5 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-4 text-sm leading-6 ${
                  message.role === "bam"
                    ? "border-cyan-400/30 bg-cyan-950/30 text-cyan-50"
                    : "border-slate-700 bg-slate-900 text-slate-200"
                }`}
              >
                <p className="mb-1 text-xs font-black text-cyan-300">
                  {message.role === "bam" ? "BAM AI™" : "Technician"}
                </p>
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about troubleshooting, parts, manuals, or repairs..."
              className="min-w-0 flex-1 rounded-2xl border border-cyan-400/30 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            />

            <button
              onClick={() => sendMessage()}
              className="rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-200"
            >
              Send
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-4">
      <p className="text-xs font-black uppercase tracking-wide text-cyan-300">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold text-white">{value}</p>
    </div>
  );
}