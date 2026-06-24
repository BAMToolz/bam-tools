"use client";

import { useState, useRef, useEffect } from "react";

// ... (keep your existing imports)

export default function BamScanPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ... (keep your existing state declarations)

  // Cleanup the object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      setFile(selectedFile);
      // Clean up previous preview before setting new one
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // ... (keep your existing functions like startProgressAnimation, runScan, etc)

  return (
    // ... (keep existing wrapper code)
    
    <section className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-cyan-400/40 bg-slate-950/95 p-6 shadow-2xl sm:p-8">
        <h2 className="text-3xl font-black text-cyan-300">Capture Image™</h2>

        <p className="mt-4 text-sm leading-6 text-slate-300">
          Upload a clear image of the item, label, part, or issue.
        </p>

        {/* Improved Interactive Upload Zone */}
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="group mt-6 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-cyan-400 bg-slate-900 p-8 transition-all hover:bg-slate-800 hover:border-cyan-300"
        >
          {preview ? (
            <img 
              src={preview} 
              alt="Preview" 
              className="max-h-40 rounded-lg object-contain" 
            />
          ) : (
            <div className="text-center">
              <span className="block text-sm font-black text-cyan-300">
                Click to select image
              </span>
            </div>
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
          <div className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/40 bg-cyan-500/10 p-3">
            <span className="truncate text-sm text-cyan-200">{file.name}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the click to re-open file picker
                setFile(null);
                if (preview) {
                  URL.revokeObjectURL(preview);
                  setPreview(null);
                }
              }}
              className="text-xs font-bold text-red-400 hover:text-red-300"
            >
              Remove
            </button>
          </div>
        )}

        <button
          onClick={runScan}
          disabled={!file}
          className={`mt-6 w-full rounded-xl p-4 font-black transition-all ${
            file 
              ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400" 
              : "bg-slate-800 text-slate-500 cursor-not-allowed"
          }`}
        >
          Run BAM Scan™
        </button>
      </div>
      {/* ... (rest of the component) */}
    </section>
  );
}