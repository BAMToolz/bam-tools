export default function Support() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-8 border-4 border-white">
        <a href="/" className="text-cyan-200 font-black">
          ← Back to BAMToolz™
        </a>

        <section className="mt-8 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-8 shadow-2xl">
          <p className="text-cyan-300 font-black">BAM SUPPORT™</p>

          <h1 className="text-5xl font-black mt-4">
            Support for technicians, facilities, and future BAM systems.
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-5xl">
            BAMToolz™ support is being built to help organize equipment data,
            safety information, maintenance knowledge, hub systems, and future
            scanner workflows.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-5 mt-8">
          <Card title="Technician Support" text="Help with equipment profiles, repair notes, manuals, parts, and AI workflow support." />
          <Card title="Facility Support" text="Support for organizing building knowledge, safety records, inspections, and maintenance documentation." />
          <Card title="BAM Hub™ Support" text="Future support for secure local facility hubs, connected scanners, and building data systems." />
          <Card title="Safety Support" text="Guidance for PPE records, hazard notes, LOTO support information, and audit documentation." />
          <Card title="Roadmap Support" text="Updates for future scanner hardware, hub rollout, and platform development." />
          <Card title="Contact" text="For questions, future partnerships, or development updates, use the contact page." />
        </section>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-cyan-400 text-[#061a33] font-black px-6 py-3 rounded-xl"
          >
            Contact BAMToolz™
          </a>
        </div>
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
    <div className="rounded-2xl bg-[#061225] border border-cyan-400/30 p-6">
      <h2 className="text-2xl font-black text-cyan-300">{title}</h2>
      <p className="text-gray-300 mt-3">{text}</p>
    </div>
  );
}