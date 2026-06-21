export default function Home() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #020617 0%, #071b3a 45%, #020617 100%)",
      }}
    >
      <section className="px-6 py-8 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-wide text-white">
              BAMToolz<span className="text-blue-400">™</span>
            </h1>
            <p className="text-blue-300 mt-1">
              Ball Advanced Maintenance Tools
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold">
              Support
            </button>
            <button className="border border-blue-400 text-white px-5 py-2 rounded-xl font-bold">
              Contact
            </button>
          </div>
        </nav>

        <section className="mt-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-5 px-5 py-2 rounded-full bg-blue-950 border border-blue-400 text-blue-200 font-bold">
              SAFETY FIRST • AI POWERED • FACILITY INTELLIGENCE
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
              The Future of Maintenance Starts Here
            </h2>

            <p className="text-xl text-gray-300 mt-6 max-w-2xl">
              BAMToolz™ is an AI maintenance and safety platform built for
              technicians, equipment, facilities, hospitals, aerospace,
              manufacturing, and secure building intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-black">
                Scan Equipment
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold">
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-[#06142b] border border-blue-500/40 p-8 shadow-2xl">
            <h3 className="text-3xl font-black text-white">
              BAM Safety Scan™
            </h3>

            <p className="text-gray-300 mt-3">
              Verify safety before repair.
            </p>

            <div className="grid gap-4 mt-6">
              <Check text="PPE requirements loaded" />
              <Check text="Known hazards displayed" />
              <Check text="Lockout / tagout support" />
              <Check text="Machine procedure ready" />
              <Check text="Repair saved to BAM Hub™" />
            </div>
          </div>
        </section>
      </section>

      <section className="px-6 py-20 bg-[#06142b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white">
            Safety First. Repair Second.
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl text-lg">
            BAMToolz™ helps technicians scan equipment, confirm safety steps,
            access manuals, document work, and protect facility knowledge.
          </p>

          <div className="grid md:grid-cols-4 gap-5 mt-10">
            <Card title="PPE" text="Required protective equipment before starting work." />
            <Card title="Hazards" text="Machine-specific risks and safety warnings." />
            <Card title="LOTO" text="Lockout and tagout information support." />
            <Card title="Records" text="Inspection and maintenance history saved." />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-white">
          BAM Scan™ + BAM Hub™
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <Card
            title="BAM Scan™"
            text="The technician scanner for equipment tags, manuals, repair notes, parts lookup, photos, and safety checks."
          />

          <Card
            title="BAM Hub™"
            text="The secure local facility brain. Each building keeps its data protected, fast, and connected to its scanners."
          />
        </div>
      </section>

      <section className="px-6 py-20 bg-[#06142b]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-10">
            Products In Development
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card title="BAM Scan Core™" text="Entry AI maintenance scanner." />
            <Card title="BAM Scan Pro™" text="Rugged industrial scanner with advanced hardware." />
            <Card title="BAM Safety Scan™" text="Safety and compliance intelligence system." />
            <Card title="BAM Hub™" text="Local secure data hub for every facility." />
            <Card title="BAM Cloud™" text="Future enterprise connection platform." />
            <Card title="BAM Systems™" text="Industrial integration and support." />
          </div>
        </div>
      </section>
    </main>
  );
}

function Check({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#020617] border border-blue-500/20 p-4">
      <span className="h-4 w-4 rounded-full bg-blue-400" />
      <p className="text-gray-200">{text}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#081a35] border border-blue-500/30 p-6 shadow-xl">
      <h3 className="text-2xl font-black text-blue-300">{title}</h3>
      <p className="text-gray-300 mt-3">{text}</p>
    </div>
  );
}