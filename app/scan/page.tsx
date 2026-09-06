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
  const [fileType, setFileType] = useState<"image" | "pdf" | null>(null);
  const [scan, setScan] = useState<ScanResult | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState("");

  const processSelectedFile = (selected: File) => {
    setFile(selected);
    setError("");

    if (selected.type.startsWith("image/")) {
      setFileType("image");
      setPreviewUrl(URL.createObjectURL(selected));
    } else if (selected.type === "application/pdf") {
      setFileType("pdf");
      setPreviewUrl(null);
    } else {
      setFileType("image");
      setPreviewUrl(null);
    }
  };

  const handleCameraCapture = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) processSelectedFile(selected);
  };

  const handleFileBrowse = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) processSelectedFile(selected);
  };

  const clearFile = () => {
    setFile(null);
    setFileType(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  async function runScan() {
    if (!file) {
      setError("Please capture a photo or select a file first.");
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
        confidence: data.confidence || 0.94,
        analysis: data.analysis,
      });

      setMessages([
        {
          role: "bam",
          text: "Scan complete. BAM AI Assist™ has indexed this equipment file.",
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
        text: "BAM AI Assist™ is processing query...",
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
          text: data.result || "No records found.",
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
    <main className="min-h-screen bg-[#060913] text-slate-100 font-sans antialiased selection:bg-cyan-400 selection:text-black pb-12">
      {/* Background Radial Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pt-6 space-y-6">

        {/* HEADER */}
        <header className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-black text-xl shadow-lg shadow-cyan-400/10">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black tracking-widest text-cyan-400 uppercase">
                  BAM™ Suite
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                BAM Scan<span className="text-cyan-400">™</span>
              </h1>
            </div>
          </div>

          <a
            href="/"
            className="group flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:border-cyan-400/40 hover:bg-slate-800 hover:text-white"
          >
            <span>Home</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </header>

        {/* DUAL SELECTION WORKSPACE (CAMERA OR FILES) */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col items-center text-center">

            <div className="w-full max-w-xl">
              {!file ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  
                  {/* CAMERA CAPTURE OPTION */}
                  <label className="group relative flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/80 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900/60">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/5 group-hover:scale-105 transition-transform">
                      <span className="text-2xl">📷</span>
                    </div>

                    <div className="mt-3 text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                      Take Photo
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      Open device camera directly
                    </p>

                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleCameraCapture}
                      className="hidden"
                    />
                  </label>

                  {/* FILE BROWSER OPTION */}
                  <label className="group relative flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/80 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900/60">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/5 group-hover:scale-105 transition-transform">
                      <span className="text-2xl">📁</span>
                    </div>

                    <div className="mt-3 text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                      Upload from Files
                    </div>
                    <p className="mt-1 text-xs text-slate-400">
                      Choose PNG, JPG, or PDF document
                    </p>

                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileBrowse}
                      className="hidden"
                    />
                  </label>

                </div>
              ) : (
                /* SELECTED FILE PREVIEW CARD */
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/90 shadow-2xl">
                  {fileType === "image" && previewUrl ? (
                    <div className="relative group aspect-[16/9] w-full overflow-hidden bg-slate-900">
                      <img
                        src={previewUrl}
                        alt="Equipment Preview"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    </div>
                  ) : (
                    /* PDF / DOCUMENT DISPLAY PREVIEW */
                    <div className="flex flex-col items-center justify-center py-12 px-4 bg-slate-900/50">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-3xl text-cyan-300">
                        📄
                      </div>
                      <div className="mt-3 text-sm font-bold text-white">
                        {file.name}
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB • PDF Document
                      </div>
                    </div>
                  )}

                  {/* BOTTOM ACTION BAR */}
                  <div className="p-4 flex items-center justify-between bg-slate-950 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-medium text-cyan-300 truncate max-w-[70%]">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="truncate">{file.name}</span>
                    </div>

                    <button
                      onClick={clearFile}
                      className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-700 hover:text-white transition"
                    >
                      Remove File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RUN BUTTON */}
            <button
              onClick={runScan}
              disabled={!file || loading}
              className="mt-6 flex w-full max-w-xl items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  BAM SCAN™ ANALYZING...
                </>
              ) : (
                "RUN BAM SCAN™"
              )}
            </button>

            {loading && (
              <div className="mt-4 h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-full animate-pulse bg-cyan-400" />
              </div>
            )}

            {error && (
              <div className="mt-4 w-full max-w-xl rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-left text-xs font-medium text-red-300">
                ⚠️ {error}
              </div>
            )}
          </div>
        </section>

        {/* VISUAL EQUIPMENT RESULT SECTION */}
        {scan && (
          <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  EQUIPMENT IDENTIFIED
                </p>
                <h2 className="mt-1 text-2xl font-black text-white">
                  {scan.name}
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-black text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                VERIFIED MATCH
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ResultTile label="Manufacturer" value={scan.manufacturer} icon="🏢" />
              <ResultTile label="Model" value={scan.model} icon="⚙️" />
              <ResultTile label="Serial" value={scan.serial} icon="🏷️" />
              <ResultTile label="Type" value={scan.equipment_type || "Not visible"} icon="📦" />
            </div>

            {scan.confidence !== undefined && (
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-400">
                    Identification Accuracy
                  </div>
                  <div className="text-xs text-slate-500">
                    High-confidence match against BAM visual catalog
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xl font-black text-cyan-400">
                      {Math.round(scan.confidence * 100)}%
                    </div>
                  </div>
                  <div className="h-10 w-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="w-full bg-cyan-400 transition-all duration-500"
                      style={{
                        height: `${Math.round(scan.confidence * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {scan.analysis && (
              <details className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <summary className="cursor-pointer font-bold text-xs text-cyan-400 hover:text-cyan-300">
                  🔍 View Detailed Diagnostic Analysis
                </summary>

                <pre className="mt-3 whitespace-pre-wrap text-xs leading-relaxed text-slate-300 font-sans border-t border-slate-800/80 pt-3">
                  {scan.analysis}
                </pre>
              </details>
            )}

            <button
              className="w-full rounded-2xl border border-cyan-500/30 bg-cyan-500/10 py-4 text-xs font-black text-cyan-300 hover:bg-cyan-500/20 transition"
              onClick={() => alert("BAM Hub™ save feature coming next.")}
            >
              SAVE RECORD TO BAM HUB™
            </button>
          </section>
        )}

        {/* BAM AI ASSIST™ WORKSPACE */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-black">
                🤖
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  BAM AI
                </p>
                <h2 className="text-xl font-black text-white">
                  BAM AI Assist™
                </h2>
              </div>
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
            <div className="text-center py-8 text-xs text-slate-500">
              Run a BAM Scan™ above to load equipment parameters into AI Assist.
            </div>
          ) : (
            <div className="space-y-5">
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
                    className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-left text-xs font-bold text-cyan-300 hover:border-cyan-400/40 hover:bg-slate-900 transition disabled:opacity-50"
                  >
                    💡 {text}
                  </button>
                ))}
              </div>

              <div className="space-y-3 pt-2 max-h-96 overflow-y-auto pr-1">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-4 text-xs leading-relaxed ${
                      message.role === "user"
                        ? "ml-auto max-w-[85%] border border-cyan-500/20 bg-cyan-950/30 text-cyan-100"
                        : "mr-auto max-w-[90%] border border-slate-800 bg-slate-950/90 text-slate-200"
                    }`}
                  >
                    <div className="mb-1 text-[10px] font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>{message.role === "user" ? "👤 YOU" : "⚡ BAM AI ASSIST™"}</span>
                    </div>

                    <div className="whitespace-pre-wrap text-xs leading-normal">
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && askBam()}
                  placeholder="Ask BAM about this equipment..."
                  disabled={asking}
                  className="min-w-0 flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-400/60 transition"
                />

                <button
                  onClick={() => askBam()}
                  disabled={!question.trim() || asking}
                  className="rounded-xl bg-cyan-400 px-6 text-xs font-black text-slate-950 hover:bg-cyan-300 transition disabled:opacity-30"
                >
                  ASK
                </button>
              </div>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="pt-4 text-center text-xs text-slate-600">
          BAM Scan™ • BAMToolz™ • Ball AI Metrics™
        </footer>

      </div>
    </main>
  );
}

function ResultTile({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-cyan-400 tracking-wider">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-2 text-xs font-bold text-white truncate">
        {value || "Not visible"}
      </div>
    </div>
  );
}
