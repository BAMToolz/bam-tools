"use client";

import { useState } from "react";

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
  const [scan, setScan] = useState<ScanResult | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [asking, setAsking] = useState(false);
  const [error, setError] = useState("");

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
        confidence:
          typeof data.confidence === "number"
            ? data.confidence
            : undefined,
        analysis: data.analysis || "",
      });

      setMessages([
        {
          role: "bam",
          text: "Scan complete. BAM AI Assist™ is ready.",
        },
      ]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "BAM Scan failed."
      );
    } finally {
      setLoading(false);
    }
  }

  async function askBam(text = question) {
    const userText = text.trim();

    if (!userText || !scan || asking) {
      return;
    }

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
        throw new Error(
          data.error || "BAM AI Assist failed."
        );
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

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = e.target.files?.[0] || null;

    setFile(selectedFile);
    setError("");
    setScan(null);
    setMessages([]);
  }

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-6 text-white">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <header className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-black text-cyan-300">
              BAM™
            </div>

            <h1 className="text-3xl font-black">
              BAM Scan™
            </h1>

            <p className="text-sm text-slate-400">
              Scan equipment. Identify it. Get answers.
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-cyan-400/30 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Home
          </a>
        </header>

        {/* SCANNER */}
        <section className="rounded-3xl border border-cyan-400/30 bg-slate-950 p-6 shadow-2xl">
          <div className="text-center">

            {/* SCANNER ICON */}
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-3xl border-2 border-cyan-300 bg-slate-900">
              <div className="h-20 w-20 rounded-2xl border-2 border-cyan-300">
                <div className="mx-auto mt-8 h-4 w-4 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
              </div>
            </div>

            <h2 className="mt-6 text-2xl font-black text-cyan-300">
              Scan Equipment
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
              Take a photo of a machine, nameplate, component,
              part, tool, or maintenance issue.
            </p>

            {/* FILE INPUT */}
            <label className="mx-auto mt-6 block max-w-md cursor-pointer rounded-2xl border border-dashed border-cyan-400/50 bg-slate-900 p-5 transition hover:bg-slate-800">
              <div className="text-3xl">
                📷
              </div>

              <div className="mt-2 font-black text-cyan-300">
                Take Photo / Select Image
              </div>

              <div className="mt-1 text-xs text-slate-500">
                JPG • PNG • HEIC
              </div>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {/* SELECTED FILE */}
            {file && (
              <div className="mx-auto mt-4 max-w-md rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-sm text-cyan-300">
                ✓ {file.name}
              </div>
            )}

            {/* SCAN BUTTON */}
            <button
              onClick={runScan}
              disabled={!file || loading}
              className="mx-auto mt-5 block w-full max-w-md rounded-2xl bg-cyan-400 p-4 font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading
                ? "BAM SCAN™ ANALYZING..."
                : "RUN BAM SCAN™"}
            </button>

            {/* LOADING BAR */}
            {loading && (
              <div className="mx-auto mt-5 h-2 max-w-md overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-full animate-pulse bg-cyan-300" />
              </div>
            )}

            {/* ERROR */}
            {error && (
              <div className="mx-auto mt-4 max-w-md rounded-xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-300">
                {error}
              </div>
            )}
          </div>
        </section>

        {/* RESULT */}
        {scan && (
          <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950 p-6 shadow-2xl">

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-widest text-cyan-400">
                  EQUIPMENT IDENTIFIED
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {scan.name}
                </h2>
              </div>

              <div className="shrink-0 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-300">
                ✓ SCANNED
              </div>
            </div>

            {/* IDENTIFICATION GRID */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <Result
                label="Manufacturer"
                value={scan.manufacturer}
              />

              <Result
                label="Model"
                value={scan.model}
              />

              <Result
                label="Serial"
                value={scan.serial}
              />

              <Result
                label="Equipment Type"
                value={
                  scan.equipment_type ||
                  "Not visible"
                }
              />

            </div>

            {/* CONFIDENCE */}
            {scan.confidence !== undefined && (
              <div className="mt-4 rounded-xl bg-slate-900 p-4">

                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-400">
                    Identification Confidence
                  </span>

                  <span className="font-black text-cyan-300">
                    {Math.round(
                      scan.confidence * 100
                    )}
                    %
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-cyan-300 transition-all duration-500"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(
                          0,
                          Math.round(
                            scan.confidence * 100
                          )
                        )
                      )}%`,
                    }}
                  />
                </div>

              </div>
            )}

            {/* SCAN DETAILS */}
            {scan.analysis && (
              <details className="mt-4 rounded-xl bg-slate-900 p-4">
                <summary className="cursor-pointer font-bold text-cyan-300">
                  View Scan Details
                </summary>

                <pre className="mt-4 whitespace-pre-wrap text-sm leading-6 text-slate-300">
                  {scan.analysis}
                </pre>
              </details>
            )}

            {/* SAVE */}
            <button
              className="mt-5 w-full rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4 font-black text-cyan-300 transition hover:bg-cyan-400/20"
              onClick={() =>
                alert(
                  "BAM Hub™ save feature coming next."
                )
              }
            >
              SAVE TO BAM HUB™
            </button>

          </section>
        )}

        {/* AI ASSIST */}
        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950 p-6 shadow-2xl">

          {/* AI HEADER */}
          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-xs font-black tracking-widest text-cyan-400">
                BAM AI
              </p>

              <h2 className="mt-1 text-2xl font-black text-cyan-300">
                BAM AI Assist™
              </h2>
            </div>

            <div
              className={`rounded-full px-3 py-2 text-xs font-black ${
                scan
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-slate-900 text-slate-500"
              }`}
            >
              {scan
                ? "● CONNECTED"
                : "● STANDBY"}
            </div>

          </div>

          {/* NO SCAN */}
          {!scan && (
            <p className="mt-5 text-sm text-slate-500">
              Run a BAM Scan™ to connect AI Assist.
            </p>
          )}

          {/* CONNECTED */}
          {scan && (
            <>

              {/* QUICK QUESTIONS */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

                {[
                  "What is this?",
                  "Troubleshoot it",
                  "Find the manual",
                  "What parts do I need?",
                ].map((text) => (
                  <button
                    key={text}
                    onClick={() =>
                      askBam(text)
                    }
                    disabled={asking}
                    className="rounded-xl border border-cyan-400/20 bg-slate-900 p-3 text-left text-xs font-bold text-cyan-300 transition hover:bg-slate-800 disabled:opacity-50"
                  >
                    {text}
                  </button>
                ))}

              </div>

              {/* MESSAGES */}
              <div className="mt-5 space-y-3">

                {messages.map(
                  (message, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-cyan-400/10 text-cyan-100"
                          : "bg-slate-900 text-slate-200"
                      }`}
                    >

                      <div className="mb-2 text-xs font-black text-cyan-400">
                        {message.role ===
                        "user"
                          ? "YOU"
                          : "BAM AI ASSIST™"}
                      </div>

                      <div className="whitespace-pre-wrap text-sm leading-6">
                        {message.text}
                      </div>

                    </div>
                  )
                )}

              </div>

              {/* QUESTION INPUT */}
              <div className="mt-5 flex gap-2">

                <input
                  value={question}
                  onChange={(e) =>
                    setQuestion(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      !e.shiftKey
                    ) {
                      e.preventDefault();
                      askBam();
                    }
                  }}
                  placeholder="Ask BAM about this equipment..."
                  disabled={asking}
                  className="min-w-0 flex-1 rounded-xl border border-cyan-400/30 bg-slate-900 p-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                />

                <button
                  onClick={() => askBam()}
                  disabled={
                    !question.trim() ||
                    asking
                  }
                  className="rounded-xl bg-cyan-400 px-5 font-black text-slate-950 transition hover:bg-cyan-300 disabled:opacity-30"
                >
                  {asking
                    ? "..."
                    : "ASK"}
                </button>

              </div>

            </>
          )}

        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-xs text-slate-600">
          BAM Scan™ • BAMToolz™ • Ball AI Metrics™
        </footer>

      </div>
    </main>
  );
}

/* RESULT COMPONENT */

function Result({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

      <div className="text-xs font-black uppercase tracking-wider text-slate-500">
        {label}
      </div>

      <div className="mt-2 break-words text-lg font-black text-white">
        {value || "Not visible"}
      </div>

    </div>
  );
}