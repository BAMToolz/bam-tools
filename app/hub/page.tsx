export default function HubPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Hub™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Secure Facility Intelligence™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/bam-home" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Home™</a>
            <a href="/scanner" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">BAM Scan™</a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Work Orders™</a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Metrics™</a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Access™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            PUBLIC OVERVIEW
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            The secure memory layer for machines, facilities, and technicians.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Hub™ connects equipment records, repair history, technician notes,
            manuals, parts, work orders, and facility metrics into one protected
            intelligence layer. Public pages show the vision. Real customer data
            belongs behind BAM Access™.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Launch BAM Scan™
            </a>

            <a
              href="/access"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Enter BAM Access™
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-cyan-300">
                Demo Machine Intelligence™
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Example cards only. No real facility data is displayed publicly.
              </p>
            </div>

            <div className="rounded-full border border-cyan-300 bg-cyan-500/20 px-4 py-2 text-xs font-black text-cyan-200">
              SAMPLE DATA
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <DemoMachineCard
              name="Demo Extruder Line 01"
              type="Wire Manufacturing"
              status="Preventive maintenance due"
              insight="Recurring heat-zone alarm detected across recent service notes."
            />

            <DemoMachineCard
              name="Demo Compressor Station"
              type="Facility Utilities"
              status="Running"
              insight="Oil service, belt inspection, and air leak check scheduled."
            />

            <DemoMachineCard
              name="Demo Control Panel A"
              type="Automation / Controls"
              status="Documentation needed"
              insight="PLC I/O mapping, panel photos, and wiring notes can be stored here."
            />
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Hub™ Workflow
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <WorkflowCard number="01" title="Scan" text="Capture equipment data using BAM Scan™." />
            <WorkflowCard number="02" title="Identify" text="Build a machine profile from photos, tags, notes, and documents." />
            <WorkflowCard number="03" title="Protect" text="Keep real facility data behind BAM Access™." />
            <WorkflowCard number="04" title="Improve" text="Turn repair history into machine intelligence over time." />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/40 bg-cyan-500/10 p-6 shadow-2xl sm:p-8">
          <h2 className="text-2xl font-black text-cyan-200">
            Built for Protected Facility Data™
          </h2>

          <p className="mt-4 text-sm leading-6 text-cyan-50 sm:text-base">
            Real machine names, serial numbers, manuals, drawings, repair records,
            technician notes, AI conversations, parts lists, and work orders should
            only appear inside authenticated BAM Hub™ accounts.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Hub™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/bam-home" className="hover:text-white">BAM Home™</a>
            <a href="/scanner" className="hover:text-white">BAM Scan™</a>
            <a href="/workorders" className="hover:text-white">Work Orders™</a>
            <a href="/metrics" className="hover:text-white">Metrics™</a>
            <a href="/access" className="hover:text-white">Access™</a>
            <a href="/support" className="hover:text-white">Support</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function DemoMachineCard({
  name,
  type,
  status,
  insight,
}: {
  name: string;
  type: string;
  status: string;
  insight: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-5 shadow-xl">
      <p className="text-xs font-black tracking-wide text-cyan-400">
        DEMO PROFILE
      </p>

      <h3 className="mt-2 text-2xl font-black text-cyan-300">
        {name}
      </h3>

      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <p><span className="font-black text-cyan-300">Type:</span> {type}</p>
        <p><span className="font-black text-cyan-300">Status:</span> {status}</p>
      </div>

      <div className="mt-4 rounded-lg bg-slate-950 p-4">
        <p className="text-xs font-black text-cyan-300">BAM AI™ Example Insight</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {insight}
        </p>
      </div>
    </div>
  );
}

function WorkflowCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-400/40 bg-slate-900 p-5">
      <p className="text-sm font-black text-cyan-300">{number}</p>
      <h3 className="mt-2 text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
    </div>
  );
}