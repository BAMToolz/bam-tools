export default function HubDashboardPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              BAM Hub™ Dashboard
            </h1>

            <p className="mt-2 text-cyan-50">
              Facility machine memory | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              BAM Scan™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Hub™
            </a>
            <a href="/login" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Access™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            FACILITY MEMORY OVERVIEW™
          </p>

          <h2 className="mt-4 text-4xl font-black text-cyan-300">
            Machines, repairs, notes, and knowledge in one place.
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            This dashboard is the future private BAM Hub™ workspace where a
            facility can view machine profiles, scan records, repair history,
            parts, manuals, technician notes, and reliability trends.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-4">
          <Metric title="Machines" value="0" text="Profiles saved" />
          <Metric title="Repairs" value="0" text="History records" />
          <Metric title="Parts" value="0" text="Linked parts" />
          <Metric title="Scans" value="0" text="BAM Scan™ records" />
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Equipment Profiles™"
            text="Create and view machine profiles with manufacturer, model, serial number, location, notes, and asset history."
          />

          <Card
            title="Repair History™"
            text="Track what failed, what was repaired, who worked on it, what parts were used, and when it happened."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve the experience of technicians and engineers before it disappears from the facility."
          />

          <Card
            title="Parts & Manuals™"
            text="Connect equipment to manuals, drawings, part numbers, suppliers, and spare inventory."
          />

          <Card
            title="BAM Scan™ Records"
            text="Future scans can become searchable machine memory instead of being lost after the job is done."
          />

          <Card
            title="Reliability Metrics™"
            text="Turn maintenance activity into downtime trends, recurring failures, repair time, and improvement opportunities."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Next Build Step
          </h2>

          <p className="mt-4 max-w-5xl text-slate-300">
            The next development step is connecting this dashboard to a real
            database so scanned equipment can be saved, listed, opened, edited,
            and connected to repair history.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAM Scan™
            </a>

            <a
              href="/hub"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Back to BAM Hub™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Hub™ | BAMToolz™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function Metric({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <p className="text-sm font-black text-cyan-300">{title}</p>
      <p className="mt-3 text-5xl font-black">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
    </div>
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
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}