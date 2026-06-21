export default function Hub() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-8 border-4 border-white">

        <a href="/" className="text-cyan-200 font-black">
          ← Back to BAMToolz™
        </a>

        <section className="mt-8 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-8 shadow-2xl">

          <p className="text-cyan-300 font-black">
            BAM HUB™
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-4">
            The Facility Intelligence Core.
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-5xl">
            BAM Hub™ is being designed as the secure knowledge center for
            facilities. A place where machines, maintenance history,
            documentation, safety data, technicians, and future AI systems
            connect.
          </p>

        </section>


        <section className="grid md:grid-cols-3 gap-5 mt-8">

          <Card
            title="Machine Memory™"
            text="Store equipment profiles, photos, serial numbers, manuals, repairs, notes, and machine history."
          />

          <Card
            title="Technician Knowledge™"
            text="Preserve troubleshooting experience and repair information before valuable knowledge disappears."
          />

          <Card
            title="AI Ready Database™"
            text="Organized facility information designed to support future AI assistance and faster decisions."
          />

          <Card
            title="Secure Facility Data™"
            text="Designed around each building controlling its own maintenance information and records."
          />

          <Card
            title="BAM Scan™ Connection"
            text="Future scanner devices connect into BAM Hub™ to access equipment intelligence instantly."
          />

          <Card
            title="Controls & Robotics™"
            text="Future support for PLC notes, wiring documentation, automation systems, and robotic equipment."
          />

          <Card
            title="Maintenance Records™"
            text="Track failures, downtime, completed repairs, replacement parts, and recurring problems."
          />

          <Card
            title="Parts Intelligence™"
            text="Connect machines with spare parts, suppliers, inventory information, and replacement history."
          />

          <Card
            title="Enterprise Growth™"
            text="Built toward manufacturing, aerospace, hospitals, data centers, and industrial facilities."
          />

        </section>


        <section className="mt-8 rounded-3xl bg-[#061225] border border-cyan-400/30 p-8">

          <h2 className="text-3xl font-black text-cyan-300">
            Preserve the Presence™
          </h2>

          <p className="text-gray-300 mt-4 max-w-5xl">
            BAM Hub™ is built around preserving the knowledge and presence
            of skilled technicians — keeping their experience available for
            future teams, facilities, and generations.
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