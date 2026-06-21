export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b18] text-white">
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between mb-16">
          <div>
            <h1 className="text-3xl font-black tracking-wide">
              BAMToolz<span className="text-blue-400">™</span>
            </h1>
            <p className="text-sm text-gray-400">
              Ball Advanced Maintenance Tools
            </p>
          </div>

          <div className="flex gap-3">
            <a href="#products" className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500">
              Products
            </a>
            <a href="#contact" className="px-4 py-2 rounded-xl border border-blue-400 hover:bg-blue-950">
              Contact
            </a>
          </div>
        </nav>

        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-bold mb-4">
              SAFETY FIRST • MAINTENANCE SECOND • KNOWLEDGE FOREVER
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              AI Safety & Maintenance Intelligence
            </h2>

            <p className="text-xl text-gray-300 mt-6 max-w-2xl">
              BAMToolz™ helps technicians scan equipment, verify safety steps,
              access procedures, find parts, and save repair knowledge inside
              a secure facility hub.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#scanner" className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 font-bold">
                View BAM Scanner
              </a>
              <a href="#hub" className="px-6 py-3 rounded-2xl border border-white/30 hover:bg-white/10 font-bold">
                View BAM Hub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/40 bg-white/5 p-8 shadow-2xl">
            <h3 className="text-2xl font-black mb-4">BAM Safety Check™</h3>
            <div className="space-y-4">
              {[
                "Machine identified",
                "PPE requirements loaded",
                "Lockout / tagout warning shown",
                "Known hazards displayed",
                "Repair procedure ready",
                "Action saved to hub history",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#071225] rounded-xl p-4">
                  <span className="h-4 w-4 rounded-full bg-blue-400" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section id="scanner" className="px-6 py-20 bg-[#071225]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <Card
            title="BAM Scan™"
            text="The technician scanner for equipment tags, nameplates, photos, repair notes, manuals, and parts lookup."
          />
          <Card
            title="BAM Safety Scan™"
            text="Safety-first mode showing PPE, hazards, lockout/tagout guidance, inspection checks, and task warnings."
          />
          <Card
            title="BAM Hub™"
            text="The secure local brain inside each building. It protects facility data and keeps scanner response fast."
          />
        </div>
      </section>

      <section id="hub" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-6">Each Building Gets Its Own Secure Hub</h2>
        <p className="text-gray-300 text-lg max-w-4xl">
          BAM Hub™ keeps manuals, drawings, safety procedures, repair history,
          equipment files, parts data, and technician notes inside the facility.
          Scanners connect locally for low-lag performance, while cloud backup
          and updates can be added later.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Feature title="Safety Control" text="Machine-specific hazards, PPE steps, inspections, and safety records." />
          <Feature title="Secure Data" text="Facility knowledge stays protected inside the local BAM Hub™." />
          <Feature title="Fast Scanner Response" text="Scanners connect directly to the hub instead of waiting on the cloud." />
          <Feature title="Audit History" text="Track who scanned, inspected, repaired, approved, and documented work." />
        </div>
      </section>

      <section id="products" className="px-6 py-20 bg-[#071225]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">Products In Development</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card title="BAM Scan Core™" text="Entry scanner for maintenance teams, equipment lookup, photos, notes, and repair history." />
            <Card title="BAM Scan Pro™" text="Rugged industrial scanner with stronger shell, lighting, larger battery, and faster AI hardware." />
            <Card title="BAM Safety Scan™" text="Safety-focused scanner mode for inspections, hazards, PPE, and compliance documentation." />
            <Card title="BAM Hub™" text="Local facility server that stores and protects building-specific maintenance and safety data." />
            <Card title="BAM Cloud™" text="Future enterprise layer for backups, updates, multi-site dashboards, and support." />
            <Card title="BAM Systems™" text="Integration services for facilities, controls teams, maintenance departments, and safety programs." />
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black">Build Safer Facilities With BAMToolz™</h2>
        <p className="text-gray-300 mt-4">
          AI-powered safety, maintenance, and facility knowledge infrastructure.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="mailto:contact@bamtoolz.com" className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 font-bold">
            Contact
          </a>
          <a href="#scanner" className="px-6 py-3 rounded-2xl border border-blue-400 hover:bg-blue-950 font-bold">
            Support
          </a>
        </div>
      </section>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-blue-500/30 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-2xl font-black mb-3">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#071225] border border-white/10 p-6">
      <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-300 mt-2">{text}</p>
    </div>
  );
}