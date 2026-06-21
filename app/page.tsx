export default function Home() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-none md:rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-6 md:p-10 border-4 border-white">

        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center justify-center bg-white text-[#0a8fc2] font-black text-2xl px-5 py-1 rounded-xl shadow">
              BAM
            </div>

            <h1 className="text-4xl md:text-5xl font-black mt-3">
              BAMToolz™
            </h1>

            <p className="text-sm md:text-base font-bold text-blue-100 mt-2">
              Ball Advanced Maintenance Tools™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <NavButton text="Platform™" />
            <NavButton text="Products™" />
            <NavButton text="Safety™" />
            <NavButton text="Hub™" />
            <NavButton text="Scan™" />
          </nav>
        </header>

        <Section label="THE FUTURE OF INDUSTRIAL INTELLIGENCE™" title="Connecting Machines, Robotics, Technicians and AI.">
          <p className="text-gray-200 mt-6 max-w-5xl text-base md:text-lg">
            BAMToolz™ is being built as an industrial intelligence platform for
            maintenance teams, manufacturing facilities, hospitals, aerospace,
            robotics, machine controls, parts, manuals, repair history, safety
            verification, and technician knowledge.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-cyan-400 text-[#061a33] font-black px-6 py-3 rounded-xl">
              Scan Equipment™
            </button>

            <button className="bg-[#061a33] border border-cyan-400 text-cyan-200 font-black px-6 py-3 rounded-xl">
              Safety First™
            </button>
          </div>
        </Section>

        <Section label="BAM PLATFORM™" title="One system for the machine side of the world.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            BAMToolz™ turns scattered machine information into an organized
            AI-powered maintenance brain. Instead of manuals, notes, photos,
            parts lists, drawings, and repair history being spread everywhere,
            BAM connects the data to the equipment profile.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <MiniCard title="Equipment Profiles" text="Each machine can have its own digital record, photos, notes, manuals, parts, and repair history." />
            <MiniCard title="Manual Library" text="Store machine manuals, wiring drawings, troubleshooting guides, and facility procedures." />
            <MiniCard title="Repair History" text="Save what failed, what fixed it, who worked on it, and what parts were used." />
            <MiniCard title="Parts Intelligence" text="Connect equipment to spare parts, part numbers, suppliers, and replacement notes." />
            <MiniCard title="Technician Notes" text="Capture real field knowledge before experienced workers leave or retire." />
            <MiniCard title="AI Assistant" text="Help technicians search facility knowledge, understand issues, and follow safe steps." />
          </div>
        </Section>

        <Section label="BAM SAFETY SCAN™" title="Safety first. Repair second.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            BAM Safety Scan™ is designed to help technicians verify safety
            information before work begins. The goal is not to replace company
            safety programs, but to help organize and display safety information
            at the machine.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <MiniCard title="PPE" text="Required protective equipment before starting work." />
            <MiniCard title="Hazards" text="Machine-specific risks, warnings, pinch points, heat, motion, and stored energy notes." />
            <MiniCard title="LOTO Support" text="Lockout/tagout reference support for energy sources and safe work preparation." />
            <MiniCard title="Inspections" text="Safety inspection records, photos, corrective actions, and due dates." />
          </div>
        </Section>

        <Section label="BAM HUB™" title="Each building gets its own secure brain.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            BAM Hub™ is the local facility brain. Scanners connect to the hub
            inside the building for faster response, lower lag, and safer data
            control. The hub keeps that building’s machine knowledge, safety
            records, manuals, repair history, and technician notes protected.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <MiniCard title="Local Data" text="Facility information stays inside the building instead of depending only on the cloud." />
            <MiniCard title="No-Lag System" text="BAM Scan™ devices connect directly to the hub for fast equipment lookup and repair support." />
            <MiniCard title="Secure Knowledge" text="Manuals, drawings, procedures, and notes stay controlled by the facility." />
            <MiniCard title="Cloud Later" text="Future BAM Cloud™ can add backups, updates, enterprise dashboards, and multi-site support." />
            <MiniCard title="Audit Trail" text="Track scans, inspections, repairs, safety checks, and technician activity." />
            <MiniCard title="Building Memory" text="The building keeps its knowledge even when people transfer, quit, or retire." />
          </div>
        </Section>

        <Section label="TARGET MARKETS™" title="Built for critical facilities.">
          <div className="grid md:grid-cols-5 gap-4 mt-6">
            <MiniCard title="Aerospace" text="Machine safety, process knowledge, maintenance records, and controlled documentation." />
            <MiniCard title="Hospitals" text="Facility equipment, generators, pumps, safety inspections, and emergency readiness." />
            <MiniCard title="Manufacturing" text="Downtime tracking, equipment profiles, parts, controls, and repair knowledge." />
            <MiniCard title="Data Centers" text="Critical infrastructure, uptime support, inspections, and secure local documentation." />
            <MiniCard title="Robotics" text="Robot cells, controls, sensors, safety checks, and technician troubleshooting." />
          </div>
        </Section>

        <Section label="PRODUCTS IN DEVELOPMENT™" title="The BAMToolz™ ecosystem.">
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <MiniCard title="BAM Scan Core™" text="Entry AI maintenance scanner for daily equipment lookup, photos, notes, and repair history." />
            <MiniCard title="BAM Scan Pro™" text="Rugged industrial scanner with stronger shell, better camera, lighting, battery, and faster hardware." />
            <MiniCard title="BAM Safety Scan™" text="Safety-focused scanner mode for PPE, hazards, inspections, LOTO support, and records." />
            <MiniCard title="BAM Hub™" text="Secure local facility server that connects scanners to building-specific machine knowledge." />
            <MiniCard title="BAM Cloud™" text="Future enterprise layer for backups, updates, multi-location dashboards, and support." />
            <MiniCard title="BAM Systems™" text="Integration services for maintenance, controls, robotics, safety programs, and facility teams." />
          </div>
        </Section>

      </div>
    </main>
  );
}

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-6 md:p-10 shadow-2xl">
      <p className="text-cyan-300 font-black text-sm md:text-base tracking-wide">
        {label}
      </p>

      <h2 className="text-3xl md:text-5xl font-black mt-3">
        {title}
      </h2>

      {children}
    </section>
  );
}

function NavButton({ text }: { text: string }) {
  return (
    <button className="bg-[#071225] border border-cyan-400/50 text-cyan-300 font-black px-4 py-2 rounded-xl text-sm shadow">
      {text}
    </button>
  );
}

function MiniCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#061225] border border-cyan-400/30 p-5">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{text}</p>
    </div>
  );
}