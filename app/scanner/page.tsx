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

  const [machineName, setMachineName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [location, setLocation] = useState("");

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
      setScanStatus("Equipment scan complete. BAM Assist™ is ready.");

      if (data.name) setMachineName(data.name);
      if (data.manufacturer) setManufacturer(data.manufacturer);
      if (data.model) setModel(data.model);
      if (data.serial) setSerial(data.serial);

      setMessages([
        {
          role: "bam",
          text: "Equipment scan complete. Ask a maintenance question or save this scan to BAM Hub™.",
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

    try {
      const response = await fetch("/api/machines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: machineName || "Scanned Equipment",
          location: location || "Unassigned",
          manufacturer: manufacturer || "Not identified",
          model: model || "Not identified",
          serial: serial || "Not identified",
          notes: scanData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSaveStatus("Scan saved to BAM Hub™ machine memory.");
      } else {
        setSaveStatus("BAM Hub™ save failed. Please review the scan and try again.");
      }
    } catch (error: any) {
      setSaveStatus(error?.message || "BAM Hub™ connection failed.");
    }
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const techText = input.trim();

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: "Thinking..." },
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
          scanData: scanData,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: data.result || data.error || "BAM Assist™ returned no answer.",
        },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: error?.message || "BAM Assist™ connection failed.",
        },
      ]);
    }
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
              BAM Scan™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Equipment capture, AI assistance, and BAM Hub™ memory.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machines™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAM SCAN™ EQUIPMENT INTAKE
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Scan equipment once. Assist, document, and save machine memory.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ captures equipment information, connects the scan to BAM
            Assist™, and allows reviewed scan data to be saved into BAM Hub™ as
            machine history.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-6 shadow-2xl">
          <h2 className="text-2xl font-black text-yellow-200">Safety First™</h2>
          <p className="mt-3 text-sm leading-6 text-yellow-50">
            Informational support only. Follow OEM manuals, company procedures,
            OSHA requirements, site safety rules, PPE requirements, and proper
            lockout/tagout before inspection or repair.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">Equipment Image</h2>

          <p className="mt-4 text-slate-300">
            Select a machine tag, equipment label, panel, log, or component photo.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-6 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-cyan-100"
          />

          {file && (
            <p className="mt-3 text-sm font-bold text-cyan-300">
              Selected file: {file.name}
            </p>
          )}

          <button
            onClick={runScan}
            className="mt-6 w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 hover:bg-cyan-400"
          >
            Run BAM Scan™
          </button>

          <div className="mt-6 rounded-xl border border-cyan-400/30 bg-slate-900 p-5 text-sm leading-6 text-slate-300">
            <p className="font-black text-cyan-300">
              {machineConnected ? "Equipment Connected" : "Status"}
            </p>
            <p className="mt-2">{scanStatus}</p>
          </div>
        </section>

        {machineConnected && (
          <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              Save to BAM Hub™
            </h2>

            <p className="mt-4 text-slate-300">
              Review or complete the equipment details before saving this scan as
              machine memory.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-xl p-3 text-black"
                placeholder="Machine Name / Asset Name"
                value={machineName}
                onChange={(e) => setMachineName(e.target.value)}
              />

              <input
                className="rounded-xl p-3 text-black"
                placeholder="Location / Line / Area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <input
                className="rounded-xl p-3 text-black"
                placeholder="Manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />

              <input
                className="rounded-xl p-3 text-black"
                placeholder="Model Number"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />

              <input
                className="rounded-xl p-3 text-black md:col-span-2"
                placeholder="Serial Number / Asset Tag"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
              />
            </div>

            <button
              onClick={saveToHub}
              className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-4 font-black text-slate-950 hover:bg-cyan-300"
            >
              Save Scan to BAM Hub™
            </button>

            <p className="mt-4 font-bold text-cyan-300">{saveStatus}</p>
          </section>
        )}

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Assist™ Machine Q&A
          </h2>

          <p className="mt-4 text-slate-300">
            {machineConnected
              ? "Ask direct questions about the scanned equipment."
              : "Run BAM Scan™ first to connect BAM Assist™ to equipment data."}
          </p>

          {messages.length > 0 && (
            <div className="mt-6 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.role === "tech"
                      ? "rounded-xl border border-cyan-200/50 bg-white/5 p-5"
                      : "rounded-xl border border-cyan-400/50 bg-cyan-500/10 p-5"
                  }
                >
                  <strong className="text-cyan-300">
                    {msg.role === "tech" ? "Technician" : "BAM Assist™"}
                  </strong>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              machineConnected
                ? "Ask about model, serial, parts, safety, possible issue, or next check..."
                : "Scan equipment first..."
            }
            disabled={!machineConnected}
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white outline-none disabled:opacity-50"
          />

          <button
            onClick={sendMessage}
            disabled={!machineConnected || !input.trim()}
            className="mt-4 w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
          >
            Ask BAM Assist™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Hub™ Memory
          </h2>

          <p className="mt-4 text-slate-300">
            {scanData
              ? "Scan data is available for review and can be saved to BAM Hub™."
              : "No equipment scan has been captured yet."}
          </p>

          <a
            href="/machines"
            className="mt-6 inline-block rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
          >
            Open Machine Profiles™
          </a>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | BAMToolz™ | Ball Advanced Management™</p>
        </footer>
      </div>
    </main>
  );
}