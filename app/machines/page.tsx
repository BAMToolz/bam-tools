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
      setMessage("Add a photo first 📸");
      return;
    }

    setMessage("Scanning photo with BAM Scan™...");

    const formData = new FormData();
    formData.append("image", photo);
    formData.append("notes", "Extract machine name, manufacturer, model, serial number, and visible equipment details.");

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
        setNotes(notes + "\n\nBAM Scan™ Notes:\n" + text);
      }

      setMessage("Scan complete ✅ Review blanks, then save.");
    } catch (error) {
      setMessage("Scan failed ❌ Check /api/scan route.");
    }
  }

  async function saveMachine() {
    setMessage("Saving to BAM Hub™...");

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
      setMessage("Machine saved to BAM Hub™ ✅");

      setName("");
      setLocation("");
      setManufacturer("");
      setModel("");
      setSerial("");
      setNotes("");
      setPhoto(null);
    } else {
      setMessage("Save failed ❌");
    }
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-5 py-8 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl bg-slate-950 p-8 shadow-2xl">
        <h1 className="text-4xl font-black text-cyan-300">BAM Hub™</h1>

        <h2 className="mt-2 text-2xl font-bold">Photo Scan Machine Memory</h2>

        <p className="mt-3 text-slate-300">
          Scan a machine tag or equipment photo. BAM Scan™ fills what it can.
          You only edit blanks or wrong info before saving.
        </p>

        <div className="mt-8 space-y-4">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="w-full rounded-xl bg-white p-3 text-black"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />

          <button
            onClick={scanPhoto}
            className="w-full rounded-xl bg-blue-400 p-4 font-black text-slate-950"
          >
            Scan Photo with BAM Scan™
          </button>

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Machine Name (Extruder #1)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Location (Line 1)"
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
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <input
            className="w-full rounded-xl p-3 text-black"
            placeholder="Serial Number"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
          />

          <textarea
            className="min-h-40 w-full rounded-xl p-3 text-black"
            placeholder="Technician notes / BAM Scan™ results"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button
            onClick={saveMachine}
            className="w-full rounded-xl bg-cyan-400 p-4 font-black text-slate-950"
          >
            Save Machine to BAM Hub™
          </button>

          <p className="font-bold text-cyan-300">{message}</p>
        </div>
      </div>
    </main>
  );
}