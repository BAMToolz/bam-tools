export default function Home() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-none md:rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-6 md:p-10 border-4 border-white">

        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex bg-white text-[#0a8fc2] font-black text-2xl px-5 py-1 rounded-xl">
              BAM
            </div>

            <h1 className="text-4xl md:text-5xl font-black mt-3">
              BAMToolz™
            </h1>

            <p className="font-bold text-blue-100 mt-2">
              Ball Advanced Management™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <NavButton text="Platform™" href="/platform" />
            <NavButton text="Safety™" href="/scanner" />
            <NavButton text="Hub™" href="/hub" />
            <NavButton text="Roadmap™" href="/roadmap" />
            <NavButton text="Support™" href="/support" />
          </nav>
        </header>


        <section className="mt-10 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-8">

          <p className="text-cyan-300 font-black">
            INDUSTRIAL SAFETY & MAINTENANCE INTELLIGENCE™
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Connecting machines, technicians, facilities and AI.
          </h2>

          <p className="text-gray-200 mt-6">
            BAMToolz™ is an industrial intelligence platform by
            Ball Advanced Management™ designed for equipment data,
            maintenance history, manuals, parts, controls,
            automation, and technician knowledge preservation.
          </p>

        </section>


        <section className="grid md:grid-cols-3 gap-5 mt-8">

          <Card
            title="BAM Hub™"
            text="Equipment history, facility data, and maintenance intelligence."
          />

          <Card
            title="BAM Scan™"
            text="AI equipment scanning, troubleshooting, and technician support."
          />

          <Card
            title="BAM Safety™"
            text="Safety procedures, inspections, and compliance tools."
          />

          <Card
            title="BAM Systems™"
            text="Controls, robotics, automation, PLC, and integrations."
          />

          <Card
            title="BAMToolz™ Platform"
            text="Industrial tools built for modern technicians."
          />

          <Card
            title="Knowledge Preservation™"
            text="Saving technician experience before it disappears."
          />

        </section>


        <footer className="mt-12 border-t border-cyan-400/40 pt-8 text-center">

          <h3 className="text-3xl font-black">
            BAMToolz™
          </h3>

          <p className="text-blue-100 mt-2">
            Building the future of industrial intelligence.
          </p>


          <div className="flex justify-center gap-6 flex-wrap mt-6 text-cyan-300 font-bold">

            <a href="/privacy">
              Privacy Policy™
            </a>

            <a href="/terms">
              Terms of Service™
            </a>

            <a href="/support">
              Contact Support™
            </a>

          </div>


          <p className="text-blue-100 mt-6 text-sm">
            © 2026 Ball Advanced Management™.
            All Rights Reserved.
          </p>

        </footer>

      </div>
    </main>
  );
}


function NavButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="bg-[#071225] border border-cyan-400/50 text-cyan-300 font-black px-4 py-2 rounded-xl text-sm"
    >
      {text}
    </a>
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
    <div className="rounded-2xl bg-[#061225] border border-cyan-400/30 p-5">
      <h3 className="text-xl font-black text-cyan-300">
        {title}
      </h3>

      <p className="text-gray-300 mt-2">
        {text}
      </p>
    </div>
  );
}