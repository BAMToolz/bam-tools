"use client";

import { useState } from "react";

type Message = {
  role: "user" | "bam";
  text: string;
};

export default function HomeScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scanData, setScanData] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const [statusText, setStatusText] = useState("Home scanner standing by.");
  const [issueConnected, setIssueConnected] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function startProgressAnimation() {
    setScanProgress(10);
    setStatusText("Starting BAM Home™ scan...");

    const steps = [
      { progress: 25, text: "Identifying product, part, or issue..." },
      { progress: 45, text: "Researching available information..." },
      { progress: 65, text: "Connecting results to BAM Assist™..." },
      { progress: 85, text: "Preparing possible solutions..." },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.progress);
        setStatusText(step.text);
      }, 700 * (index + 1));
    });
  }

  async function runHomeScan() {
    if (!file) {
      setStatusText(
        "Start with a picture of the product, label, part, warning light, issue, or broken component."
      );
      setScanProgress(0);
      return;
    }

    setIssueConnected(false);
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
        "BAM Assist™ could not identify enough details from this image.";

      setScanData(report);
      setIssueConnected(true);
      setScanProgress(100);
      setStatusText("Product or issue connected. BAM Assist™ is ready.");

      setMessages([
        {
          role: "bam",
          text: "BAM Assist™ is ready. Ask about the product, model, parts, manuals, common problems, troubleshooting steps, or possible repair options.",
        },
      ]);
    } catch (error: any) {
      setIssueConnected(false);
      setScanProgress(0);
      setStatusText(error?.message || "BAM Home™ scan stopped. Try another image.");
    }
  }

  async function sendMessage() {
    const userText = input.trim();

    if (!userText) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "bam", text: "BAM Assist™ is researching the product or issue..." },
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
          text: data.result || data.error || "BAM Assist™ returned no result.",
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
              BAM Home™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Home Scan™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Identify products. Research answers. Find the repair path.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/bam-home" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Home™</a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Industrial Scan™</a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Access™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            PRODUCT IDENTIFICATION + BAM ASSIST™
          </p>

          <h2 className="mt-3 max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Scan a product, part, label, issue, or broken component.
          </h2>

          <p className="mt-4 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Home Scan™ helps identify everyday products, appliances,
            vehicles, tools, equipment, and components. BAM Assist™ helps
            research information, understand issues, find possible solutions,
            and connect users with the right repair path.
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Capture Item or Issue™
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Best results come from clear pictures of labels, model numbers,
              visible damage, warning lights, error screens, parts, or the item
              you want BAM Assist™ to research.
            </p>

            <label className="mt-6 block rounded-xl border border-dashed border-cyan-400 bg-slate-900 p-5 text-center hover:bg-slate-800">
              <span className="block text-sm font-black text-cyan-300">
                Select or Capture Image
              </span>

              <span className="mt-2 block text-xs text-slate-400">
                Use camera, photo library, or file upload.
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
              onClick={runHomeScan}
              className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
            >
              Run Home Scan™
            </button>
          </div>

          <div className="rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <h2 className="text-3xl font-black text-cyan-300">
              Home Scan Progress™
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

            <div className="mt-5 rounded-xl border border-yellow-300/60 bg-yellow-400/10 p-5">
              <h3 className="font-black text-yellow-200">Safety First™</h3>
              <p className="mt-2 text-sm leading-6 text-yellow-50">
                BAM Assist™ can help research and explain possible next steps.
                For dangerous repairs, electrical systems, gas, vehicles, or
                pressurized systems, use qualified help.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Assist™
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {issueConnected
              ? "BAM Assist™ is ready. Ask about product identity, model information, manuals, common failures, troubleshooting, parts, or possible repair options."
              : "Run a Home Scan™ first to connect BAM Assist™ to the item or issue."}
          </p>

          {messages.map((msg, index) => (
            <div key={index} className="mt-4 rounded-xl bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-cyan-300">
                {msg.role === "user" ? "User" : "BAM Assist™"}
              </p>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                {msg.text}
              </p>
            </div>
          ))}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!issueConnected}
            placeholder={
              issueConnected
                ? "Ask about the product, issue, parts, manual, common problems, or repair options..."
                : "Run a home scan first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-950 p-4 text-white placeholder:text-slate-400 outline-none disabled:bg-slate-950 disabled:text-slate-500"
          />

          <button
            onClick={sendMessage}
            disabled={!issueConnected || !input.trim()}
            className={`mt-4 w-full rounded-xl p-4 font-black ${
              issueConnected && input.trim()
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                : "border border-cyan-500/40 bg-slate-950 text-cyan-900"
            }`}
          >
            Ask BAM Assist™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Provider Network™
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            When additional help is needed, BAM Provider Network™ creates the
            future connection between users and qualified repair professionals.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Home Scan™ | BAMToolz™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
  );
}