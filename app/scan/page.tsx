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

  const quickActions = [
    {
      icon: "🔍",
      title: "Learn",
      text: "Explain what this is and how it works.",
      prompt: "Learn: explain what this is and how it works.",
    },
    {
      icon: "🛠",
      title: "Fix",
      text: "Troubleshoot problems and possible causes.",
      prompt: "Fix: list possible problems, causes, and safe next steps.",
    },
    {
      icon: "📖",
      title: "Guide",
      text: "Give setup, care, instructions, or next steps.",
      prompt: "Guide: give simple instructions, setup, care, or next steps.",
    },
    {
      icon: "🔎",
      title: "Find",
      text: "Research parts, manuals, replacements, or options.",
      prompt: "Find: help find parts, manuals, replacements, or useful information.",
    },
  ];

  function startProgressAnimation() {
    setScanProgress(10);
    setStatusText("Starting BAM Scan™...");

    const steps = [
      { progress: 25, text: "Reading image details..." },
      { progress: 45, text: "Identifying item, product, part, or problem..." },
      { progress: 65, text: "Organizing useful information..." },
      { progress: 85, text: "Preparing BAM AI Assist™ guidance..." },
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
        "Start with a picture of an item, label, tool, product, vehicle, machine, or problem."
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
          text: `Scan complete.

I analyzed your image and organized what may help.

I can help you:

🔍 Learn
Understand what this is and how it works.

🛠 Fix
Troubleshoot problems and possible causes.

📖 Guide
Find instructions, care, setup, or next steps.

🔎 Find
Research parts, manuals, replacements, or options.

Ask BAM AI Assist™ anything.`,
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
      { role: "bam", text: "BAM AI Assist™ is thinking..." },
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
  }  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-lg bg-cyan-300 px-3 py-2 text-sm font-black text-slate-950">
              BAM
            </div>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Scan™
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Take a picture. Understand anything. Ask BAM AI Assist™.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {[
              ["Home™", "/"],
              ["BAMToolz™", "/toolz/scan"],
              ["Hub™", "/hub"],
              ["Metrics™", "/metrics"],
              ["Machines™", "/machines"],
              ["Access™", "/access"],
              ["Support™", "/support"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl border border-cyan-400/40 bg-slate-900 px-4 py-3 text-center text-xs font-black text-cyan-200 shadow-lg hover:bg-slate-800"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950 p-6 shadow-2xl sm:p-10">
          <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full border border-cyan-300/30" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-wide text-cyan-300">
                BAM SCAN™
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Take a picture.
                <br />
                Understand anything.
                <br />
                <span className="text-cyan-300">Ask BAM AI Assist™.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                BAM Scan™ helps identify everyday items, tools, products,
                vehicles, appliances, parts, plants, labels, documents,
                machines, warnings, damage, and repair problems. BAM AI Assist™
                explains what it sees, answers questions, researches helpful
                information, and guides the next step.
              </p>
            </div>

            <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center">
              <div className="absolute bottom-8 h-20 w-72 rounded-full border border-cyan-300/60 bg-cyan-400/10 blur-sm" />
              <div className="absolute bottom-12 h-12 w-64 rounded-full border border-cyan-300/40" />

              <div className="relative h-72 w-40 rounded-[2rem] border-4 border-cyan-300 bg-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.6)]">
                <div className="mx-auto mt-3 h-2 w-14 rounded-full bg-slate-700" />
                <div className="mt-16 flex flex-col items-center justify-center text-cyan-200">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-cyan-200">
                    <div className="h-10 w-10 rounded-full border-4 border-cyan-200" />
                    <div className="absolute -left-8 -top-8 h-8 w-8 border-l-2 border-t-2 border-cyan-200" />
                    <div className="absolute -right-8 -top-8 h-8 w-8 border-r-2 border-t-2 border-cyan-200" />
                    <div className="absolute -bottom-8 -left-8 h-8 w-8 border-b-2 border-l-2 border-cyan-200" />
                    <div className="absolute -bottom-8 -right-8 h-8 w-8 border-b-2 border-r-2 border-cyan-200" />
                  </div>
                  <p className="mt-12 text-xs font-black tracking-wide text-cyan-300">
                    IMAGE READY
                  </p>
                </div>
              </div>

              <div className="absolute right-4 top-6 rounded-2xl border border-cyan-300/40 bg-slate-950/90 p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300 bg-cyan-400/10 text-2xl">
                    🤖
                  </div>
                  <div>
                    <p className="text-sm font-black text-cyan-300">
                      BAM AI Assist™
                    </p>
                    <p className="text-xs text-slate-300">
                      Ready to help
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
            <h2 className="text-2xl font-black text-cyan-300 sm:text-3xl">
              Capture Image™
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Upload a clear image of an item, label, product, tool, appliance,
              vehicle, part, machine, warning, damage, model number, or problem.
            </p>

            <label className="mt-6 block rounded-2xl border border-dashed border-cyan-300/70 bg-slate-900/80 p-6 text-center hover:bg-slate-800">
              <span className="block text-4xl">☁️</span>
              <span className="mt-3 block text-sm font-black text-cyan-200">
                Select or Capture Image
              </span>
              <span className="mt-1 block text-xs text-slate-400">
                JPG, PNG, HEIC
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-4 w-full rounded-xl border border-cyan-400/50 bg-slate-950 p-4 text-sm text-slate-200"
              />
            </label>

            {file && (
              <div className="mt-4 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 p-4">
                <p className="text-sm font-black text-cyan-300">Selected Image</p>
                <p className="mt-2 break-all text-sm text-slate-200">{file.name}</p>
                <p className="mt-2 text-sm text-emerald-300">✓ Image ready</p>
              </div>
            )}

            <button
              onClick={runScan}
              className="mt-6 w-full rounded-2xl bg-cyan-400 p-4 font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-300"
            >
              ⛶ Run BAM Scan™
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
            <h2 className="text-2xl font-black text-cyan-300 sm:text-3xl">
              Scan Progress™
            </h2>

            <div className="mt-6 rounded-2xl bg-slate-900/80 p-5">
              <div className="mb-3 flex justify-between gap-4 text-sm font-bold text-cyan-300">
                <span>{statusText}</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-300 transition-all duration-500"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-5">
              <p className="text-sm font-black text-cyan-300">
                BAM AI Assist™ can help with:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => (
                  <div
                    key={action.title}
                    className="rounded-2xl border border-cyan-400/20 bg-slate-950/90 p-4"
                  >
                    <p className="text-2xl">{action.icon}</p>
                    <p className="mt-2 font-black text-cyan-300">{action.title}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-300">
                      {action.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-cyan-300 sm:text-3xl">
                BAM AI Assist™
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                {scanConnected
                  ? "BAM AI Assist™ is connected to this scan. Ask what it is, how it works, what may be wrong, what to do next, or what information to find."
                  : "Run BAM Scan™ first to connect BAM AI Assist™ to the image."}
              </p>
            </div>

            <div
              className={`rounded-full border px-4 py-2 text-xs font-black ${
                scanConnected
                  ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                  : "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
              }`}
            >
              {scanConnected ? "● Connected" : "● Standing by"}
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300 bg-cyan-400/10 text-3xl shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                  🤖
                </div>
                <div>
                  <p className="font-black text-cyan-300">BAM AI Assist™</p>
                  <p className="text-xs text-slate-400">
                    Vision guidance assistant
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-slate-950 p-4">
                <p className="text-sm font-black text-cyan-300">
                  What happens after a scan?
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  BAM AI Assist™ helps explain what was scanned, organize useful
                  details, answer questions, and guide possible next steps.
                </p>
              </div>
            </div>

            <div>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mt-4 rounded-2xl border p-5 ${
                    msg.role === "user"
                      ? "border-cyan-400/20 bg-cyan-500/10"
                      : "border-cyan-400/20 bg-slate-900"
                  }`}
                >
                  <p className="text-sm font-black uppercase tracking-wide text-cyan-300">
                    {msg.role === "user" ? "You" : "BAM AI Assist™"}
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                    {msg.text}
                  </p>
                </div>
              ))}

              {scanConnected && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {quickActions.map((action) => (
                    <button
                      key={action.title}
                      onClick={() => setInput(action.prompt)}
                      className="rounded-2xl border border-cyan-400/30 bg-slate-900 p-4 text-left hover:bg-slate-800"
                    >
                      <p className="text-2xl">{action.icon}</p>
                      <p className="mt-2 font-black text-cyan-300">
                        {action.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">
                        {action.text}
                      </p>
                    </button>
                  ))}
                </div>
              )}

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={!scanConnected}
                placeholder={
                  scanConnected
                    ? "Ask about the item, product, part, machine, issue, manual, replacement, repair options, care, setup, or next steps..."
                    : "Run BAM Scan™ first..."
                }
                className="mt-6 min-h-28 w-full rounded-2xl border border-cyan-400/40 bg-slate-950 p-4 text-white placeholder:text-slate-500 outline-none disabled:text-slate-600"
              />

              <button
                onClick={sendMessage}
                disabled={!scanConnected || !input.trim()}
                className={`mt-4 w-full rounded-2xl p-4 font-black ${
                  scanConnected && input.trim()
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-300"
                    : "border border-cyan-500/30 bg-slate-950 text-cyan-900"
                }`}
              >
                ✈ Ask BAM AI Assist™
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/20 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
  );
}