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

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/toolz/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAMToolz™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Hub™
            </a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Metrics™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machines™
            </a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Access™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAM SCAN™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
            Take a picture. Identify what it is. Ask BAM AI Assist™.
          </h2>

          <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ helps users identify products, parts, appliances, tools,
            vehicles, components, labels, machines, problems, and repair
            questions. BAM AI Assist™ helps research information, possible
            causes, parts, manuals, options, and next steps while future BAM Hub™
            memory preserves useful knowledge over time.
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Capture Image™
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Upload a clear image of the item, label, part, machine, issue,
              warning, damage, model number, or repair problem.
            </p>

            <label className="mt-6 block rounded-xl border border-dashed border-cyan-400 bg-slate-900 p-5 text-center hover:bg-slate-800">
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

        <section className="mt-8 rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI Assist™
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {scanConnected
              ? "BAM AI Assist™ is ready. Ask about what was scanned, possible causes, parts, manuals, options, or next steps."
              : "Run BAM Scan™ first to connect BAM AI Assist™ to the image."}
          </p>

          {messages.map((msg, index) => (
            <div key={index} className="mt-4 rounded-xl bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-cyan-300">
                {msg.role === "user" ? "User" : "BAM AI Assist™"}
              </p>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                {msg.text}
              </p>
            </div>
          ))}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!scanConnected}
            placeholder={
              scanConnected
                ? "Ask about the item, product, part, machine, issue, manual, replacement, or repair options..."
                : "Run BAM Scan™ first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-950 p-4 text-white placeholder:text-slate-400 outline-none disabled:text-slate-500"
          />

          <button
            onClick={sendMessage}
            disabled={!scanConnected || !input.trim()}
            className={`mt-4 w-full rounded-xl p-4 font-black ${
              scanConnected && input.trim()
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                : "border border-cyan-500/40 bg-slate-950 text-cyan-900"
            }`}
          >
            Ask BAM AI Assist™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Provider Network™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            When a repair needs additional help, BAM Scan™ can connect users with
            future verified providers, technicians, and service professionals.
            BAM Access™ will manage accounts, requests, provider profiles, and
            protected repair workflows.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/access"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Join BAM Provider Network™
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Contact BAM Support™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
  );
}