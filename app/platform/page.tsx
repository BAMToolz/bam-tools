export default function Platform() {
  return (
    <main className="min-h-screen bg-[#04162b] text-white px-5 py-6">

      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#08aeea] via-[#0874a8] to-[#061a33] p-8 border-4 border-white">

        <a
          href="/"
          className="text-cyan-200 font-black"
        >
          ← Back to BAMToolz™
        </a>


        <section className="mt-8 rounded-3xl bg-[#0a1629]/90 border border-cyan-400/40 p-8 shadow-2xl">

          <p className="text-cyan-300 font-black">
            BAM PLATFORM™
          </p>


          <h1 className="text-5xl font-black mt-4">
            The Operating System for Facility Knowledge.
          </h1>


          <p className="text-gray-200 mt-6 text-lg max-w-5xl">

            BAMToolz™ is being developed as a safety-first industrial
            intelligence platform that organizes equipment, technicians,
            maintenance data, repair history, and facility knowledge.

          </p>

        </section>




        <section className="grid md:grid-cols-3 gap-5 mt-8">

          <Card
            title="Equipment Profiles"
            text="Create digital records for every machine including photos, manuals, parts, safety information, and service history."
          />


          <Card
            title="AI Knowledge System"
            text="Help technicians search stored facility information, previous repairs, manuals, and troubleshooting notes."
          />


          <Card
            title="Maintenance History"
            text="Track failures, fixes, downtime causes, repairs completed, and technician experience."
          />


          <Card
            title="Parts Intelligence"
            text="Connect machines to replacement parts, suppliers, inventory, and critical spare components."
          />


          <Card
            title="Documentation"
            text="Store drawings, procedures, manuals, inspection records, and facility standards."
          />


          <Card
            title="Future Hardware Ready"
            text="Designed to support future BAM Hub™ systems and BAM Scan™ devices."
          />


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