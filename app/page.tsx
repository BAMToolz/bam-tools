"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("bamPrivacyNoticeAccepted");

    if (!accepted) {
      setShowNotice(true);
    }
  }, []);

  function acceptNotice() {
    localStorage.setItem("bamPrivacyNoticeAccepted", "true");
    setShowNotice(false);
  }

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-lg bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
              BAM™
            </div>

            <h1 className="mt-3 text-5xl font-black tracking-tight">
              BAMToolz™
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Professional AI Tools for Maintenance & Manufacturing
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {[
              ["BAM Scan™", "/scan"],
              ["BAMToolz™", "/toolz/scan"],
              ["Hub™", "/hub"],
              ["Work Orders™", "/workorders"],
              ["Access™", "/access"],
              ["Support™", "/support"],
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

        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950 p-8 shadow-2xl sm:p-12">
          <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-wide text-cyan-300">
                PROFESSIONAL AI TOOLS
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                Maintenance
                <br />
                intelligence for
                <br />
                the people who keep
                <br />
                <span className="text-cyan-300">
                  industry running.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
                BAMToolz™ connects AI scanning, technician assistance,
                equipment history, work orders, and facility knowledge into one
                professional maintenance platform.
              </p>

              <a
                href="/scan"
                className="mt-8 inline-flex rounded-2xl bg-cyan-400 px-8 py-4 font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-300"
              >
                Launch BAM Scan™
              </a>
            </div>

            <div className="relative mx-auto flex h-80 w-full items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.4)]" />

              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-2 border-cyan-300 bg-slate-950 shadow-2xl">
                <div className="text-center">
                  <CircuitIcon />

                  <p className="mt-4 text-sm font-black text-cyan-300">
                    BAM AI™
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Professional Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="BAM Scan™"
            href="/scan"
            text="Scan equipment, labels, parts, problems, and maintenance information with AI-assisted support."
          />

          <Card
            title="BAMToolz™"
            href="/toolz/scan"
            text="Professional technician tools for maintenance support, troubleshooting, workflows, and repair documentation."
          />

          <Card
            title="BAM Hub™"
            href="/hub"
            text="Preserve equipment history, technician knowledge, documents, repairs, and connected facility information."
          />
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          <Card
            title="Work Orders™"
            href="/workorders"
            text="Organize repair needs, service activity, maintenance tasks, follow-ups, and technician notes."
          />

          <Card
            title="Access™"
            href="/access"
            text="Control platform access, user roles, team permissions, and secure facility entry."
          />

          <Card
            title="Support™"
            href="/support"
            text="Get help, request support, and connect with the BAMToolz™ platform."
          />
        </section>

        <footer className="mt-8 border-t border-cyan-300/20 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/scan" className="hover:text-white">BAM Scan™</a>
            <a href="/toolz/scan" className="hover:text-white">BAMToolz™</a>
            <a href="/hub" className="hover:text-white">BAM Hub™</a>
            <a href="/access" className="hover:text-white">Access™</a>
            <a href="/support" className="hover:text-white">Support™</a>
          </div>
        </footer>
      </div>

      {showNotice && (
        <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl rounded-3xl border border-cyan-300/40 bg-slate-950 p-5 text-white shadow-2xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-lg font-black text-cyan-300">
                BAM Privacy & AI Notice™
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                BAMToolz™ may use cookies or local storage to support platform
                features and remember preferences. BAM AI Assist™ provides
                informational support only and does not replace OEM manuals,
                trained professionals, company safety procedures, PPE, or
                lockout/tagout requirements.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Do not upload confidential facility data unless you are
                authorized to share it.
              </p>
            </div>

            <button
              onClick={acceptNotice}
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-black text-slate-950 hover:bg-cyan-300"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function CircuitIcon() {
  return (
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/60 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-cyan-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v4" />
        <path d="M12 16v4" />
        <path d="M4 12h4" />
        <path d="M16 12h4" />
        <rect x="8" y="8" width="8" height="8" rx="2" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="M6 6l2.5 2.5" />
        <path d="M18 6l-2.5 2.5" />
        <path d="M6 18l2.5-2.5" />
        <path d="M18 18l-2.5-2.5" />
      </svg>
    </div>
  );
}

function Card({
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
      className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl hover:bg-slate-900"
    >
      <h3 className="text-xl font-black text-cyan-300">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {text}
      </p>
    </a>
  );
}