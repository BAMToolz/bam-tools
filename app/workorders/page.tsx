export default function WorkOrdersPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Work Orders™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Protected maintenance workflow | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-cyan-700">
              Home
            </a>
            <a href="/scan" className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
              BAM Scan™
            </a>
            <a href="/toolz/scan" className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
              BAMToolz™
            </a>
            <a href="/hub" className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
              Hub
            </a>
            <a href="/access" className="rounded-full bg-cyan-950 px-4 py-2 text-sm font-black text-cyan-200">
              Login
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-[2rem] border border-white/20 bg-white/15 p-6 shadow-2xl backdrop-blur sm:p-10">
          <div className="rounded-[1.75rem] bg-slate-950/95 p-6 shadow-xl sm:p-10">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              LOGIN REQUIRED™
            </p>

            <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Work Orders™ are protected behind BAM Access™.
            </h2>

            <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
              Authorized users can manage machine issues, technician assignments,
              repair notes, parts activity, downtime records, and completed work
              history through the BAM™ maintenance workflow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/access"
                className="rounded-full bg-cyan-400 px-7 py-3 text-center text-sm font-black text-slate-950 shadow-lg hover:bg-cyan-300"
              >
                Login to Continue
              </a>

              <a
                href="/support"
                className="rounded-full border border-cyan-300/60 bg-cyan-950/60 px-7 py-3 text-center text-sm font-black text-cyan-100 hover:bg-cyan-900"
              >
                Request Access
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard
            title="Create"
            text="Start work orders from machine issues, facility requests, inspections, or BAM Scan™ activity."
          />

          <InfoCard
            title="Track"
            text="Follow priority, status, assignment, repair progress, and maintenance workflow movement."
          />

          <InfoCard
            title="Remember"
            text="Preserve technician notes and completed repair history inside BAM Hub™ machine memory."
          />
        </section>

        <section className="mt-8 rounded-[2rem] border border-cyan-200/30 bg-white p-6 text-cyan-950 shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-600">
            PUBLIC PREVIEW™
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Built for protected facility workflows.
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 font-medium text-cyan-800 sm:text-base">
            Work Orders™ are not displayed publicly because they may contain
            equipment names, machine faults, technician notes, parts usage,
            safety details, repair history, and facility maintenance records.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Work Orders™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/20 bg-white/15 p-6 shadow-xl backdrop-blur">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-cyan-50">{text}</p>
    </div>
  );
}