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
  const [saveStatus, setSaveStatus] = useState("");

  function cleanField(value: string, fallback: string) {
    if (!value || value.toLowerCase() === "not visible") return fallback;
    return value;
  }

  function startProgressAnimation() {
    setScanProgress(7);
    setScanFunText("Initializing BAMToolz™ industrial scan...");

    const steps = [
      { progress: 18, text: "Preparing machine identity scan..." },
      { progress: 33, text: "Reading equipment markers and visible labels..." },
      { progress: 49, text: "Searching for nameplate, model, and tag details..." },
      { progress: 66, text: "Building BAM Hub™ machine memory profile..." },
      { progress: 82, text: "Connecting results to BAM AI Assist™..." },
      { progress: 94, text: "Preparing technician assist response..." },
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
        "Start with a machine nameplate, tag, label, fault screen, control panel, or visible industrial equipment image."
      );
      setScanProgress(0);
      return;
    }

    setMachineConnected(false);
    setMessages([]);
    setSaveStatus("");
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
          text: "Machine connected. BAM AI Assist™ is ready. Ask about troubleshooting, parts, manuals, repairs, or maintenance history.",
        },
      ]);
    } catch (error: any) {
      setMachineConnected(false);
      setScanProgress(0);
      setScanFunText(error?.message || "Industrial identification stopped. Try another image.");
    }
  }

  async function saveToHub() {
    if (!scanData) {
      setSaveStatus("Run industrial identification before saving machine identity to BAM Hub™.");
      return;
    }

    setSaveStatus("Saving machine identity to BAM Hub™ machine memory...");

    const newMachine = {
      id: Date.now().toString(),
      name: machineIdentity.name || "Scanned Equipment",
      location: "Unassigned",
      manufacturer: machineIdentity.manufacturer || "Pending identification",
      model: machineIdentity.model || "Pending identification",
      serial: machineIdentity.serial || "Pending identification",
      notes: scanData,
      createdAt: new Date().toISOString(),
    };

    const existingMachines = JSON.parse(
      localStorage.getItem("bamHubMachines") || "[]"
    );

    localStorage.setItem(
      "bamHubMachines",
      JSON.stringify([...existingMachines, newMachine])
    );

    try {
      await fetch("/api/machines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMachine),
      });
    } catch {
      console.log("BAM Hub™ cloud prototype save skipped.");
    }

    setSaveStatus(`${newMachine.name} saved to BAM Hub™ machine memory on this device.`);
  }

  async function sendMessage(customQuestion?: string) {
    const techText = customQuestion || input.trim();

    if (!techText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: "BAM AI Assist™ is reviewing the machine identity..." },
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
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAMToolz™
            </div>

            <h1 className="mt-3 text-5xl font-black">BAMToolz™</h1>

            <p className="mt-2 text-cyan-50">
              Industrial technician tools powered by BAM Scan™, BAM Hub™, and BAM AI Assist™.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Scan™</a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Hub™</a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Work Orders™</a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Metrics™</a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Machines™</a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Access™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            INDUSTRIAL TECHNICIAN TOOLKIT™
          </p>

          <h2 className="mt-3 max-w-5xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            Scan equipment. Build machine memory. Assist the technician.
          </h2>

          <p className="mt-4 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAMToolz™ is the technician-focused side of the BAM™ ecosystem,
            built for facilities, maintenance teams, and equipment records.
            Capture a nameplate, equipment tag, fault screen, control panel,
            component, or visible machine image to begin building useful machine
            intelligence.
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black tracking-wide text-cyan-300">
                  BAM SCAN™ INDUSTRIAL MODE
                </p>

                <h2 className="mt-2 text-3xl font-black text-cyan-300">
                  Capture Equipment
                </h2>
              </div>

              <div
                className={`rounded-full px-4 py-2 text-xs font-black ${
                  file
                    ? "border border-cyan-300 bg-cyan-500/20 text-cyan-200"
                    : "border border-slate-700 bg-slate-900 text-slate-400"
                }`}
              >
                {file ? "IMAGE READY" : "AWAITING IMAGE"}
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Upload or capture an industrial machine image from your phone.
              Best results come from clear nameplates, serial tags, fault screens,
              control panels, components, or full equipment views.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-4">
                <p className="font-black text-cyan-300">Good Targets</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Nameplate, model tag, serial plate, HMI alarm, panel label.
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-4">
                <p className="font-black text-cyan-300">Next Step</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Run BAM Scan™ to build the first machine identity profile.
                </p>
              </div>
            </div>

            <label className="mt-6 block rounded-xl border border-dashed border-cyan-400 bg-slate-900 p-5 text-center hover:bg-slate-800">
              <span className="block text-sm font-black text-cyan-300">
                Select or Capture Industrial Machine Image
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
                <p className="text-sm font-black text-cyan-300">Selected Image</p>
                <p className="mt-2 break-all text-sm text-slate-200">{file.name}</p>
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
              Identification Progress
            </h2>

            <div className="mt-6 rounded-xl bg-slate-900 p-5">
              <div className="mb-2 flex justify-between gap-4 text-sm font-bold text-cyan-300">
                <span>{scanFunText}</span>
                <span>{scanProgress}%</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            </div>

            {machineConnected && (
              <div className="mt-5 rounded-xl border border-cyan-300 bg-cyan-400/15 p-4">
                <p className="font-black text-cyan-200">Machine Identity™</p>

                <div className="mt-4 grid gap-2 text-sm text-slate-100">
                  <p><span className="font-black text-cyan-200">Machine:</span> {machineIdentity.name}</p>
                  <p><span className="font-black text-cyan-200">Manufacturer:</span> {machineIdentity.manufacturer}</p>
                  <p><span className="font-black text-cyan-200">Model:</span> {machineIdentity.model}</p>
                  <p><span className="font-black text-cyan-200">Serial:</span> {machineIdentity.serial}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-5 shadow-2xl">
          <h2 className="text-xl font-black text-yellow-200">Safety First™</h2>

          <p className="mt-2 text-sm leading-6 text-yellow-50">
            Industrial support only. Follow OEM manuals, company procedures,
            OSHA requirements, site safety rules, PPE, and lockout/tagout before
            inspection, troubleshooting, or repair.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-cyan-300">
                BAM AI Assist™
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {machineConnected
                  ? "Machine connected. BAM AI Assist™ is ready. Ask about troubleshooting, parts, manuals, repairs, or maintenance history."
                  : "Begin industrial machine identification first to connect BAM AI Assist™ to the equipment."}
              </p>
            </div>

            <div
              className={`rounded-full px-4 py-2 text-xs font-black ${
                machineConnected
                  ? "border border-cyan-300 bg-cyan-500/20 text-cyan-200"
                  : "border border-slate-700 bg-slate-900 text-slate-400"
              }`}
            >
              {machineConnected ? "ASSIST ACTIVE" : "STANDING BY"}
            </div>
          </div>

          {messages.map((msg, index) => (
            <div key={index} className="mt-4 rounded-xl bg-slate-900 p-5">
              <p className="text-sm font-black uppercase tracking-wide text-cyan-300">
                {msg.role === "tech" ? "Technician" : "BAM AI Assist™"}
              </p>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-200">
                {msg.text}
              </p>
            </div>
          ))}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!machineConnected}
            placeholder={
              machineConnected
                ? "Ask BAM AI Assist™ about identification, verification, parts research, manuals, repairs, or maintenance history..."
                : "Begin industrial identification first..."
            }
            className="mt-6 min-h-28 w-full rounded-xl border border-cyan-400 bg-slate-950 p-4 text-white placeholder:text-slate-400 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40 disabled:bg-slate-950 disabled:text-slate-500 disabled:placeholder:text-slate-600"
          />

          <button
            onClick={() => sendMessage()}
            disabled={!machineConnected || !input.trim()}
            className={`mt-4 w-full rounded-xl p-4 font-black ${
              machineConnected && input.trim()
                ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                : "border border-cyan-500/40 bg-slate-950 text-cyan-900"
            }`}
          >
            Ask BAM AI Assist™
          </button>

          {machineConnected && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                onClick={saveToHub}
                className="rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
              >
                Save Machine Identity to BAM Hub™
              </button>

              <a
                href="/workorders"
                className="rounded-xl border border-cyan-400 p-4 text-center font-black text-cyan-200 hover:bg-cyan-950"
              >
                Create Work Order™
              </a>
            </div>
          )}

          {saveStatus && (
            <p className="mt-4 font-bold text-cyan-300">{saveStatus}</p>
          )}
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAMToolz™ | Industrial BAM Scan™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
  );
}