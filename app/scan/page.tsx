"use client";

import { useState } from "react";

type Message = {
  role: "user" | "bam";
  text: string;
};

export default function BamScanPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scanData, setScanData] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const [statusText, setStatusText] = useState("BAM Scan™ standing by.");
  const [scanConnected, setScanConnected] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function startProgressAnimation() {
    setScanProgress(10);
    setStatusText("Starting BAM Scan™...");

    const steps = [
      { progress: 25, text: "Reading image details..." },
      { progress: 45, text: "Identifying product, part, machine, or issue..." },
      { progress: 65, text: "Connecting results to BAM Hub™ machine memory..." },
      { progress: 85, text: "Preparing BAM AI Assist™..." },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.progress);
        setStatusText(step.text);
      }, 700 * (index + 1));
    });
  }

  async function runScan() {
    if (!file) {
      setStatusText(
        "Start with a picture of a product, part, label, machine, problem, or item."
      );
      return;
    }

    setScanConnected(false);
    setMessages([]);
    setScanData("");

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
        "No scan information returned.";

      setScanData(report);
      setScanConnected(true);
      setScanProgress(100);
      setStatusText("Scan complete. BAM AI Assist™ ready.");

      setMessages([
        {
          role: "bam",
          text:
            "BAM AI Assist™ is ready. Ask about this item, machine, repair options, information, parts, manuals, or next steps.",
        },
      ]);
    } catch {
      setStatusText("BAM Scan™ connection failed. Try again.");
      setScanProgress(0);
    }
  }

  async function sendMessage() {
    const userText = input.trim();

    if (!userText) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "bam", text: "BAM AI Assist™ is searching..." },
    ]);

    setInput("");

    try {
      const response = await fetch("/api/assist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userText,
          scanData,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: data.result || "No answer returned.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: "BAM AI Assist™ connection failed.",
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
            <h1 className="mt-3 text-5xl font-black">BAM Scan™</h1>
            <p className="mt-2 text-cyan-50">
              Identify products, parts, machines, problems, and next steps.
            </p>
          </div>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Capture Image™
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Upload a clear image of the item, label, part, machine, issue,
              warning, damage, model number, or repair problem.
            </p>

            {/* Changed border-dashed to border-solid below */}
            <label className="mt-6 block rounded-xl border border-solid border-cyan-400 bg-slate-900 p-5 text-center hover:bg-slate-800">
              <span className="block text-sm font-black text-cyan-300">
                Select or Capture Image
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-4 w-full rounded-xl border border-cyan-400 bg-slate-950 p-4 text-sm text-slate-200"
              />
            </label>

            {file && (
              <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-4">
                <p className="text-sm font-black text-cyan-300">
                  Selected Image
                </p>
                <p className="mt-2 break-all text-sm text-slate-200">
                  {file.name}
                </p>
              </div>
            )}

            <button
              onClick={runScan}
              className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
            >
              Run BAM Scan™
            </button>
          </div>

          <div className="rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Scan Progress™
            </h2>
            <div className="mt-6 rounded-xl bg-slate-900 p-5">
              <div className="mb-2 flex justify-between gap-4 text-sm font-bold text-cyan-300">
                <span>{statusText}</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* ... (Rest of your component remains exactly the same) */}
      </div>
    </main>
  );
}