export default function MachinesPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Machines™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball Advanced Management™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
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
            MACHINE MANUFACTURING & INDUSTRIAL EQUIPMENT BUILDS™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            From take-up to payoff, custom machines, and robotic automation.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Machines™ is the machine manufacturing side of Ball Advanced
            Management™ — focused on industrial equipment, production support
            systems, controls-ready machinery, and custom automation solutions
            for manufacturing facilities.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">
              Take-Up Systems™
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Custom take-up equipment for wire, cable, tubing, extrusion,
              winding, spooling, and controlled material handling.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">
              Payoff Systems™
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Payoff stands, feed systems, dereelers, tension control concepts,
              and production line support equipment.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">
              Custom Machines™
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Purpose-built industrial machines, fixtures, tooling, guards,
              frames, workstations, and production support systems.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">
              Controls-Ready Equipment™
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Machines designed with sensors, motors, drives, panels, wiring,
              and future PLC/HMI integration in mind.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">
              Production Line Support™
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Equipment concepts for safer, faster, cleaner, and more reliable
              manufacturing workflows.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">
              Robotic Automation™
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Automation concepts for machine tending, handling, inspection,
              packaging, palletizing, and facility upgrades.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-yellow-200">
            Safety First™
          </h2>

          <p className="mt-4 text-yellow-50">
            BAM Machines™ concepts must be reviewed, engineered, guarded,
            tested, and approved before production use. All equipment must follow
            applicable safety standards, company procedures, OEM requirements,
            electrical codes, and site safety rules.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Machine Build Focus
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Machines™ is designed to grow from practical manufacturing
            equipment concepts into full industrial machine builds — starting
            with technician-built systems and expanding toward engineered,
            controls-ready, automation-ready production equipment.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:BAMToolzsupport@gmail.com?subject=BAM%20Machines%20Inquiry"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Contact BAM Machines™
            </a>

            <a
              href="/scanner"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open BAM Scan™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Machines™ | BAMToolz™ | Ball Advanced Management™</p>
        </footer>
      </div>
    </main>
  );
}