"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "bam";
  text: string;
};

export default function BamScanPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [scanData, setScanData] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const [statusText, setStatusText] = useState("BAM Scan™ standing by.");
  const [scanConnected, setScanConnected] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Safely handle browser-only APIs
  useEffect(() => {
    return () => {
      if (preview && typeof window !== "undefined") {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleFileChange(selectedFile: File | null) {
    if (!selectedFile) return;
    
    setFile(selectedFile);
    
    if (typeof window !== "undefined") {
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(selectedFile));
    }
  }

  function startProgressAnimation() {
    setScanProgress(10);
    setStatusText("Starting BAM Scan™...");
    const steps = [
      { progress: 25, text: "Reading image details..." },
      { progress: 45, text: "Identifying product..." },
      { progress: 65, text: "Connecting to BAM Hub™..." },
      { progress: 85, text: "Preparing BAM AI Assist™..." },
    ];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setScanProgress(step.progress);
        setStatusText(step.text);
      }, 700 * (index + 1));
    });
  }

  async function runScan() {
    if (!file) return;
    setScanConnected(false);
    startProgressAnimation();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch("/api/scan", { method: "POST", body: formData });
      const data = await response.json();
      setScanData(data.analysis || "Scan complete.");
      setScanConnected(true);
      setScanProgress(100);
      setStatusText("Scan complete. BAM AI Assist™ ready.");
      setMessages([{ role: "bam", text: "BAM AI Assist™ is ready. Ask about this item." }]);
    } catch {
      setStatusText("Connection failed.");
      setScanProgress(0);
    }
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl">
        
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">Capture Image™</h2>
            <p className="mt-4 text-sm text-slate-300">Upload an image to identify the item.</p>

            <div 
              onClick={() => fileInputRef.current?.click()}
              className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-cyan-400 bg-slate-900 p-8 transition-all hover:bg-slate-800"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-40 rounded-lg object-contain" />
              ) : (
                <span className="text-sm font-black text-cyan-300">Click to select image</span>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              />
            </div>

            {file && (
              <button 
                onClick={(e) => { e.stopPropagation(); setFile(null); setPreview(null); }}
                className="mt-2 text-xs text-red-400"
              >
                Remove Image
              </button>
            )}

            <button
              onClick={runScan}
              disabled={!file}
              className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 disabled:bg-slate-700"
            >
              Run BAM Scan™
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}