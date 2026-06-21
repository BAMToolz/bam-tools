"use client";

import { useState } from "react";

export default function Hub() {
  const [facility, setFacility] = useState("");
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentId, setEquipmentId] = useState("");
  const [location, setLocation] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [serial, setSerial] = useState("");
  const [voltage, setVoltage] = useState("");
  const [controls, setControls] = useState("");
  const [notes, setNotes] = useState("");
  const [savedProfile, setSavedProfile] = useState("");

  function saveProfile() {
    const profile = `BAM Hub™ Machine Profile

Facility: ${facility || "Not entered"}
Equipment Name: ${equipmentName || "Not entered"}
Equipment ID: ${equipmentId || "Not entered"}
Location: ${location || "Not entered"}
Manufacturer: ${manufacturer || "Not entered"}
Model: ${model || "Not entered"}
Serial: ${serial || "Not entered"}
Voltage: ${voltage || "Not entered"}
Controls System: ${controls || "Not entered"}

Technician Notes:
${notes || "No notes entered"}

Status:
Saved locally for prototype display. Future version will store this in BAM Hub™ database.`;

    setSavedProfile(profile);
  }

  return (
    <main className="min-h-screen bg-[#04162b] px-5 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-3xl border-4 border-white bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-8">
        <a href="/" className="font-black text-cyan-200">
          ← Back to BAMToolz™
        </a>

        <section className="mt-8 rounded-3xl border border-cyan-400/40 bg-[#0a1629]/90 p-8 shadow-2xl">
          <p className="font-black text-cyan-300">BAM HUB™</p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            The Facility Intelligence Core.
          </h1>

          <p className="mt-6 max-w-5xl text-lg text-gray-200">
            BAM Hub™ is being designed as the secure knowledge center for
            facilities. A place where machines, maintenance history,
            documentation, safety data, technicians, and future AI systems
            connect.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-cyan-400/30 bg-[#061225] p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            Add Equipment™
          </h2>

          <p className="mt-4 max-w-5xl text-gray-300">
            Create the first machine memory profile. This prototype keeps the
            data on-screen for now. Future BAM Hub™ will save profiles,
            repair history, photos, manuals, parts, and scan reports to a
            secure database.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input label="Facility" value={facility} onChange={setFacility} />
            <Input label="Equipment Name" value={equipmentName} onChange={setEquipmentName} />
            <Input label="Equipment ID" value={equipmentId} onChange={setEquipmentId} />
            <Input label="Location / Line" value={location} onChange={setLocation} />
            <Input label="Manufacturer" value={manufacturer} onChange={setManufacturer} />
            <Input label="Model" value={model} onChange={setModel} />
            <Input label="Serial Number" value={serial} onChange={setSerial} />
            <Input label="Voltage / Ratings" value={voltage} onChange={setVoltage} />
            <Input label="Controls System / PLC / HMI" value={controls} onChange={setControls} />
          </div>

          <label className="mt-5 block">
            <span className="font-black text-cyan-300">Technician Notes</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter repair notes, issues found, parts used, fault codes, measurements, adjustments, or technician knowledge..."
              className="mt-2 min-h-36 w-full rounded-xl border border-cyan-400 bg-[#0a1629] p-4 text-white outline-none"
            />
          </label>

          <button
            onClick={saveProfile}
            className="mt-5 rounded-xl bg-cyan-400 px-6 py-3 font-black text-[#04162b] hover:bg-cyan-300"
          >
            SAVE MACHINE PROFILE™
          </button>

          {savedProfile && (
            <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-cyan-400/40 bg-[#0a1629] p-6 text-sm leading-6 text-gray-200">
              {savedProfile}
            </div>
          )}
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Machine Memory™"
            text="Store equipment profiles, photos, serial numbers, manuals, repairs, notes, and machine history."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve troubleshooting experience and repair information before valuable knowledge disappears."
          />

          <Card
            title="AI Ready Database™"
            text="Organized facility information designed to support future AI assistance and faster decisions."
          />

          <Card
            title="Secure Facility Data™"
            text="Designed around each building controlling its own maintenance information and records."
          />

          <Card
            title="BAM Scan™ Connection"
            text="Future scanner devices connect into BAM Hub™ to access equipment intelligence instantly."
          />

          <Card
            title="Controls & Robotics™"
            text="Future support for PLC notes, wiring documentation, automation systems, and robotic equipment."
          />

          <Card
            title="Maintenance Records™"
            text="Track failures, downtime, completed repairs, replacement parts, and recurring problems."
          />

          <Card
            title="Parts Intelligence™"
            text="Connect machines with spare parts, suppliers, inventory information, and replacement history."
          />

          <Card
            title="Enterprise Growth™"
            text="Built toward manufacturing, aerospace, hospitals, data centers, and industrial facilities."
          />
        </section>

        <section className="mt-8 rounded-3xl border border-cyan-400/30 bg-[#061225] p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            Preserve the Presence™
          </h2>

          <p className="mt-4 max-w-5xl text-gray-300">
            BAM Hub™ is built around preserving the knowledge and presence
            of skilled technicians — keeping their experience available for
            future teams, facilities, and generations.
          </p>
        </section>
      </div>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="font-black text-cyan-300">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-cyan-400 bg-[#0a1629] p-3 text-white outline-none"
      />
    </label>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-400/30 bg-[#061225] p-6">
      <h2 className="text-2xl font-black text-cyan-300">{title}</h2>

      <p className="mt-3 text-gray-300">{text}</p>
    </div>
  );
}