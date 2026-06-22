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
      setScanStatus("Equipment scan complete. BAM Assist™ is ready.");

      setMessages([
        {
          role: "bam",
          text:
            "Equipment scan complete. Ask a maintenance question about this scan.",
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
            "BAM Assist™ returned no answer.",
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

        <header>
          <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
            BAM
          </div>

          <h1 className="mt-3 text-5xl font-black">
            BAM Scan™
          </h1>

          <p className="mt-2 text-cyan-50">
            Ball AI Metrics™
          </p>
        </header>


        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8">

          <h2 className="text-4xl font-black text-cyan-300">
            Scan equipment. Ask what matters.
          </h2>

          <p className="mt-4 text-slate-300">
            BAM Scan™ captures machine information and connects it with
            BAM Assist™ for troubleshooting and documentation.
          </p>

        </section>


        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">

          <h2 className="text-3xl font-black text-cyan-300">
            Equipment Image
          </h2>

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
            className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950"
          >
            Run BAM Scan™
          </button>

          <div className="mt-5 rounded-xl bg-slate-900 p-5">
            <p className="font-black text-cyan-300">
              {machineConnected
                ? "Equipment Connected"
                : "Status"}
            </p>

            <p>{scanStatus}</p>
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
            BAM Assist™ Machine Q&A
          </h2>

          {messages.map((msg, index) => (
            <div key={index} className="mt-4 rounded-xl bg-slate-900 p-5">
              <b className="text-cyan-300">
                {msg.role === "tech"
                  ? "Technician"
                  : "BAM Assist™"}
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
                ? "Ask about parts, faults, repair steps..."
                : "Scan equipment first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl bg-slate-900 p-4"
          />

          <button
            onClick={sendMessage}
            disabled={!machineConnected}
            className="mt-4 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950"
          >
            Ask BAM Assist™
          </button>

        </section>


        <footer className="mt-8 text-center text-sm text-cyan-50">
          © 2026 BAM Scan™ | BAMToolz™ | Ball AI Metrics™
        </footer>

      </div>
    </main>
  );
}