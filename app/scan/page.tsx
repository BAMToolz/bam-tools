"use client";

import { useState, ChangeEvent } from "react";

type ScanResult = {
  name: string;
  manufacturer: string;
  model: string;
  serial: string;
  equipment_type?: string;
  confidence?: number;
  analysis?: string;
};

type Message = {
  role: "user" | "bam";
  text: string;
};

export default function BamScanPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [scan, setScan] = useState<ScanResult | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
      setError("");
    }
  };

  const clearFile = () => {
    setFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  async function runScan() {
    if (!file) {
      setError("Take or select a photo first.");
      return;
    }

    setLoading(true);
    setError("");
    setScan(null);
    setMessages([]);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("mode", "industrial");

      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "BAM Scan failed.");
      }

      setScan({
        name: data.name || "Scanned Equipment",
        manufacturer: data.manufacturer || "Not visible",
        model: data.model || "Not visible",
        serial: data.serial || "Not visible",
        equipment_type: data.equipment_type || "Not visible",
        confidence: data.confidence,
        analysis: data.analysis,
      });

      setMessages([
        {
          role: "bam",
          text: "Scan complete. BAM AI Assist™ is ready.",
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "BAM Scan failed."
      );
    } finally {
      setLoading(false);
    }
  }

  async function askBam(text = question) {
    const userText = text.trim();

    if (!userText || !scan) return;

    setAsking(true);
    setQuestion("");

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userText,
      },
      {
        role: "bam",
        text: "BAM AI Assist™ is thinking...",
      },
    ]);

    try {
      const response = await fetch("/api/assist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userText,
          scanData: JSON.stringify(scan),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "BAM AI Assist failed.");
      }

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: data.result || "No answer returned.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text:
            err instanceof Error
              ? err.message
              : "BAM AI Assist failed.",
        },
      ]);
    } finally {
      setAsking(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#090D16] px-4 py-8 text-slate-100 font-sans antialiased">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* HEADER */}
        <header className="flex items-center justify-between border-b border-slate-800/80 pb-6">
          <div>
            <div className="text-xs font-black tracking-wider text-cyan-400 uppercase">
              BAM™
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white mt-0.5">
              BAM Scan™
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Scan equipment. Identify it. Get answers.
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-slate-700/80 bg-slate-900 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            Home
          </a>
        </header>

        {/* SCANNER SECTION */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">

            {!previewUrl ? (
              <label className="group relative flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-8 transition hover:border-cyan-500/50 hover:bg-slate-950">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-2xl group-hover:scale-105 transition-transform">
                  📷
                </div>

                <div className="mt-4 text-sm font-black text-cyan-400">
                  Take Photo / Select Image
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  JPG • PNG • HEIC
                </p>

                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={previewUrl}
                    alt="Scanned Preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-slate-800 bg-slate-900/60">
                  <span className="truncate text-xs font-medium text-slate-300">
                    ✓ {file?.name}
                  </span>
                  <button
                    onClick={clearFile}
                    className="text-xs font-bold text-slate-400 hover:text-cyan-400 transition"
                  >
                    Change Photo
                  </button>
                </div>
              </div>
            )}

            <h2 className="mt-6 text-xl font-black text-white">
              Scan Equipment
            </h2>

            <p className="mx-auto mt-1 max-w-md text-xs text-slate-400">
              Take a photo of a machine, nameplate, component, part, tool, or maintenance issue.
            </p>

            {/* RUN BUTTON */}
            <button
              onClick={runScan}
              disabled={!file || loading}
              className="mt-6 flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-sm font-black text-slate-950 shadow-sm transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? "BAM SCAN™ ANALYZING..." : "RUN BAM SCAN™"}
            </button>

            {loading && (
              <div className="mt-4 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-full animate-pulse bg-cyan-400" />
              </div>
            )}

            {error && (
              <div className="mt-4 w-full max-w-md rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-left text-xs font-medium text-red-300">
                {error}
              </div>
            )}
          </div>
        </section>

        {/* RESULTS SECTION */}
        {scan && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  EQUIPMENT IDENTIFIED
                </p>
                <h2 className="mt-1 text-2xl font-black text-white">
                  {scan.name}
                </h2>
              </div>

              <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-black text-emerald-400">
                ✓ SCANNED
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <ResultCard label="Manufacturer" value={scan.manufacturer} />
              <ResultCard label="Model" value={scan.model} />
              <ResultCard label="Serial" value={scan.serial} />
              <ResultCard label="Equipment Type" value={scan.equipment_type || "Not visible"} />
            </div>

            {scan.confidence !== undefined && (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-400">
                    Identification Confidence
                  </span>
                  <span className="font-black text-cyan-400">
                    {Math.round(scan.confidence * 100)}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                    style={{
                      width: `${Math.round(scan.confidence * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {scan.analysis && (
              <details className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <summary className="cursor-pointer font-bold text-xs text-cyan-400 hover:text-cyan-300">
                  View Scan Details
                </summary>

                <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-slate-300 font-sans border-t border-slate-800 pt-3">
                  {scan.analysis}
                </pre>
              </details>
            )}

            <button
              className="w-full rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 text-xs font-black text-cyan-300 hover:bg-cyan-500/20 transition"
              onClick={() => alert("BAM Hub™ save feature coming next.")}
            >
              SAVE TO BAM HUB™
            </button>
          </section>
        )}

        {/* BAM AI ASSIST™ SECTION */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                BAM AI
              </p>
              <h2 className="mt-0.5 text-2xl font-black text-white">
                BAM AI Assist™
              </h2>
            </div>

            <div
              className={`rounded-full px-3 py-1.5 text-xs font-black border ${
                scan
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-slate-950 border-slate-800 text-slate-500"
              }`}
            >
              {scan ? "● CONNECTED" : "● STANDBY"}
            </div>
          </div>

          {!scan ? (
            <p className="text-xs text-slate-500 py-2">
              Run a BAM Scan™ to connect AI Assist.
            </p>
          ) : (
            <div className="space-y-5">
              {/* QUICK QUESTIONS */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  "What is this?",
                  "Troubleshoot it",
                  "Find the manual",
                  "What parts do I need?",
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() => askBam(text)}
                    disabled={asking}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-left text-xs font-bold text-cyan-300 hover:border-slate-700 hover:bg-slate-900 transition disabled:opacity-50"
                  >
                    {text}
                  </button>
                ))}
              </div>

              {/* MESSAGES */}
              <div className="space-y-3 pt-1">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-4 text-xs leading-relaxed ${
                      message.role === "user"
                        ? "ml-auto max-w-[85%] border border-cyan-500/20 bg-cyan-950/20 text-cyan-100"
                        : "mr-auto max-w-[90%] border border-slate-800 bg-slate-950 text-slate-200"
                    }`}
                  >
                    <div className="mb-1 text-[10px] font-black text-cyan-400 uppercase tracking-wider">
                      {message.role === "user" ? "YOU" : "BAM AI ASSIST™"}
                    </div>

                    <div className="whitespace-pre-wrap text-xs leading-normal">
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* QUESTION INPUT */}
              <div className="flex gap-2 pt-1">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && askBam()}
                  placeholder="Ask BAM about this equipment..."
                  disabled={asking}
                  className="min-w-0 flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 transition"
                />

                <button
                  onClick={() => askBam()}
                  disabled={!question.trim() || asking}
                  className="rounded-xl bg-cyan-400 px-5 text-xs font-black text-slate-950 hover:bg-cyan-300 transition disabled:opacity-30"
                >
                  ASK
                </button>
              </div>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="py-6 text-center text-xs text-slate-600">
          BAM Scan™ • BAMToolz™ • Ball AI Metrics™
        </footer>

      </div>
    </main>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
      <div className="text-[10px] font-black uppercase text-cyan-400 tracking-wider">
        {label}
      </div>
      <div className="mt-1.5 text-xs font-bold text-white">
        {value || "Not visible"}
      </div>
    </div>
  );
}
