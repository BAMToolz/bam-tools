export default function WorkOrdersPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-400/40 bg-[#050816] p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6">
          <div>
            <div className="inline-flex rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black tracking-wide text-slate-950 shadow-lg">
              BAM™
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight text-white sm:text-7xl">
              BAM Work Orders™
            </h1>

            <p className="mt-4 max-w-3xl text-xl font-medium leading-8 text-slate-300">
              Protected maintenance workflow | Ball AI Metrics™
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-4">
            <a href="/" className="rounded-2xl border border-cyan-400/50 bg-slate-900/80 px-4 py-4 text-center text-base font-black text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/scan" className="rounded-2xl border border-cyan-400/50 bg-slate-900/80 px-4 py-4 text-center text-base font-black text-cyan-200 shadow-lg">
              BAM Scan™
            </a>
            <a href="/toolz/scan" className="rounded-2xl border border-cyan-400/50 bg-slate-900/80 px-4 py-4 text-center text-base font-black text-cyan-200 shadow-lg">
              BAMToolz™
            </a>
            <a href="/hub" className="rounded-2xl border border-cyan-400/50 bg-slate-900/80 px-4 py-4 text-center text-base font-black text-cyan-200 shadow-lg">
              Hub™
            </a>
            <a href="/access" className="rounded-2xl border border-cyan-400/50 bg-slate-900/80 px-4 py-4 text-center text-base font-black text-cyan-200 shadow-lg">
              Access™
            </a>
            <a href="/support" className="rounded-2xl border border-cyan-400/50 bg-slate-900/80 px-4 py-4 text-center text-base font-black text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-8 rounded-[2rem] border border-cyan-400/40 bg-[#061826] p-6 shadow-2xl sm:p-10">
          <div className="rounded-[1.75rem] bg-[#050816] p-6 shadow-xl sm:p-10">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              LOGIN REQUIRED™
            </p>

            <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
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
                className="rounded-full bg-cyan-300 px-7 py-3 text-center text-sm font-black text-slate-950 shadow-lg hover:bg-cyan-200"
              >
                Login to Continue
              </a>

              <a
                href="/support"
                className="rounded-full border border-cyan-400/60 bg-slate-900/80 px-7 py-3 text-center text-sm font-black text-cyan-100 hover:bg-slate-800"
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

        <section className="mt-8 rounded-[2rem] border border-cyan-400/40 bg-[#061826] p-6 text-white shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            PUBLIC PREVIEW™
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Built for protected facility workflows.
          </h2>

          <p className="mt-4 max-w-5xl text-sm font-medium leading-6 text-slate-300 sm:text-base">
            Work Orders™ are not displayed publicly because they may contain
            equipment names, machine faults, technician notes, parts usage,
            safety details, repair history, and facility maintenance records.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-400/30 pt-6 text-center text-sm text-slate-300">
          © 2026 BAM Work Orders™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-cyan-400/40 bg-[#061826] p-6 shadow-xl">
      <h3 className="text-xl font-black text-cyan-200">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}