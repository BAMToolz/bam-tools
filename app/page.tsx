export default function Home() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-none md:rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-6 md:p-10 border-4 border-white">

        {/* HEADER */}
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
            <NavButton text="Robotics™" />
            <NavButton text="Scan™" />
            <NavButton text="Support™" />
          </nav>
        </header>

        {/* HERO CARD */}
        <section className="mt-10 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-6 md:p-10 shadow-2xl">
          <p className="text-cyan-300 font-black text-sm md:text-base tracking-wide">
            THE FUTURE OF INDUSTRIAL INTELLIGENCE™
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mt-4">
            Connecting Machines, Robotics, Technicians and AI.
          </h2>

          <p className="text-gray-200 mt-6 max-w-5xl text-base md:text-lg">
            BAMToolz™ is being built as an industrial intelligence platform for
            maintenance teams, manufacturing facilities, hospitals, robotics,
            machine controls, parts, manuals, repair history, safety verification,
            and technician knowledge.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-cyan-400 text-[#061a33] font-black px-6 py-3 rounded-xl">
              Scan Equipment™
            </button>

            <button className="bg-[#061a33] border border-cyan-400 text-cyan-200 font-black px-6 py-3 rounded-xl">
              Safety First™
            </button>
          </div>
        </section>

        {/* SAFETY CARD */}
        <section className="mt-6 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-6 md:p-10 shadow-2xl">
          <p className="text-cyan-300 font-black text-sm md:text-base">
            BAM SAFETY SCAN™
          </p>

          <h2 className="text-3xl md:text-5xl font-black mt-3">
            Safety first. Repair second.
          </h2>

          <p className="text-gray-200 mt-5 max-w-5xl">
            Before work begins, BAM Safety Scan™ helps technicians check PPE,
            hazards, lockout/tagout information, machine-specific warnings,
            inspection records, and safe procedures stored inside BAM Hub™.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <MiniCard title="PPE" text="Required protective equipment." />
            <MiniCard title="Hazards" text="Machine-specific warnings." />
            <MiniCard title="LOTO" text="Lockout/tagout support." />
            <MiniCard title="Records" text="Inspection history saved." />
          </div>
        </section>

        {/* PLATFORM CARD */}
        <section className="mt-6 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-6 md:p-10 shadow-2xl">
          <p className="text-cyan-300 font-black text-sm md:text-base">
            BAM PLATFORM™
          </p>

          <h2 className="text-3xl md:text-5xl font-black mt-3">
            One system for the machine side of the world.
          </h2>

          <p className="text-gray-200 mt-5 max-w-5xl">
            BAMToolz™ is designed to turn scattered machine information into an
            organized AI-powered maintenance brain. Instead of manuals, notes,
            photos, parts lists, and repair history being spread everywhere,
            BAM Hub™ connects it all to the equipment profile.
          </p>
        </section>

        {/* PRODUCTS */}
        <section className="mt-6 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-6 md:p-10 shadow-2xl">
          <p className="text-cyan-300 font-black text-sm md:text-base">
            PRODUCTS IN DEVELOPMENT™
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <MiniCard title="BAM Scan Core™" text="Entry AI maintenance scanner." />
            <MiniCard title="BAM Scan Pro™" text="Rugged industrial scanner." />
            <MiniCard title="BAM Safety Scan™" text="Safety and compliance scanner." />
            <MiniCard title="BAM Hub™" text="Secure local facility brain." />
            <MiniCard title="BAM Cloud™" text="Future enterprise connection." />
            <MiniCard title="BAM Systems™" text="Robotics and controls support." />
          </div>
        </section>
      </div>
    </main>
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