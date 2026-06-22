"use client";

import { useState } from "react";

export default function MachinesPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

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
    } else {
      setMessage("Save failed ❌");
    }
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-5 py-8 text-white">

      <div className="mx-auto max-w-3xl rounded-3xl bg-slate-950 p-8 shadow-2xl">

        <h1 className="text-4xl font-black text-cyan-300">
          BAM Hub™
        </h1>

        <h2 className="mt-2 text-2xl font-bold">
          Add Machine Memory
        </h2>

        <p className="mt-3 text-slate-300">
          Create equipment profiles, repair history,
          notes, parts, and machine knowledge.
        </p>

        <div className="mt-8 space-y-4">

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
            className="w-full rounded-xl p-3 text-black"
            placeholder="Technician notes / repairs"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button
            onClick={saveMachine}
            className="w-full rounded-xl bg-cyan-400 p-4 font-black text-slate-950"
          >
            Save Machine
          </button>

          <p className="font-bold text-cyan-300">
            {message}
          </p>

        </div>

      </div>

    </main>
  );
}