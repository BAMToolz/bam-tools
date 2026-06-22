"use client";

import { useState } from "react";

export default function MachinesPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [notes, setNotes] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  async function scanPhoto() {
    if (!photo) {
      setMessage("Please select or capture an equipment photo before scanning.");
      return;
    }

    setMessage("Analyzing equipment photo with BAM Scan™...");

    const formData = new FormData();
    formData.append("image", photo);
    formData.append(
      "notes",
      "Extract visible equipment information including machine name, manufacturer, model, serial number, asset tag, and relevant technician details."
    );

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      const text =
        data.analysis ||
        data.result ||
        data.message ||
        data.text ||
        JSON.stringify(data);

      if (!name && data.name) setName(data.name);
      if (!manufacturer && data.manufacturer) setManufacturer(data.manufacturer);
      if (!model && data.model) setModel(data.model);
      if (!serial && data.serial) setSerial(data.serial);

      if (!notes) {
        setNotes(text);
      } else {
        setNotes(notes + "\n\nBAM Scan™ Analysis:\n" + text);
      }

      setMessage("Scan complete. Review the extracted information before saving.");
    } catch (error) {
      setMessage(
        "Scan could not be completed. Please verify the scanner connection and try again."
      );
    }
  }

  async function saveMachine() {
    setMessage("Saving machine profile to BAM Hub™...");

    const response = await fetch("/api/machines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        manufacturer,
        model,
        serial,
        notes,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage("Machine profile saved to BAM Hub™.");

      setName("");
      setLocation("");
      setManufacturer("");
      setModel("");
      setSerial("");
      setNotes("");
      setPhoto(null);
    } else {
      setMessage(
        "Machine profile could not be saved. Please review the form and try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-5 py-8 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl bg-slate-950 p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black text-cyan-300">BAM Hub™</h1>

            <h2 className="mt-2 text-2xl font-bold">
              Equipment Profile Capture
            </h2>
          </div>

          <a
            href="/"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950"
          >
            Home™
          </a>
        </div>

        <p className="mt-5 text-slate-300">
          Select an equipment photo, machine tag, or captured image from your
          device. BAM Scan™ will extract available details for review. Complete
          any missing fields before saving the machine profile to BAM Hub™.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-4">
            <label className="mb-2 block text-sm font-bold text-cyan-200">
              Equipment photo or machine tag
            </label>

            <input
              type="file"
              accept="image/*"
              className="w-full rounded-xl bg-white p-3 text-black"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />

            <p className="mt-2 text-xs text-slate-300">
              Choose an existing photo from your device or take a new photo when
              prompted by your browser.
            </p>

            {photo && (
              <p className="mt-2 text-sm font-bold text-cyan-300">
                Selected file: {photo.name}
              </p>
            )}
          </div>

          <button
            onClick={scanPhoto}
            className="w-full rounded-xl bg-blue-400 p-4 font-black text-slate-950"
          >
            Analyze Equipment Photo
          </button>

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Machine Name / Asset Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Location / Line / Area"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Model Number"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Serial Number / Asset Tag"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />

          <textarea
            className="min-h-40 w-full rounded-xl p-3 text-black"
            placeholder="Technician notes, observed condition, repair history, or BAM Scan™ analysis"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button
            onClick={saveMachine}
            className="w-full rounded-xl bg-cyan-400 p-4 font-black text-slate-950"
          >
            Save Equipment Profile
          </button>

          <p className="font-bold text-cyan-300">{message}</p>
        </div>
      </div>
    </main>
  );
}