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
              BAM Hub™ Machine Memory | Facility Intelligence Layer™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Scan™</a>
            <a href="/toolz/scan" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">BAMToolz™</a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Work Orders™</a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Metrics™</a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Machines™</a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Access™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            MACHINE MEMORY COMMAND CENTER™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            The memory layer that helps every machine tell its story.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Hub™ connects machine identity, repair history, technician notes,
            manuals, parts, work orders, scan history, and facility intelligence
            into one protected operating layer. BAM Scan™ captures. BAMToolz™
            supports the technician. BAM Hub™ preserves the memory. BAM Metrics™
            turns it into insight.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/toolz/scan"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAMToolz™
            </a>

            <a
              href="/metrics"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              View BAM Metrics™
            </a>

            <a
              href="/access"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Enter BAM Access™
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <IntelligenceCard
            title="Machine Identity™"
            value="Connected"
            text="Nameplates, serial data, model information, tags, and machine profiles become searchable BAM Hub™ machine memory."
          />

          <IntelligenceCard
            title="Repair History™"
            value="Tracked"
            text="Work orders, technician notes, service activity, parts used, and repair outcomes build long-term facility knowledge."
          />

          <IntelligenceCard
            title="Facility Knowledge™"
            value="Protected"
            text="Manuals, drawings, parts, procedures, documents, and BAM AI Assist™ conversations stay inside the access-controlled layer."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black text-cyan-300">
                Facility Intelligence Layer™
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                BAM Hub™ is designed to become the central machine memory system
                for industrial equipment, maintenance teams, and facility operations.
              </p>
            </div>

            <div className="rounded-full border border-cyan-300 bg-cyan-500/20 px-4 py-2 text-xs font-black text-cyan-200">
              PROTECTED SYSTEM
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <SystemCard
              title="Asset Profiles™"
              type="Equipment Records"
              status="Machine identity, location, model, serial, documentation, scan history, and service context."
              insight="Every asset becomes easier to find, understand, service, and improve."
            />

            <SystemCard
              title="Maintenance Memory™"
              type="Repair Intelligence"
              status="Technician notes, faults, parts used, repairs performed, and recurring issues."
              insight="The knowledge from every repair can strengthen future troubleshooting."
            />

            <SystemCard
              title="Operational Visibility™"
              type="Facility Intelligence"
              status="Connected scans, work orders, documents, and metrics across the maintenance workflow."
              insight="Leaders gain visibility into reliability, documentation gaps, and improvement opportunities."
            />
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM Hub™ Workflow
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <WorkflowCard number="01" title="Capture" text="BAM Scan™ and BAMToolz™ capture machines, nameplates, faults, components, and documents." />
            <WorkflowCard number="02" title="Organize" text="BAM Hub™ builds structured machine memory and searchable facility records." />
            <WorkflowCard number="03" title="Protect" text="BAM Access™ controls users, accounts, providers, businesses, and facility data." />
            <WorkflowCard number="04" title="Improve" text="BAM Metrics™ converts machine history into reliability and performance intelligence." />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/40 bg-cyan-500/10 p-6 shadow-2xl sm:p-8">
          <h2 className="text-2xl font-black text-cyan-200">
            Built for Protected Facility Data™
          </h2>

          <p className="mt-4 text-sm leading-6 text-cyan-50 sm:text-base">
            Real machine names, serial numbers, manuals, drawings, repair records,
            technician notes, BAM AI Assist™ conversations, parts lists, work
            orders, scan history, and customer records belong inside authenticated
            BAM Hub™ accounts through BAM Access™.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Hub™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/scan" className="hover:text-white">BAM Scan™</a>
            <a href="/toolz/scan" className="hover:text-white">BAMToolz™</a>
            <a href="/workorders" className="hover:text-white">Work Orders™</a>
            <a href="/metrics" className="hover:text-white">Metrics™</a>
            <a href="/machines" className="hover:text-white">Machines™</a>
            <a href="/access" className="hover:text-white">Access™</a>
            <a href="/support" className="hover:text-white">Support</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function IntelligenceCard({
  title,
  value,
  text,
}: {
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-950/95 p-6 shadow-xl">
      <h3 className="font-black text-cyan-300">{title}</h3>
      <p className="mt-4 text-4xl font-black">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function SystemCard({
  title,
  type,
  status,
  insight,
}: {
  title: string;
  type: string;
  status: string;
  insight: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-5 shadow-xl">
      <p className="text-xs font-black tracking-wide text-cyan-400">
        HUB RECORD
      </p>

      <h3 className="mt-2 text-2xl font-black text-cyan-300">{title}</h3>

      <div className="mt-4 grid gap-2 text-sm text-slate-300">
        <p><span className="font-black text-cyan-300">Layer:</span> {type}</p>
        <p><span className="font-black text-cyan-300">Function:</span> {status}</p>
      </div>

      <div className="mt-4 rounded-lg bg-slate-950 p-4">
        <p className="text-xs font-black text-cyan-300">BAM AI Assist™ Intelligence</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{insight}</p>
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