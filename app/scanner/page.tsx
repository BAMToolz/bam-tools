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

  async function runScan() {
    if (!file) {
      setScanStatus("Please select an equipment photo before scanning.");
      return;
    }

    setScanStatus("Analyzing equipment with BAM Scan™...");
    setMachineConnected(false);
    setMessages([]);

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
          text:
            "Equipment scan complete. Enter technician notes, symptoms, fault codes, or questions.",
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
      { role: "bam", text: "Analyzing..." },
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
          text:
            data.result ||
            data.error ||
            "BAM AI™ returned no result.",
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

            <h1 className="mt-3 text-5xl font-black">
              BAM Scan™
            </h1>

            <p className="mt-2 text-cyan-50">
              Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Hub™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Machines™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAM SCAN™ EQUIPMENT INTELLIGENCE
          </p>

          <h2 className="mt-3 text-4xl font-black text-cyan-300">
            Scan equipment. Ask what matters.
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            BAM Scan™ captures machine information and connects it with
            BAM AI™ for troubleshooting and documentation.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-6 shadow-2xl">
          <h2 className="text-2xl font-black text-yellow-200">
            Safety First™
          </h2>

          <p className="mt-3 text-sm leading-6 text-yellow-50">
            Informational support only. Follow OEM manuals, company procedures,
            OSHA requirements, site safety rules, PPE requirements, and proper
            lockout/tagout before inspection or repair.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            Equipment Image
          </h2>

          <p className="mt-4 text-slate-300">
            Upload a machine tag, equipment label, panel, log, or component photo.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
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

          <div className="mt-5 rounded-xl bg-slate-900 p-5">
            <p className="font-black text-cyan-300">
              {machineConnected
                ? "Equipment Connected"
                : "Status"}
            </p>

            <p className="mt-2">{scanStatus}</p>
          </div>
        </section>

        {scanData && (
          <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              BAM Scan™ Result
            </h2>

            <div className="mt-5 whitespace-pre-wrap rounded-xl bg-slate-900 p-5">
              {scanData}
            </div>
          </section>
        )}

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI™
          </h2>

          <p className="mt-4 text-slate-300">
            {machineConnected
              ? "Enter technician notes, symptoms, fault codes, readings, or questions."
              : "Run BAM Scan™ first to connect BAM AI™ to equipment data."}
          </p>

          {messages.map((msg, index) => (
            <div key={index} className="mt-4 rounded-xl bg-slate-900 p-5">
              <b className="text-cyan-300">
                {msg.role === "tech"
                  ? "Technician"
                  : "BAM AI™"}
              </b>

              <p className="mt-2 whitespace-pre-wrap">
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
                ? "Enter technician notes, symptoms, fault codes, or questions..."
                : "Scan equipment first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl bg-slate-900 p-4"
          />

          <button
            onClick={sendMessage}
            disabled={!machineConnected || !input.trim()}
            className="mt-4 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
          >
            Run BAM AI™
          </button>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="BAM Hub™"
            text="Secure machine memory for approved equipment profiles, repair history, manuals, parts, scan records, and technician knowledge."
            href="/hub"
          />

          <Card
            title="BAM Machines™"
            text="Industrial machine builds including take-ups, payoffs, controls-ready systems, custom equipment, and automation-ready support."
            href="/machines"
          />

          <Card
            title="Support™"
            text="Support for BAM Scan™, BAM Hub™, product questions, equipment workflows, demos, and facility solutions."
            href="/support"
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Hub™ Connection
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            BAM Hub™ will store approved machine profiles, repair history,
            manuals, parts, scan records, and technician knowledge behind secure
            facility access. BAM Scan™ is the capture point. BAM Hub™ is the
            memory layer.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/hub"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAM Hub™
            </a>

            <a
              href="/"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Back Home™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/hub" className="hover:text-white">
              BAM Hub™
            </a>
            <a href="/machines" className="hover:text-white">
              BAM Machines™
            </a>
            <a href="/support" className="hover:text-white">
              Support
            </a>
          </div>
        </footer>
      </div>
    </main>
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
      className="block rounded-xl bg-slate-950/95 p-6 shadow-xl hover:bg-slate-900"
    >
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}