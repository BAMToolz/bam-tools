export default function MachineProfilePage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              Machine Profile™
            </h1>

            <p className="mt-2 text-cyan-50">
              BAM Hub™ machine memory | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Scan™
            </a>
            <a href="/hub/dashboard" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Dashboard™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Hub™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            EQUIPMENT MEMORY PROFILE™
          </p>

          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            Scanned Equipment
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            This profile represents the future BAM Hub™ machine memory screen.
            It will store equipment identity, scan records, repair history,
            parts, manuals, technician notes, engineering notes, and reliability
            data for each machine.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <Info title="Machine Name" value="Scanned Equipment" />
          <Info title="Location" value="Unassigned" />
          <Info title="Manufacturer" value="Not identified" />
          <Info title="Model" value="Not identified" />
          <Info title="Serial / Asset Tag" value="Not identified" />
          <Info title="Status" value="Profile shell created" />
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Scan Records™"
            text="BAM Scan™ results will attach to this machine profile so equipment knowledge is not lost after the scan."
          />

          <Card
            title="Repair History™"
            text="Track failures, repair actions, technician notes, parts used, downtime, and completed maintenance work."
          />

          <Card
            title="Engineering Notes™"
            text="Store process changes, improvement ideas, controls notes, upgrade plans, reliability findings, and machine observations."
          />

          <Card
            title="Parts & Manuals™"
            text="Connect part numbers, drawings, manuals, suppliers, wiring information, and spare inventory to each machine."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve field experience from maintenance teams so future technicians can learn faster and troubleshoot better."
          />

          <Card
            title="Reliability Metrics™"
            text="Future BAM Metrics™ will use profile history to show recurring failures, repair time, downtime, and improvement opportunities."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Machine Memory Timeline™
          </h2>

          <div className="mt-5 rounded-xl bg-slate-900 p-5">
            <p className="font-black text-cyan-300">
              01 — Profile Created
            </p>
            <p className="mt-2 text-slate-300">
              Machine profile shell created for BAM Hub™ memory development.
            </p>
          </div>

          <div className="mt-4 rounded-xl bg-slate-900 p-5">
            <p className="font-black text-cyan-300">
              02 — Next Step
            </p>
            <p className="mt-2 text-slate-300">
              Connect saved BAM Scan™ results to this profile and display real
              equipment data from the BAM Hub™ API.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Next Build Step
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            After this page is live, the next task is linking the scanner save
            button to a real machine profile so every saved scan can become
            organized facility memory.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAM Scan™
            </a>

            <a
              href="/hub/dashboard"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open Dashboard™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Hub™ | Machine Profile™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <p className="text-sm font-black text-cyan-300">{title}</p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}