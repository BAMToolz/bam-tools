export default function HubPage() {
  return (
    <main className="min-h-screen bg-[#04162b] px-5 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-300/40 bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-8 shadow-2xl">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              BAM Hub™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Scan™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Machines™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-3xl border border-cyan-400/40 bg-[#0a1629]/95 p-8 shadow-2xl">
          <p className="font-black tracking-wide text-cyan-300">
            SECURE FACILITY CORE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Private machine memory for modern facilities.
          </h2>

          <p className="mt-6 max-w-5xl text-base leading-7 text-gray-300">
            BAM Hub™ is the secure intelligence layer for facilities. It is
            designed to organize equipment profiles, repair history, scan
            records, manuals, parts, safety notes, controls data, and technician
            knowledge behind protected access.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-yellow-300/60 bg-yellow-400/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-yellow-200">
            Protected Facility Data™
          </h2>

          <p className="mt-4 max-w-5xl text-yellow-50">
            Machine history, serial numbers, repair records, scan data, and
            technician notes belong inside secure facility accounts. Future
            versions will support login, company accounts, user roles, and
            facility-level permissions.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Machine Memory™"
            text="Equipment profiles, photos, serial numbers, scan records, manuals, repairs, notes, and service history."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve troubleshooting experience, repair steps, safety notes, and field knowledge before it disappears."
          />

          <Card
            title="Facility Permissions™"
            text="Keep each company, site, and department separated so equipment data stays controlled by the right organization."
          />

          <Card
            title="BAM Scan™ Intake"
            text="BAM Scan™ captures equipment data first. Reviewed scan results can flow into secure BAM Hub™ memory."
          />

          <Card
            title="Parts & Manuals™"
            text="Connect machines with spare parts, suppliers, manuals, drawings, documentation, and replacement history."
          />

          <Card
            title="Controls & Robotics™"
            text="Support PLC notes, wiring documentation, HMI details, robotics data, and automation history."
          />
        </section>

        <section className="mt-8 rounded-3xl border border-cyan-400/30 bg-[#061225] p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Preserve the Presence™
          </h2>

          <p className="mt-4 max-w-5xl text-gray-300">
            BAM Hub™ is built around preserving the presence of skilled
            technicians — keeping their experience available for future teams,
            facilities, and generations.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-black text-[#04162b] hover:bg-cyan-300"
            >
              Open BAM Scan™
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
          <p>© 2026 BAM Hub™ | BAMToolz™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-cyan-400/30 bg-[#061225] p-6 shadow-xl">
      <h2 className="text-2xl font-black text-cyan-300">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-gray-300">{text}</p>
    </div>
  );
}