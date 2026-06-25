export default function MetricsPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-lg bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
              BAM Metrics™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Metrics™
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Facility intelligence dashboard | Ball AI Metrics™
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {[
              ["Home™", "/"],
              ["BAM Scan™", "/scan"],
              ["BAMToolz™", "/toolz/scan"],
              ["BAM Hub™", "/hub"],
              ["Work Orders™", "/workorders"],
              ["Machines™", "/machines"],
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

        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950 p-6 shadow-2xl sm:p-10">
          <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full border border-cyan-300/30" />

          <div className="relative">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              FACILITY INTELLIGENCE COMMAND CENTER™
            </p>

            <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
              Turning machine memory
              <br />
              into measurable intelligence.
            </h2>

            <p className="mt-6 max-w-6xl text-sm leading-7 text-slate-300 sm:text-base">
              BAM Metrics™ is the intelligence layer for the BAM™ ecosystem. It
              turns scan history, BAM Hub™ machine memory, work orders,
              technician notes, repair patterns, downtime activity, and facility
              movement into visibility for maintenance teams and leaders.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          <Card
            title="Machines Connected™"
            value="128"
            subtext="Assets linked into BAM Hub™ machine memory"
          />

          <Card
            title="BAMToolz™ Scans"
            value="3,482"
            subtext="Equipment captures and scan history processed"
          />

          <Card
            title="Knowledge Records™"
            value="9,420"
            subtext="Notes, repairs, parts, manuals, and history"
          />

          <Card
            title="Work Orders Processed™"
            value="2,847"
            subtext="Maintenance actions organized and tracked"
          />

          <Card
            title="Downtime Insights™"
            value="Active"
            subtext="Patterns tracked across equipment and failures"
          />

          <Card
            title="BAM AI Assist™"
            value="Online"
            subtext="Technician guidance and intelligence layer enabled"
          />
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-2">
          <Panel
            title="Machine Health Overview™"
            text="Monitor connected equipment, recurring faults, service needs, repair frequency, asset history, scan history, and maintenance readiness from one intelligence layer."
          />

          <Panel
            title="Maintenance Performance™"
            text="Track work order activity, technician documentation, response flow, repair status, priority load, downtime movement, and facility maintenance activity."
          />

          <Panel
            title="Reliability Insights™"
            text="Identify repeat failures, aging assets, missing documentation, parts pressure, and opportunities to prevent downtime before it becomes expensive."
          />

          <Panel
            title="Knowledge Captured™"
            text="Preserve technician notes, machine history, repair decisions, parts used, service outcomes, and the experience that normally disappears over time."
          />
        </section>        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            Intelligence Sources™
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <SourceCard
              number="01"
              title="BAM Scan™"
              text="Captures product, part, machine, issue, and visible equipment information."
            />

            <SourceCard
              number="02"
              title="BAM Hub™"
              text="Stores machine memory, documentation, notes, scan history, and repair history."
            />

            <SourceCard
              number="03"
              title="Work Orders™"
              text="Organizes maintenance activity, priorities, technicians, downtime, and repair actions."
            />

            <SourceCard
              number="04"
              title="BAM AI Assist™"
              text="Connects scan data, notes, patterns, troubleshooting, and recommendations."
            />
          </div>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          <ActionCard
            title="Open BAMToolz™"
            text="Capture industrial equipment data and feed machine intelligence."
            href="/toolz/scan"
          />

          <ActionCard
            title="Open BAM Hub™"
            text="View the protected BAM Hub™ machine memory layer behind facility intelligence."
            href="/hub"
          />

          <ActionCard
            title="Open Work Orders™"
            text="Turn maintenance issues into organized repair workflow."
            href="/workorders"
          />
        </section>

        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Metrics™ Intelligence Engine
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-300 sm:text-base">
            Metrics populate as BAM Hub™, BAM Scan™, BAMToolz™, and Work
            Orders™ collect facility intelligence. The goal is simple: make
            maintenance visible, measurable, searchable, and easier to improve.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/20 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Metrics™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </div>
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
    <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/90 p-6 shadow-2xl">
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-4 text-4xl font-black text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{subtext}</p>
    </div>
  );
}

function Panel({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-xl">
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
    <div className="rounded-3xl border border-cyan-400/20 bg-slate-900 p-5 shadow-xl">
      <p className="text-sm font-black text-cyan-300">{number}</p>
      <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
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
      className="block rounded-3xl border border-cyan-400/20 bg-slate-950/90 p-6 shadow-xl hover:bg-slate-900"
    >
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}