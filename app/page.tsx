export default function Home() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-none md:rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-6 md:p-10 border-4 border-white">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center justify-center bg-white text-[#0a8fc2] font-black text-2xl px-5 py-1 rounded-xl shadow">
              BAM
            </div>
            <h1 className="text-4xl md:text-5xl font-black mt-3">BAMToolz™</h1>
            <p className="text-sm md:text-base font-bold text-blue-100 mt-2">
              Ball Advanced Maintenance Tools™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <NavButton text="Platform™" href="/platform" />
            <NavButton text="Safety™" href="/safety" />
            <NavButton text="Hub™" href="/hub" />
            <NavButton text="Roadmap™" href="/roadmap" />
            <NavButton text="Support™" href="/support" />
          </nav>
        </header>

        <Section
          label="INDUSTRIAL SAFETY & MAINTENANCE INTELLIGENCE™"
          title="Build the platform first. Power the scanner next."
        >
          <p className="text-gray-200 mt-6 max-w-5xl text-base md:text-lg">
            BAMToolz™ is being built as a safety-first maintenance intelligence
            platform for facilities, technicians, equipment data, manuals, parts,
            repair history, inspections, and secure building knowledge.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/platform" className="bg-cyan-400 text-[#061a33] font-black px-6 py-3 rounded-xl">
              View Platform™
            </a>
            <a href="/roadmap" className="bg-[#061a33] border border-cyan-400 text-cyan-200 font-black px-6 py-3 rounded-xl">
              Hardware In Development™
            </a>
          </div>
        </Section>

        <Section label="BAM PLATFORM™" title="The software foundation for facility intelligence.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            The first version of BAMToolz™ focuses on the platform: equipment
            profiles, safety checks, manuals, repair notes, parts data, and AI
            assistance. The scanner hardware comes later as a dedicated device
            powered by the same system.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <MiniCard title="Equipment Profiles" text="Digital records for machines, photos, manuals, safety notes, parts, and repair history." />
            <MiniCard title="Manual Library" text="Store manuals, drawings, troubleshooting guides, and procedures by machine or area." />
            <MiniCard title="Repair History" text="Track failures, fixes, parts used, technicians, dates, and recurring issues." />
            <MiniCard title="Parts Data" text="Connect equipment to part numbers, spare parts, suppliers, and replacement notes." />
            <MiniCard title="Technician Knowledge" text="Capture real field experience before knowledge is lost." />
            <MiniCard title="AI Assistant" text="Help technicians search facility knowledge and follow safer repair steps." />
          </div>
        </Section>

        <Section label="BAM SAFETY™" title="Safety first. Maintenance second.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            BAMToolz™ should be positioned as OSHA-aligned safety support, not
            OSHA-approved. The goal is to help facilities organize safety
            information, inspections, PPE requirements, hazards, and procedure
            records.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <MiniCard title="PPE" text="Show required protective equipment before work starts." />
            <MiniCard title="Hazards" text="Display machine-specific risks, warnings, and stored energy notes." />
            <MiniCard title="LOTO Support" text="Support lockout/tagout reference information and safe preparation." />
            <MiniCard title="Audit Records" text="Save inspections, photos, corrective actions, and repair documentation." />
          </div>
        </Section>

        <Section label="BAM HUB™" title="Each building keeps its own secure brain.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            BAM Hub™ is the future local facility hub. It keeps building-specific
            data secure, connects future scanners with low lag, and preserves
            machine knowledge inside the facility.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <MiniCard title="Local Data" text="Facility knowledge stays controlled inside the building." />
            <MiniCard title="Fast Access" text="Future scanners connect to the hub instead of waiting only on cloud systems." />
            <MiniCard title="Secure Knowledge" text="Manuals, drawings, procedures, photos, and notes stay organized and protected." />
            <MiniCard title="Building Memory" text="The facility keeps its repair knowledge even when workers leave or retire." />
            <MiniCard title="Cloud Later" text="Future BAM Cloud™ can support backups, updates, and multi-site dashboards." />
            <MiniCard title="Enterprise Ready" text="Built toward hospitals, aerospace, manufacturing, data centers, and robotics." />
          </div>
        </Section>

        <Section label="HARDWARE ROADMAP™" title="BAM Scan™ is a concept in development.">
          <p className="text-gray-200 mt-5 max-w-5xl">
            BAM Scan™ is the future dedicated scanner device. The current path is
            to prove the software first through the app, then move the same
            platform into purpose-built scanner hardware.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            <MiniCard title="Phone App First" text="Use the current app to prove scanning, equipment profiles, notes, and AI assistance." />
            <MiniCard title="Prototype Scanner" text="Build a rugged test unit after the software workflow is useful and repeatable." />
            <MiniCard title="Facility Rollout" text="Connect scanners to BAM Hub™ when the hub and platform are ready for scale." />
          </div>
        </Section>

        <Section label="PRODUCTS IN DEVELOPMENT™" title="The BAMToolz™ ecosystem.">
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <MiniCard title="BAM Platform™" text="The main software system for facility safety, maintenance, and machine intelligence." />
            <MiniCard title="BAM Safety™" text="Safety-first tools for PPE, hazards, inspections, LOTO support, and records." />
            <MiniCard title="BAM Hub™" text="Future secure local facility server for building-specific knowledge." />
            <MiniCard title="BAM Scan Core™" text="Future entry scanner hardware concept." />
            <MiniCard title="BAM Scan Pro™" text="Future rugged industrial scanner hardware concept." />
            <MiniCard title="BAM Systems™" text="Future support for controls, robotics, integration, and facility teams." />
          </div>
        </Section>

        <footer className="mt-10 border-t border-cyan-400/30 pt-8 text-center">
          <h3 className="text-2xl font-black">BAMToolz™</h3>

          <p className="text-blue-100 mt-2">
            Ball Advanced Maintenance Tools™
          </p>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
            Building the future of industrial safety, maintenance intelligence,
            facility knowledge, and connected equipment systems.
          </p>

          <div className="flex justify-center flex-wrap gap-6 mt-6 text-cyan-300 font-bold">
            <a href="/privacy">Privacy Policy™</a>
            <a href="/terms">Terms of Use™</a>
            <a href="/contact">Contact™</a>
            <a href="/support">Support™</a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            © 2026 BAMToolz™. All rights reserved.
          </p>
        </footer>
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
      <h2 className="text-3xl md:text-5xl font-black mt-3">{title}</h2>
      {children}
    </section>
  );
}

function NavButton({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className="bg-[#071225] border border-cyan-400/50 text-cyan-300 font-black px-4 py-2 rounded-xl text-sm shadow">
      {text}
    </a>
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