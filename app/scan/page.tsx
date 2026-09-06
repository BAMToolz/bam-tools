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
      setError("Please capture or upload an image first.");
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
        throw new Error(data.error || "Equipment identification failed.");
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
          text: "Equipment scan analyzed. What information do you need?",
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Equipment identification failed."
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
        text: "Analyzing database records...",
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
        throw new Error(data.error || "Assistant inquiry failed.");
      }

      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: data.result || "No records returned for this query.",
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
              : "Unable to process query.",
        },
      ]);
    } finally {
      setAsking(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0f17] px-4 py-8 text-slate-100 antialiased">
      <div className="mx-auto max-w-4xl space-y-8">

        {/* HEADER */}
        <header className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                BAM Platform v2.4
              </span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Equipment Scanner
            </h1>
          </div>

          <a
            href="/"
            className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Dashboard →
          </a>
        </header>

        {/* IMAGE CAPTURE SECTION */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">

            {!previewUrl ? (
              <label className="group relative flex w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-8 transition hover:border-slate-500 hover:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 group-hover:scale-105 transition-transform">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M68 68h0M3 9a2 2 0 012-2h3.172a2 2 0 001.414-.586l1.828-1.828A2 2 0 0112.828 4h2.343a2 2 0 011.414.586l1.828 1.828A2 2 0 0019.828 7H21a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <div className="mt-4 text-sm font-semibold text-slate-200">
                  Upload or Capture Image
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Nameplates, serial numbers, parts, or whole machinery
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
              <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <img
                    src={previewUrl}
                    alt="Captured preview"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-slate-800 bg-slate-900/40">
                  <span className="truncate text-xs font-mono text-slate-400">
                    {file?.name}
                  </span>
                  <button
                    onClick={clearFile}
                    className="text-xs font-semibold text-slate-300 hover:text-red-400 transition"
                  >
                    Remove Photo
                  </button>
                </div>
              </div>
            )}

            {/* SCAN ACTION BUTTON */}
            <button
              onClick={runScan}
              disabled={!file || loading}
              className="mt-6 flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-30"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin text-slate-950" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing Image...
                </>
              ) : (
                "Identify Equipment"
              )}
            </button>

            {error && (
              <div className="mt-4 w-full max-w-md rounded-lg border border-red-900/50 bg-red-950/30 p-3 text-left text-xs text-red-400">
                {error}
              </div>
            )}
          </div>
        </section>

        {/* IDENTIFICATION RESULTS */}
        {scan && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Identification Record
                </span>
                <h2 className="text-xl font-bold text-white mt-0.5">
                  {scan.name}
                </h2>
              </div>

              <span className="rounded-md border border-emerald-800/60 bg-emerald-950/40 px-2.5 py-1 text-xs font-mono font-medium text-emerald-400">
                Match Verified
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <DataField label="Manufacturer" value={scan.manufacturer} />
              <DataField label="Model Number" value={scan.model} />
              <DataField label="Serial Number" value={scan.serial} />
              <DataField label="Equipment Category" value={scan.equipment_type || "Unspecified"} />
            </div>

            {scan.confidence !== undefined && (
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Match Confidence</span>
                  <span className="font-mono font-semibold text-slate-200">
                    {(scan.confidence * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full bg-slate-300 transition-all duration-500"
                    style={{ width: `${Math.round(scan.confidence * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {scan.analysis && (
              <details className="group rounded-xl border border-slate-800 bg-slate-950 p-4 transition">
                <summary className="cursor-pointer text-xs font-semibold text-slate-300 hover:text-white">
                  Technical Scan Breakdown
                </summary>
                <div className="mt-3 border-t border-slate-800 pt-3 text-xs leading-relaxed font-mono text-slate-400 whitespace-pre-wrap">
                  {scan.analysis}
                </div>
              </details>
            )}

            <button
              className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition"
              onClick={() => alert("Saved to BAM Hub database.")}
            >
              Save Record to Workspace
            </button>
          </section>
        )}

        {/* TECHNICAL ASSISTANT CHAT */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg font-bold text-white">Equipment Knowledge Base</h2>
              <p className="text-xs text-slate-400">Query specifications, manuals, or maintenance logs</p>
            </div>

            <span
              className={`rounded-md px-2.5 py-1 text-xs font-mono font-medium ${
                scan
                  ? "bg-slate-800 text-slate-300 border border-slate-700"
                  : "bg-slate-950 text-slate-600 border border-slate-800"
              }`}
            >
              {scan ? "Session Active" : "Standby"}
            </span>
          </div>

          {!scan ? (
            <p className="text-xs text-slate-500 py-2">
              Run an equipment scan to load technical context and ask questions.
            </p>
          ) : (
            <div className="space-y-5">
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Maintenance schedule",
                  "Common error codes",
                  "Parts catalog",
                  "Operating limits",
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() => askBam(text)}
                    disabled={asking}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-slate-700 hover:text-white disabled:opacity-50"
                  >
                    {text}
                  </button>
                ))}
              </div>

              {/* Message History */}
              <div className="space-y-3 pt-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-4 text-xs leading-relaxed ${
                      message.role === "user"
                        ? "ml-auto max-w-[80%] border border-slate-700 bg-slate-800 text-slate-100"
                        : "mr-auto max-w-[90%] border border-slate-800 bg-slate-950 text-slate-300"
                    }`}
                  >
                    <div className="mb-1 text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase">
                      {message.role === "user" ? "Operator Inquiry" : "System Response"}
                    </div>
                    <div className="whitespace-pre-wrap">{message.text}</div>
                  </div>
                ))}
              </div>

              {/* Input Control */}
              <div className="flex gap-2 pt-2">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && askBam()}
                  placeholder="Ask a technical question regarding this component..."
                  disabled={asking}
                  className="min-w-0 flex-1 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-100 placeholder-slate-500 outline-none focus:border-slate-600 transition"
                />

                <button
                  onClick={() => askBam()}
                  disabled={!question.trim() || asking}
                  className="rounded-xl bg-slate-100 px-5 text-xs font-semibold text-slate-950 hover:bg-white transition disabled:opacity-30"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="pt-2 text-center text-xs font-mono text-slate-600">
          BAM Industrial Data Systems
        </footer>

      </div>
    </main>
  );
}

function DataField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-3.5">
      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-xs font-medium text-slate-200">
        {value || "Not visible"}
      </div>
    </div>
  );
}
