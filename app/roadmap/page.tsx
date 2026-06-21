export default function Roadmap() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-8 border-4 border-white">
        <a href="/" className="text-cyan-200 font-black">
          ← Back to BAMToolz™
        </a>

        <section className="mt-8 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-8 shadow-2xl">
          <p className="text-cyan-300 font-black">
            HARDWARE ROADMAP™
          </p>

          <h1 className="text-5xl font-black mt-4">
            BAM Scan™ Hardware Is In Development.
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-5xl">
            BAMToolz™ is building the software platform first. The future hardware
            roadmap includes rugged scanner devices and local facility hubs that
            connect technicians to equipment knowledge, safety information, manuals,
            parts, and repair history.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-5 mt-8">
          <Card
            title="Phase 1: Phone App"
            text="Prove the workflow first: scan equipment, create profiles, save notes, store manuals, and build useful facility data."
          />

          <Card
            title="Phase 2: BAM Scan Core™"
            text="A future entry scanner concept for technicians using camera scanning, equipment lookup, repair notes, and safety checks."
          />

          <Card
            title="Phase 3: BAM Scan Pro™"
            text="A rugged industrial scanner concept with stronger housing, better lighting, larger battery, and faster hardware."
          />

          <Card
            title="Phase 4: BAM Safety Scan™"
            text="A safety-focused scanner mode for PPE, hazards, LOTO support, inspections, and audit-ready records."
          />

          <Card
            title="Phase 5: BAM Hub™"
            text="A secure local facility hub that stores building-specific knowledge and connects scanners with low-lag access."
          />

          <Card
            title="Phase 6: BAM Cloud™"
            text="Future enterprise layer for secure backups, software updates, multi-site dashboards, and support."
          />
        </section>

        <section className="mt-8 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-8 shadow-2xl">
          <p className="text-cyan-300 font-black">
            CURRENT BUILD STRATEGY™
          </p>

          <h2 className="text-4xl font-black mt-4">
            Platform first. Hardware second. Scale third.
          </h2>

          <p className="text-gray-200 mt-5 max-w-5xl">
            The first goal is not to promise finished scanner hardware. The first
            goal is to prove that BAMToolz™ can organize real equipment data,
            safety information, manuals, parts, and technician knowledge in a way
            facilities can use. Once the software is valuable, the scanner becomes
            the dedicated tool that carries the platform into the field.
          </p>
        </section>
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
      <h2 className="text-2xl font-black text-cyan-300">
        {title}
      </h2>

      <p className="text-gray-300 mt-3">
        {text}
      </p>
    </div>
  );
}