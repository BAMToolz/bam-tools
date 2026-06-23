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
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Scan™
            </a>
            <a href="/login" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">
              BAM Access™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Machines™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            PROTECTED FACILITY CORE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            BAM Hub™ is private machine memory behind BAM Access™.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Hub™ is designed to protect facility equipment profiles, scan
            records, repair history, manuals, parts, controls notes, technician
            knowledge, and machine intelligence behind secure login and
            facility-level permissions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/login"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Open BAM Access™
            </a>

            <a
              href="/scanner"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Run BAM Scan™
            </a>

            <a
              href="/"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Back Home™
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-yellow-200">
            Access Required™
          </h2>

          <p className="mt-4 text-sm leading-6 text-yellow-50 sm:text-base">
            Machine history, serial numbers, repair records, scan data,
            technician notes, manuals, drawings, and facility documentation
            should not be public. BAM Hub™ belongs behind BAM Access™ with
            company accounts, user roles, technician permissions, and protected
            facility data.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Machine Memory™"
            text="Private equipment profiles, photos, scan records, manuals, repairs, notes, and service history."
          />

          <Card
            title="Facility Dashboard™"
            text="Protected overview for machines, scans, repairs, parts, technician knowledge, and reliability metrics."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve troubleshooting experience, repair steps, safety notes, and field knowledge inside secure accounts."
          />

          <Card
            title="Facility Permissions™"
            text="Keep each company, site, department, role, and technician separated with controlled data access."
          />

          <Card
            title="BAM Scan™ Intake"
            text="BAM Scan™ captures equipment data first. Approved scans can flow into secure BAM Hub™ memory."
          />

          <Card
            title="Parts & Manuals™"
            text="Connect machines with spare parts, suppliers, manuals, drawings, documentation, and replacement history."
          />

          <Card
            title="Controls & Robotics™"
            text="Store PLC notes, wiring documentation, HMI details, robotics data, and automation history securely."
          />

          <Card
            title="BAM Access™"
            text="Login layer for technicians, engineers, admins, facilities, RFID access concepts, and protected machine data."
          />

          <Card
            title="Reliability Metrics™"
            text="Convert protected machine history into downtime patterns, recurring failure tracking, and improvement opportunities."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Protected Workflow™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ captures the machine. BAM AI™ assists the technician.
            BAM Access™ protects the facility. BAM Hub™ remembers the machine.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <WorkflowCard number="01" title="Scan" text="Capture equipment data." />
            <WorkflowCard number="02" title="Assist" text="Ask BAM AI™." />
            <WorkflowCard number="03" title="Access" text="Login required." />
            <WorkflowCard number="04" title="Remember" text="Save machine history." />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/login"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Enter BAM Access™
            </a>

            <a
              href="/scanner"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open BAM Scan™
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Preserve the Presence™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Hub™ is built around preserving the presence of skilled
            technicians — keeping their experience available for future teams,
            facilities, and generations, while protecting the facility data
            that knowledge belongs to.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Hub™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/scanner" className="hover:text-white">
              BAM Scan™
            </a>
            <a href="/login" className="hover:text-white">
              BAM Access™
            </a>
            <a href="/machines" className="hover:text-white">
              BAM Machines™
            </a>
            <a href="/support" className="hover:text-white">
              Support
            </a>
          </div>
        </footer>
      </div>
    </main>
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