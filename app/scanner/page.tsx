"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scanData, setScanData] = useState("");
  const [scanStatus, setScanStatus] = useState("");
  const [machineConnected, setMachineConnected] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bam",
      text: "BAM Assist™ ready. Scan equipment first, then I will connect to the machine memory and answer questions from the photo information.",
    },
  ]);

  async function runScan() {
    if (!file) {
      setScanStatus("Select an equipment photo first.");
      return;
    }

    setScanStatus("BAM Scan™ analyzing equipment and preparing machine memory...");
    setMachineConnected(false);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      const report =
        data.result ||
        data.message ||
        "BAM Scan™ connected, but no scan data returned.";

      setScanData(report);
      setMachineConnected(true);

      setScanStatus(
        "Machine scan complete. Report saved to BAM Hub™ prototype memory."
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "bam",
          text: "Machine identified. BAM Assist™ is now connected to this scan. What do you need help with?",
        },
      ]);
    } catch (error: any) {
      setScanStatus(error?.message || "BAM Scan™ connection failed.");
      setMachineConnected(false);
    }
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const techText = input.trim();

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: "BAM Assist™ thinking..." },
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
              Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Hub™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
            <a href="mailto:BAMToolzsupport@gmail.com" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Contact™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            AI EQUIPMENT SCANNING & MACHINE MEMORY™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Scan the machine. Connect the memory. Ask BAM Assist™.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ captures equipment information and connects it to BAM
            Hub™ machine memory. The visible report is no longer the main
            experience — the scan becomes data for BAM Assist™ to answer
            technician questions from the photo information.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-slate-950/95 p-6 text-center shadow-xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
              BAM SCAN™
            </p>
            <h3 className="mt-2 text-2xl font-black">CAPTURE</h3>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 text-center shadow-xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
              BAM HUB™
            </p>
            <h3 className="mt-2 text-2xl font-black">MEMORY</h3>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 text-center shadow-xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">
              BAM ASSIST™
            </p>
            <h3 className="mt-2 text-2xl font-black">Q&A</h3>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-yellow-200">
            Safety First™ Warning
          </h2>

          <p className="mt-4 text-yellow-50">
            BAM Scan™ and BAM Assist™ provide informational support only. They do
            not replace trained technicians, OEM manuals, company procedures,
            OSHA requirements, or site safety rules.
          </p>

          <p className="mt-4 text-yellow-50">
            Always verify equipment condition, follow lockout/tagout procedures,
            wear required PPE, and confirm electrical, hydraulic, pneumatic,
            thermal, rotating, and stored-energy hazards before inspection,
            troubleshooting, or repair.
          </p>

          <p className="mt-4 font-bold text-yellow-100">
            Do not bypass guards, interlocks, safety devices, or approved
            procedures.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Equipment Image
          </h2>

          <p className="mt-4 text-slate-300">
            Upload a machine tag, equipment label, electrical panel, equipment
            log, or component photo.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-6 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-cyan-100"
          />

          <button
            onClick={runScan}
            className="mt-6 w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 hover:bg-cyan-400"
          >
            RUN BAM SCAN™
          </button>

          {scanStatus && (
            <div className="mt-6 rounded-xl border border-cyan-400/40 bg-slate-900 p-5 text-sm leading-6 text-slate-200">
              {scanStatus}
            </div>
          )}

          {machineConnected && (
            <div className="mt-6 rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-5 text-sm leading-6 text-slate-200">
              <p className="font-black text-cyan-300">
                BAM Assist™ connected to this machine scan.
              </p>
              <p className="mt-2">
                The report is stored behind the scenes as prototype BAM Hub™
                memory. Ask direct questions below.
              </p>
            </div>
          )}
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Assist™ Machine Q&A
          </h2>

          <p className="mt-4 text-slate-300">
            Ask questions after scanning. BAM Assist™ uses the stored scan data
            from the photo instead of showing a large report first.
          </p>

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

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Example: What voltage is this? What motor is this? What should I check next?"
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white outline-none"
          />

          <button
            onClick={sendMessage}
            className="mt-4 w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 hover:bg-cyan-400"
          >
            ASK BAM ASSIST™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Hub™ Prototype Memory
          </h2>

          <p className="mt-4 text-slate-300">
            Current prototype memory status:{" "}
            <span className="font-black text-cyan-300">
              {scanData ? "Scan data captured behind the scenes." : "No scan stored yet."}
            </span>
          </p>

          <p className="mt-4 text-slate-300">
            Future version: this scan will save to the backend under BAM Hub™ →
            Machine History → Reports.
          </p>

          <a
            href="/hub"
            className="mt-6 inline-block rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
          >
            Open BAM Hub™
          </a>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Support
          </h2>

          <p className="mt-4 text-slate-300">
            Founder: Justin Ball | Company: Ball AI Metrics™
          </p>

          <p className="mt-4 text-slate-300">
            Email:{" "}
            <a href="mailto:BAMToolzsupport@gmail.com" className="font-black text-cyan-300 underline">
              BAMToolzsupport@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | BAM™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
  );
}