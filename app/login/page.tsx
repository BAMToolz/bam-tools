"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [role, setRole] = useState("Technician");
  const [message, setMessage] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  function handleLogin() {
    if (!email && !badgeId) {
      setMessage("Enter an email or badge ID to continue.");
      setAccessGranted(false);
      return;
    }

    const accessProfile = {
      email: email || "Badge User",
      badgeId: badgeId || "Not entered",
      role,
      accessTime: new Date().toISOString(),
    };

    localStorage.setItem("bamAccessProfile", JSON.stringify(accessProfile));

    setAccessGranted(true);
    setMessage(`${role} access captured. BAM Hub™ workspace unlocked on this device.`);
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-6 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-4 text-5xl font-black">
              BAM Access™
            </h1>

            <p className="mt-2 text-cyan-50">
              Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Hub™
            </a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Metrics™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Scan™
            </a>
          </nav>
        </header>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            SECURE FACILITY ACCESS™
          </p>

          <h2 className="mt-4 text-3xl font-black text-cyan-300">
            Technician, Engineer, and Facility Login
          </h2>

          <p className="mt-4 max-w-4xl text-slate-300">
            BAM Access™ is the future login layer for facility accounts,
            RFID/badge authentication, technician permissions, engineer access,
            admin roles, and protected BAM Hub™ machine data.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email / Facility User"
              className="w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            />

            <input
              value={badgeId}
              onChange={(e) => setBadgeId(e.target.value)}
              placeholder="Badge ID / RFID"
              className="w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            />
          </div>

          <label className="mt-5 block">
            <span className="font-black text-cyan-300">
              Access Role
            </span>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
            >
              <option>Technician</option>
              <option>Engineer</option>
              <option>Facility Admin</option>
              <option>Viewer</option>
            </select>
          </label>

          <button
            onClick={handleLogin}
            className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950 hover:bg-cyan-400"
          >
            Unlock BAM Hub™ Workspace
          </button>

          {message && (
            <p className="mt-5 font-bold text-cyan-300">
              {message}
            </p>
          )}
        </section>

        {accessGranted && (
          <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-cyan-300">
              BAM Workspace™
            </h2>

            <p className="mt-4 text-slate-300">
              Access captured on this device. Open the BAM workspace tools below.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <WorkspaceLink
                title="BAM Hub™"
                text="Secure facility machine memory."
                href="/hub"
              />

              <WorkspaceLink
                title="Dashboard™"
                text="Facility overview and memory status."
                href="/hub/dashboard"
              />

              <WorkspaceLink
                title="Machine List™"
                text="Saved BAM Scan™ machine records."
                href="/hub/machines"
              />

              <WorkspaceLink
                title="Machine Profile™"
                text="Latest saved machine memory."
                href="/hub/machine"
              />

              <WorkspaceLink
                title="BAM Metrics™"
                text="Machine memory turned into measurable intelligence."
                href="/metrics"
              />

              <WorkspaceLink
                title="BAM Scan™"
                text="Capture equipment and save machine memory."
                href="/scanner"
              />
            </div>
          </section>
        )}

        <section className="mt-8 grid gap-5 md:grid-cols-4">
          <InfoCard
            title="Technician Access™"
            text="Repair history, scan records, troubleshooting notes, and equipment support."
          />

          <InfoCard
            title="Engineer Access™"
            text="Reliability data, controls notes, process improvements, and machine analysis."
          />

          <InfoCard
            title="Admin Access™"
            text="Facility roles, company accounts, permissions, and protected machine data."
          />

          <InfoCard
            title="RFID Login™"
            text="Future badge tap access for plants, hospitals, aerospace facilities, and industrial teams."
          />
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Access™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function WorkspaceLink({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-xl bg-slate-900 p-5 shadow-xl hover:bg-slate-800"
    >
      <h3 className="font-black text-cyan-300">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-5 shadow-xl">
      <h3 className="font-black text-cyan-300">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}