"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

type MachineIdentity = {
  name: string;
  manufacturer: string;
  model: string;
  serial: string;
};

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [scanData, setScanData] = useState("");
  const [machineIdentity, setMachineIdentity] = useState<MachineIdentity>({
    name: "",
    manufacturer: "",
    model: "",
    serial: "",
  });
  const [machineConnected, setMachineConnected] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanFunText, setScanFunText] = useState("BAMToolz™ standing by.");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function cleanField(value: string, fallback: string) {
    if (!value || value.toLowerCase() === "not visible") return fallback;
    return value;
  }

  function startProgressAnimation() {
    setScanProgress(7);
    setScanFunText("Initializing BAMToolz™ industrial scan...");

    const steps = [
      { progress: 18, text: "Preparing equipment identity scan..." },
      { progress: 33, text: "Reading visible labels, tags, and markers..." },
      { progress: 49, text: "Searching for nameplate, model, and serial data..." },
      { progress: 66, text: "Organizing machine intelligence profile..." },
      { progress: 82, text: "Connecting results to BAM AI Assist™..." },
      { progress: 94, text: "Preparing technician guidance..." },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.progress);
        setScanFunText(step.text);
      }, 700 * (index + 1));
    });
  }

  async function runScan() {
    if (!file) {
      setScanFunText(
        "Start with a machine nameplate, tag, label, fault screen, control panel, component, or visible equipment image."
      );
      setScanProgress(0);
      return;
    }

    setMachineConnected(false);
    setMessages([]);
    setScanData("");
    setMachineIdentity({
      name: "",
      manufacturer: "",
      model: "",
      serial: "",
    });

    startProgressAnimation();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("mode", "industrial");

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
        "No machine identity data was returned.";

      setScanData(report);

      setMachineIdentity({
        name: cleanField(data.name, "Scanned Equipment"),
        manufacturer: cleanField(data.manufacturer, "Pending identification"),
        model: cleanField(data.model, "Pending identification"),
        serial: cleanField(data.serial, "Pending identification"),
      });

      setMachineConnected(true);
      setScanProgress(100);
      setScanFunText("Machine connected. BAM AI Assist™ is ready.");

      setMessages([
        {
          role: "bam",
          text:
            "Machine connected. BAM AI Assist™ is ready. Ask about troubleshooting, parts, manuals, repairs, documentation, or maintenance history.",
        },
      ]);
    } catch (error: any) {
      setMachineConnected(false);
      setScanProgress(0);
      setScanFunText(
        error?.message || "Industrial identification stopped. Try another image."
      );
    }
  }

  async function sendMessage(customQuestion?: string) {
    const techText = customQuestion || input.trim();

    if (!techText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      {
        role: "bam",
        text: "BAM AI Assist™ is reviewing the machine identity...",
      },
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
          text: data.result || data.error || "BAM AI Assist™ returned no result.",
        },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "bam",
          text: error?.message || "BAM AI Assist™ connection failed.",
        },
      ]);
    }
  }  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-lg bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
              BAMToolz™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAMToolz™
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Professional AI Tools for Maintenance & Manufacturing
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {[
              ["Home™", "/"],
              ["BAM Scan™", "/scan"],
              ["BAM Hub™", "/hub"],
              ["Work Orders™", "/workorders"],
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
                INDUSTRIAL TECHNICIAN TOOLKIT™
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
                Scan equipment.
                <br />
                Build machine memory.
                <br />
                <span className="text-cyan-300">
                  Assist the technician.
                </span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                BAMToolz™ is the technician-focused side of the BAM™ ecosystem,
                built for maintenance teams, equipment records, troubleshooting,
                work orders, and facility intelligence. Capture a nameplate,
                equipment tag, fault screen, control panel, component, or visible
                machine image to begin building useful machine intelligence.
              </p>
            </div>

            <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.4)]" />

              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-2 border-cyan-300 bg-slate-950 shadow-2xl">
                <div className="text-center">
                  <CircuitIcon />

                  <p className="mt-4 text-sm font-black text-cyan-300">
                    Industrial Mode™
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Machine Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["BAM Scan™", "Capture equipment images and start AI-assisted identification.", "/scan"],
            ["BAM Hub™", "Store machine records, manuals, notes, and repair history.", "/hub"],
            ["Work Orders™", "Organize maintenance jobs, tasks, and technician activity.", "/workorders"],
            ["Metrics™", "Track downtime, repairs, trends, and facility performance.", "/metrics"],
          ].map(([title, text, href]) => (
            <a
              key={title}
              href={href}
              className="rounded-3xl border border-cyan-400/30 bg-slate-950 p-5 shadow-xl hover:bg-slate-900"
            >
              <h3 className="text-lg font-black text-cyan-300">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              <p className="mt-5 text-xs font-black text-cyan-200">
                Open Tool →
              </p>
            </a>
          ))}
        </section>

        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAMTOOLZ™ SYSTEM FLOW
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["1. Capture", "Scan tags, nameplates, panels, faults, components, or machine images."],
              ["2. Understand", "BAM AI™ helps identify equipment context, repair needs, and useful records."],
              ["3. Remember", "BAM Hub™ stores knowledge so every repair builds future machine intelligence."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-5"
              >
                <h3 className="font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-6 rounded-3xl border border-cyan-400/20 bg-slate-950 p-5 text-center text-xs text-slate-400">
          BAMToolz™ — Professional AI Tools for Maintenance & Manufacturing.
        </footer>
      </div>
    </main>
  );
}