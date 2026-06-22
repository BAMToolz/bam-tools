"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [badgeId, setBadgeId] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin() {
    if (!email && !badgeId) {
      setMessage("Enter an email or badge ID to continue.");
      return;
    }

    setMessage("BAM Hub™ access request captured. Secure login system coming next.");
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-6 shadow-2xl sm:p-8">
        <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
          BAM
        </div>

        <h1 className="mt-4 text-5xl font-black">
          BAM Access™
        </h1>

        <p className="mt-2 text-cyan-50">
          Ball AI Metrics™
        </p>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            Secure Facility Login
          </h2>

          <p className="mt-4 text-slate-300">
            Future BAM Hub™ access will support facility accounts, user roles,
            technician permissions, and RFID/badge login.
          </p>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email / Facility User"
            className="mt-6 w-full rounded-xl bg-slate-900 p-4 text-white"
          />

          <input
            value={badgeId}
            onChange={(e) => setBadgeId(e.target.value)}
            placeholder="Badge ID / RFID"
            className="mt-4 w-full rounded-xl bg-slate-900 p-4 text-white"
          />

          <button
            onClick={handleLogin}
            className="mt-6 w-full rounded-xl bg-cyan-500 p-4 font-black text-slate-950"
          >
            Request BAM Hub™ Access
          </button>

          {message && (
            <p className="mt-5 font-bold text-cyan-300">
              {message}
            </p>
          )}
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="/hub"
            className="rounded-xl border border-cyan-400 bg-slate-950/95 p-5 text-center font-black text-cyan-200"
          >
            BAM Hub™
          </a>

          <a
            href="/"
            className="rounded-xl border border-cyan-400 bg-slate-950/95 p-5 text-center font-black text-cyan-200"
          >
            Home™
          </a>
        </section>
      </div>
    </main>
  );
}