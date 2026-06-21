"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bam",
      text: "BAM Assist™ ready. Upload an equipment image, run BAM Scan™, then ask simple questions like voltage, motor type, model, safety risk, or next check.",
    },
  ]);

  async function runScan() {
    if (!file) {
      setResult("Select an equipment photo first.");
      return;
    }

    setResult("BAM Scan™ analyzing equipment intelligence...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResult(
        data.result ||
          data.message ||
          "BAM Scan™ connected, but no result text returned."
      );
    } catch (error: any) {
      setResult(error?.message || "BAM Scan™ connection failed.");
    }
  }

  function findLine(scanText: string, labels: string[]) {
    const lines = scanText.split("\n");

    for (const label of labels) {
      const match = lines.find((line) =>
        line.toLowerCase().startsWith(label.toLowerCase())
      );

      if (match) {
        const value = match.split(":").slice(1).join(":").trim();
        if (value && value.toLowerCase() !== "not visible") {
          return value;
        }
      }
    }

    return "";
  }

  function sendMessage() {
    if (!input.trim()) return;

    const techText = input.trim();
    const question = techText.toLowerCase();
    const currentScan = result || "";

    let answer = "";

    const manufacturer = findLine(currentScan, ["Manufacturer"]);
    const model = findLine(currentScan, ["Model"]);
    const serial = findLine(currentScan, ["Serial", "Serial/Tag"]);
    const voltage = findLine(currentScan, ["Voltage", "Ratings"]);
    const parts = findLine(currentScan, ["Possible Parts", "Replacement Parts", "Visible Parts"]);
    const safety = findLine(currentScan, ["Safety Notes", "Hazards", "Energy Sources"]);

    if (!currentScan) {
      answer =
        "Run BAM Scan™ first so I can answer from the equipment data.";
    } else if (question.includes("voltage") || question.includes("volt")) {
      answer = voltage
        ? `Voltage shown from scan: ${voltage}. Verify on the nameplate before testing.`
        : "I do not see voltage clearly in the scan. Send a closer photo of the nameplate or electrical tag.";
    } else if (question.includes("motor")) {
      answer = model || manufacturer
        ? `Motor/equipment info found: ${[manufacturer, model].filter(Boolean).join(" ")}. Send a closer nameplate photo if you need exact motor specs.`
        : "I do not see the motor model clearly. Send the motor nameplate or tag.";
    } else if (question.includes("model")) {
      answer = model
        ? `Model shown from scan: ${model}.`
        : "I do not see the model clearly. Send a closer photo of the equipment tag.";
    } else if (question.includes("serial") || question.includes("tag")) {
      answer = serial
        ? `Serial/tag shown from scan: ${serial}.`
        : "I do not see the serial/tag clearly. Send a closer photo of the tag.";
    } else if (question.includes("part") || question.includes("bearing") || question.includes("belt")) {
      answer = parts
        ? `Parts/info found from scan: ${parts}. Verify part numbers before ordering.`
        : "I do not see exact part numbers in the scan. Send the model number, parts plate, or a closer component photo.";
    } else if (question.includes("safe") || question.includes("safety") || question.includes("lockout") || question.includes("loto")) {
      answer = safety
        ? `Safety note from scan: ${safety}. Lockout/tagout before inspection or repair.`
        : "Use lockout/tagout before inspection. I do not see enough safety detail from the scan.";
    } else if (question.includes("next") || question.includes("check") || question.includes("do")) {
      answer =
        "Next check: verify the nameplate, confirm voltage/power off, look for fault codes, then send a closer photo of the issue area.";
    } else {
      answer =
        "I can help. Ask me one direct equipment question like: what voltage, what motor, what model, what parts, what safety risk, or what should I check next.";
    }

    const bamReply = `BAM Assist™

${answer}`;

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: bamReply },
    ]);

    setInput("");
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Scan™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball Advanced Management™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
            <a href="mailto:BAMToolzsupport@gmail.com" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Contact™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            AI EQUIPMENT INTELLIGENCE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Scan machines, capture knowledge, support technicians.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ is part of the BAMToolz™ industrial intelligence platform
            by Ball Advanced Management™. It is designed for equipment images,
            machine tags, maintenance history, safety, parts, controls,
            troubleshooting, and technician knowledge.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-slate-950/95 p-6 text-center shadow-xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">BAM SCAN™</p>
            <h3 className="mt-2 text-2xl font-black">IMAGE</h3>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 text-center shadow-xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">BAM ASSIST™</p>
            <h3 className="mt-2 text-2xl font-black">Q&A</h3>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 text-center shadow-xl">
            <p className="text-xs font-black tracking-[0.25em] text-cyan-300">BAM HUB™</p>
            <h3 className="mt-2 text-2xl font-black">MEMORY</h3>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">Equipment Image</h2>

          <p className="mt-4 text-slate-300">
            Upload a machine tag, equipment label, electrical panel, equipment log, or component photo.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-6 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-cyan-100"
          />

          <button
            onClick={runScan}
            className="mt-6 w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 hover:bg-cyan-400"
          >
            RUN BAM SCAN™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">BAM Scan™ Report</h2>

          <div className="mt-6 whitespace-pre-wrap rounded-xl border border-cyan-400/40 bg-slate-900 p-5 text-sm leading-6 text-slate-200">
            {result ||
              `Awaiting equipment image.

◈ Asset Intelligence
Manufacturer:
Equipment Type:
Model:
Serial:
Ratings:

◈ Safety Intelligence
Hazards:
Energy Sources:
Lockout / Tagout:

◈ Parts Intelligence
Components:
Replacement Parts:

◈ Troubleshooting
Observed Issues:
Tests:
Recommended Action:

◈ BAM Hub™ Machine Memory
Repair Notes:
Knowledge Captured:
Future Prevention:`}
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">BAM Assist™ Q&A</h2>

          <p className="mt-4 text-slate-300">
            Ask direct equipment questions: voltage, motor, model, serial/tag, parts, safety risk, or next check.
          </p>

          <div className="mt-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "tech"
                    ? "rounded-xl border border-cyan-200/50 bg-white/5 p-5"
                    : "rounded-xl border border-cyan-400/50 bg-cyan-500/10 p-5"
                }
              >
                <strong className="text-cyan-300">
                  {msg.role === "tech" ? "Technician" : "BAM Assist™"}
                </strong>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Example: What voltage is this? What motor is this? What should I check next?"
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white outline-none"
          />

          <button
            onClick={sendMessage}
            className="mt-4 w-full rounded-xl bg-cyan-500 px-6 py-4 font-black text-slate-950 hover:bg-cyan-400"
          >
            ASK BAM ASSIST™
          </button>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">BAMToolz™ Support</h2>

          <p className="mt-4 text-slate-300">
            Founder: Justin Ball | Company: Ball Advanced Management™
          </p>

          <p className="mt-4 text-slate-300">
            Email:{" "}
            <a href="mailto:BAMToolzsupport@gmail.com" className="font-black text-cyan-300 underline">
              BAMToolzsupport@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Scan™ | BAMToolz™ | Ball Advanced Management™</p>
        </footer>
      </div>
    </main>
  );
}