"use client";

import { useState } from "react";

type ScanResult = {
  equipment: string;
  confidence: string;
  manufacturer: string;
  model: string;
  issue: string;
  action: string;
};

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setResult(null);
  }

  function runScan() {
    if (!image) {
      alert("Take or upload a machine photo first.");
      return;
    }

    setScanning(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        equipment: "Industrial Motor / Machine Tag",
        confidence: "Demo Mode - 92%",
        manufacturer: "BAMToolz AI Reading",
        model: "Photo Data Detected",
        issue: "Manual and parts data needed for deeper repair guidance.",
        action:
          "Save this machine profile, attach manuals, add parts list, and build repair history.",
      });

      setScanning(false);
    }, 1800);
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="mx-auto max-w-6xl px-5 py-6">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-500 px-4 py-2 text-2xl font-black text-white shadow-lg shadow-blue-500/40">
              BAM
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wide text-white">
                BAMToolz
              </h1>
              <p className="text-sm font-semibold text-blue-300">
                Maintenance AI Scanner
              </p>
            </div>
          </div>

          <div className="rounded-full border border-blue-400/40 px-4 py-2 text-xs font-bold text-blue-300">
            DEMO BUILD
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-blue-500/30 bg-slate-900 p-6 shadow-2xl shadow-blue-500/10">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-400">
              Ball Advanced Maintenance Tools
            </p>

            <h2 className="mb-4 text-4xl font-black leading-tight md:text-6xl">
              Scan.
              <br />
              Recognize.
              <br />
              Fix Faster.
            </h2>

            <p className="mb-6 text-slate-300">
              Upload or take a photo of equipment. BAMToolz will build a machine
              profile, connect manuals, track parts, and turn repair history into
              technician knowledge.
            </p>

            <div className="rounded-2xl border border-blue-400/20 bg-slate-950 p-4">
              <label className="block cursor-pointer rounded-xl border border-dashed border-blue-400/50 bg-slate-900 p-6 text-center hover:bg-slate-800">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <p className="text-lg font-black text-blue-300">
                  Tap to Take / Upload Machine Photo
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Equipment tag, motor plate, panel label, or machine photo
                </p>
              </label>

              {image && (
                <img
                  src={image}
                  alt="Uploaded machine"
                  className="mt-4 max-h-72 w-full rounded-xl object-cover"
                />
              )}

              <button
                onClick={runScan}
                disabled={scanning}
                className="mt-4 w-full rounded-xl bg-blue-500 px-6 py-4 text-lg font-black text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 disabled:opacity-60"
              >
                {scanning ? "Scanning Machine..." : "Run BAM Scan"}
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/30 bg-slate-900 p-6 shadow-2xl shadow-blue-500/10">
            <h3 className="mb-4 text-2xl font-black text-blue-300">
              BAM AI Result
            </h3>

            {!result && !scanning && (
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-slate-400">
                No scan yet. Upload a machine photo and press Run BAM Scan.
              </div>
            )}

            {scanning && (
              <div className="rounded-2xl border border-blue-400/40 bg-blue-500/10 p-6">
                <p className="text-xl font-black text-blue-300">
                  Reading equipment data...
                </p>
                <p className="mt-2 text-slate-300">
                  BAMToolz is checking the image for machine tags, parts,
                  labels, and maintenance clues.
                </p>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-950 p-5">
                  <p className="text-sm text-slate-400">Detected Equipment</p>
                  <h4 className="text-3xl font-black text-white">
                    {result.equipment}
                  </h4>
                  <p className="mt-2 font-bold text-blue-300">
                    Confidence: {result.confidence}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950 p-5">
                    <p className="text-sm text-slate-400">Manufacturer</p>
                    <p className="text-xl font-bold">{result.manufacturer}</p>
                  </div>

                  <div className="rounded-2xl bg-slate-950 p-5">
                    <p className="text-sm text-slate-400">Model</p>
                    <p className="text-xl font-bold">{result.model}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 p-5">
                  <p className="font-black text-yellow-300">System Note</p>
                  <p className="mt-2 text-slate-200">{result.issue}</p>
                </div>

                <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5">
                  <p className="font-black text-blue-300">Recommended Action</p>
                  <p className="mt-2 text-slate-200">{result.action}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-4">
          {["Scan", "Identify", "Store", "Repair"].map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-blue-500/20 bg-slate-900 p-5 text-center"
            >
              <p className="text-2xl font-black text-blue-400">{step}</p>
              <p className="mt-2 text-sm text-slate-400">
                Build the BAM Hub machine knowledge system.
              </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}