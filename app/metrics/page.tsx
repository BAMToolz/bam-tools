export default function MetricsPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-8 shadow-2xl">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-4 text-5xl font-black">
              BAM Metrics™
            </h1>

            <p className="mt-2 text-cyan-50">
              Facility intelligence dashboard | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Scan™</a>
            <a href="/toolz/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAMToolz™</a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Hub™</a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Work Orders™</a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Access™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            FACILITY INTELLIGENCE COMMAND CENTER™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight text-cyan-300 sm:text-6xl">
            Turning maintenance activity into measurable intelligence.
          </h2>

          <p className="mt-5 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Metrics™ is the intelligence layer for BAMToolz™. It turns
            machine scans, work orders, technician notes, repair patterns, and
            facility activity into visibility for maintenance teams and leaders.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card title="Machines Connected™" value="128" subtext="Assets linked into facility intelligence" />
          <Card title="BAMToolz™ Scans" value="3,482" subtext="Equipment captures processed" />
          <Card title="Knowledge Records™" value="9,420" subtext="Notes, repairs, parts, and history" />
          <Card title="Work Orders Processed™" value="2,847" subtext="Maintenance actions organized" />
          <Card title="Downtime Insights™" value="Active" subtext="Patterns tracked across equipment" />
          <Card title="AI Analysis™" value="Online" subtext="BAM AI™ intelligence layer enabled" />
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <Panel
            title="Machine Health Overview™"
            text="Monitor connected equipment, recurring faults, service needs, repair frequency, asset history, and maintenance readiness from one intelligence layer."
          />

          <Panel
            title="Maintenance Performance™"
            text="Track work order activity, technician documentation, response flow, repair status, priority load, and facility maintenance movement."
          />

          <Panel
            title="Reliability Insights™"
            text="Identify repeat failures, aging assets, missing documentation, parts pressure, and opportunities to prevent downtime before it becomes expensive."
          />

          <Panel
            title="Knowledge Captured™"
            text="Preserve technician notes, machine history, repair decisions, parts used, service outcomes, and the experience that normally disappears over time."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Intelligence Sources™
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <SourceCard number="01" title="BAMToolz™ Scan" text="Captures machine identity and visible equipment information." />
            <SourceCard number="02" title="BAM Hub™" text="Stores machine memory, documentation, notes, and repair history." />
            <SourceCard number="03" title="Work Orders™" text="Organizes maintenance activity, priorities, technicians, and repair actions." />
            <SourceCard number="04" title="BAM AI™" text="Connects scan data, notes, patterns, and recommendations." />
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <ActionCard
            title="Open BAMToolz™ Scan"
            text="Capture industrial equipment data and feed machine intelligence."
            href="/toolz/scan"
          />

          <ActionCard
            title="Open BAM Hub™"
            text="View the protected machine memory layer behind facility intelligence."
            href="/hub"
          />

          <ActionCard
            title="Open Work Orders™"
            text="Turn maintenance issues into organized repair workflow."
            href="/workorders"
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM AI™ Metrics Engine
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            Metrics populate as BAM Hub™, BAMToolz™ Scan, and Work Orders™ collect
            facility intelligence. The goal is simple: make maintenance visible,
            measurable, searchable, and easier to improve.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm">
          © 2026 BAM Metrics™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </section>
    </main>
  );
}

function Card({
  title,
  value,
  subtext,
}: {
  title: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-950/95 p-6 shadow-xl">
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-4 text-4xl font-black">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{subtext}</p>
    </div>
  );
}

function Panel({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-400/30 bg-slate-950/95 p-6 shadow-xl">
      <h2 className="text-2xl font-black text-cyan-300">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function SourceCard({
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
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function ActionCard({
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
      className="block rounded-2xl bg-slate-950/95 p-6 shadow-xl hover:bg-slate-900"
    >
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}