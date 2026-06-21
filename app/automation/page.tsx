export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Automation™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball Advanced Management™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machines™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Scan™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            COMPLETE PLANT AUTOMATION & CONTROL SYSTEMS™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            From single machine controls to complete plant automation.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Automation™ is the complete plant automation side of Ball Advanced
            Management™ — focused on PLC/HMI systems, robotics, control panels,
            drives, sensors, machine integration, production line upgrades, and
            connected facility intelligence.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">PLC Programming™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Logic development, troubleshooting, I/O mapping, machine sequences,
              alarms, safety logic support, and control upgrades.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">HMI Systems™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Operator screens, alarms, machine status, recipes, diagnostics,
              maintenance views, and technician-friendly interfaces.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">Robotics™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Robotic automation concepts for machine tending, handling,
              inspection, palletizing, packaging, and production support.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">Drives & Motion™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              VFDs, servo systems, motor controls, speed control, tension control,
              motion upgrades, and production line improvements.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">Control Panels™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Panel concepts, layouts, wiring support, controls documentation,
              troubleshooting, and future machine integration.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">Plant Integration™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Connecting machines, controls, sensors, production systems, safety
              workflows, maintenance records, and BAM Hub™ intelligence.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-yellow-200">Safety First™</h2>

          <p className="mt-4 text-yellow-50">
            BAM Automation™ concepts must be reviewed, engineered, tested, guarded,
            validated, and approved before production use. Automation and controls
            work must follow electrical codes, OSHA requirements, site procedures,
            OEM manuals, lockout/tagout rules, and applicable safety standards.
          </p>

          <p className="mt-4 font-bold text-yellow-100">
            Automation should never bypass guards, interlocks, emergency stops,
            safety circuits, or approved procedures.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Complete Plant Automation Vision
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Automation™ is built to connect physical machines with controls,
            robotics, safety, maintenance data, and BAM Hub™ knowledge. The goal
            is not just automated equipment — it is smarter facilities with
            searchable machine history, technician support, and connected
            industrial intelligence.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:BAMToolzsupport@gmail.com?subject=BAM%20Automation%20Inquiry"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Contact BAM Automation™
            </a>

            <a
              href="/machines"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              View BAM Machines™
            </a>

            <a
              href="/"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Back to BAMToolz™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Automation™ | BAMToolz™ | Ball Advanced Management™</p>
        </footer>
      </div>
    </main>
  );
}