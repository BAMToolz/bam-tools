"use client";

import { useState } from "react";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    try {
      setLoading(true);
      setAnswer("");

      const res = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setAnswer(
        data.result || data.error || "No response from BAMToolz™ AI Support."
      );
    } catch {
      setAnswer("BAMToolz™ AI Support connection failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-lg bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
              BAM Support™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAMToolz™ Support
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              AI support, account help, workflow guidance, and platform
              assistance.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {[
              ["Home™", "/"],
              ["BAM Scan™", "/scan"],
              ["BAMToolz™", "/toolz/scan"],
              ["BAM Hub™", "/hub"],
              ["Work Orders™", "/workorders"],
              ["Metrics™", "/metrics"],
              ["Machines™", "/machines"],
              ["Access™", "/access"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl border border-cyan-400/40 bg-slate-900 px-4 py-3 text-center text-xs font-black text-cyan-200 shadow-lg hover:bg-slate-800"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950 p-6 shadow-2xl sm:p-10">
          <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full border border-cyan-300/30" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-wide text-cyan-300">
                BALL AI METRICS™
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
                Support for the
                <br />
                BAM™ ecosystem.
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                Support for BAM Scan™, BAMToolz™, BAM AI Assist™, BAM Hub™
                machine memory, BAM Access™, Work Orders™, BAM Metrics™, BAM
                Machines™, and facility intelligence workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl">
              <p className="text-sm font-black text-cyan-300">
                Support Contact
              </p>

              <p className="mt-4 text-sm text-slate-300">
                Email:{" "}
                <a
                  href="mailto:BAMToolzsupport@gmail.com"
                  className="font-black text-cyan-300 underline"
                >
                  BAMToolzsupport@gmail.com
                </a>
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Founder: Justin Ball
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Company: Ball AI Metrics™
              </p>

              <div className="mt-5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-center text-xs font-black text-emerald-300">
                ● Support Channel Active
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              SUPPORT AREAS™
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <SupportCard
                title="BAM Scan™"
                text="Image scanning, equipment analysis, labels, faults, components, and documents."
              />

              <SupportCard
                title="BAM Hub™"
                text="Machine memory, manuals, repair history, notes, and facility records."
              />

              <SupportCard
                title="BAM Access™"
                text="Account access, workspace permissions, roles, and protected systems."
              />

              <SupportCard
                title="BAM Metrics™"
                text="Downtime trends, performance visibility, reporting, and operational insight."
              />
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              BAMTOOLZ™ AI SUPPORT
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              Ask Support
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Ask about BAMToolz™, scanning, access, hub records, metrics,
              work orders, machine workflows, or platform guidance.
            </p>

            <textarea
              className="mt-6 min-h-40 w-full rounded-2xl border border-cyan-400/40 bg-slate-900 p-4 text-white outline-none placeholder:text-slate-500"
              placeholder="Ask BAMToolz™ Support..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={askAI}
              disabled={loading || !message.trim()}
              className={`mt-4 w-full rounded-2xl p-4 font-black ${
                loading || !message.trim()
                  ? "border border-cyan-500/30 bg-slate-950 text-cyan-900"
                  : "bg-cyan-300 text-slate-950 shadow-xl hover:bg-cyan-200"
              }`}
            >
              {loading ? "Analyzing..." : "Ask BAMToolz™ Support"}
            </button>

            {answer && (
              <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-cyan-400/30 bg-slate-900 p-5 text-sm leading-6 text-slate-200">
                <p className="mb-3 text-xs font-black tracking-wide text-cyan-300">
                  BAMTOOLZ™ SUPPORT RESPONSE
                </p>

                {answer}
              </div>
            )}
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/20 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAMToolz™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function SupportCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-5 shadow-xl">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}