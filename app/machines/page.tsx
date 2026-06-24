export default function MachinesPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Machines™
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
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Hub™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            MACHINE MANUFACTURING & INDUSTRIAL EQUIPMENT BUILDS™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Machines, automation, and future safety-connected technician hardware.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Machines™ is the machine manufacturing and equipment-build side
            of the BAM™ ecosystem — focused on industrial equipment, production
            support systems, controls-ready machinery, custom automation, rugged
            scanner devices, and future wearable safety technology for
            manufacturing facilities.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="Take-Up Systems™"
            text="Custom take-up equipment for wire, cable, tubing, extrusion, winding, spooling, and controlled material handling."
          />

          <Card
            title="Payoff Systems™"
            text="Payoff stands, feed systems, dereelers, tension control concepts, and production line support equipment."
          />

          <Card
            title="Custom Machines™"
            text="Purpose-built industrial machines, fixtures, tooling, guards, frames, workstations, and production support systems."
          />

          <Card
            title="Controls-Ready Equipment™"
            text="Machines designed with sensors, motors, drives, panels, wiring, and future PLC/HMI integration in mind."
          />

          <Card
            title="BAM Scan™ Devices"
            text="Future rugged scanner hardware designed to connect machine identification, technician workflows, and BAM Hub™ machine memory."
          />

          <Card
            title="BAM Safety Glass™"
            text="Future industrial safety-glasses concept connecting technicians to BAM Scan™, BAM Hub™, and BAM AI Assist™ through hands-free maintenance intelligence."
          />

          <Card
            title="Production Line Support™"
            text="Equipment concepts for safer, faster, cleaner, and more reliable manufacturing workflows."
          />

          <Card
            title="Robotic Automation™"
            text="Automation concepts for machine tending, handling, inspection, packaging, palletizing, and facility upgrades."
          />

          <Card
            title="BAM Labs™"
            text="Research and prototype development for rugged devices, wearable safety technology, edge hardware, and future industrial intelligence systems."
          />
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/40 bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            FUTURE CONNECTED HARDWARE™
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            BAM Safety Glass™ connects the technician to the ecosystem.
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Safety Glass™ is a future industrial wearable concept designed
            around the technician’s real work environment — gloves on, tools in
            hand, machines running, panels open, and safety procedures active.
            The goal is not consumer smart glasses. The goal is safety-connected
            maintenance intelligence.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <MiniCard title="Look" text="Technician views the machine, tag, panel, part, or fault area." />
            <MiniCard title="Scan" text="BAM Scan™ identifies the asset and connects it to machine data." />
            <MiniCard title="Assist" text="BAM AI Assist™ supports troubleshooting, parts, manuals, and procedures." />
            <MiniCard title="Remember" text="Repair notes and machine knowledge sync back into BAM Hub™." />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-yellow-300/60 bg-yellow-400/10 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-yellow-200">
            Safety First™
          </h2>

          <p className="mt-4 text-yellow-50">
            BAM Machines™ concepts must be reviewed, engineered, guarded,
            tested, and approved before production use. All equipment and
            wearable technology concepts must follow applicable safety standards,
            company procedures, OEM requirements, electrical codes, PPE
            requirements, and site safety rules.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Machine Build Focus
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Machines™ is designed to grow from practical manufacturing
            equipment concepts into full industrial machine builds — starting
            with technician-built systems and expanding toward engineered,
            controls-ready, automation-ready production equipment connected to
            the BAM™ intelligence ecosystem.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:BAMToolzsupport@gmail.com?subject=BAM%20Machines%20Inquiry"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Contact BAM Machines™
            </a>

            <a
              href="/scanner"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open BAM Scan™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM Machines™ | BAMToolz™ | Ball AI Metrics™</p>
        </footer>
      </div>
    </main>
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

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-cyan-300/20 bg-white/10 p-4">
      <h3 className="text-lg font-black text-cyan-200">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-cyan-50">{text}</p>
    </div>
  );
}