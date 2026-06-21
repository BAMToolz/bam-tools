export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#071b3a] text-white">

      {/* HERO */}
      <section className="px-6 py-10 max-w-7xl mx-auto">

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-black">
              BAMToolz<span className="text-blue-400">™</span>
            </h1>

            <p className="text-blue-300 mt-2">
              Ball Advanced Maintenance Tools
            </p>
          </div>

          <div className="space-x-4">
            <button className="bg-blue-600 px-5 py-2 rounded-xl">
              Support
            </button>

            <button className="border border-blue-400 px-5 py-2 rounded-xl">
              Contact
            </button>
          </div>
        </div>


        <div className="mt-24 max-w-4xl">

          <div className="inline-block mb-5 px-5 py-2 rounded-full bg-blue-900/50 border border-blue-400">
            SAFETY FIRST • AI POWERED • FACILITY INTELLIGENCE
          </div>

          <h2 className="text-6xl font-black leading-tight">
            The Future of Maintenance Starts Here
          </h2>

          <p className="text-xl text-gray-300 mt-6">
            BAMToolz™ combines artificial intelligence, equipment scanning,
            safety verification, and secure facility knowledge systems.
          </p>


          <div className="flex gap-4 mt-10">

            <button className="bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-xl font-bold">
              Scan Equipment
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-xl">
              Learn More
            </button>

          </div>

        </div>

      </section>



      {/* SAFETY */}
      <section className="px-6 py-20 bg-black/20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black">
            BAM Safety Scan™
          </h2>

          <p className="text-gray-300 mt-4 max-w-3xl">
            Before every repair begins, BAMToolz™ helps technicians verify
            safety information, hazards, PPE requirements, and procedures.
          </p>


          <div className="grid md:grid-cols-4 gap-5 mt-10">

            <Card 
              title="PPE"
              text="Required protective equipment before starting work."
            />

            <Card 
              title="Hazards"
              text="Machine specific risks and safety warnings."
            />

            <Card 
              title="LOTO"
              text="Lockout and tagout information support."
            />

            <Card
              title="Records"
              text="Inspection and maintenance history saved."
            />

          </div>

        </div>

      </section>




      {/* SCANNER HUB */}
      <section className="px-6 py-20 max-w-7xl mx-auto">

        <h2 className="text-4xl font-black">
          BAM Scan™ + BAM Hub™
        </h2>


        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <Card

            title="BAM Scan™"

            text="A rugged AI scanner designed for technicians. Scan machines, identify equipment, access manuals, find parts, and save repairs."

          />


          <Card

            title="BAM Hub™"

            text="The secure facility brain. Stores machine data, safety information, manuals, drawings, and repair knowledge locally."

          />

        </div>

      </section>




      {/* PRODUCTS */}
      <section className="px-6 py-20 bg-black/20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black mb-10">
            Products In Development
          </h2>


          <div className="grid md:grid-cols-3 gap-6">

            <Card
              title="BAM Scan Core™"
              text="Entry AI maintenance scanner."
            />

            <Card
              title="BAM Scan Pro™"
              text="Industrial rugged scanner with advanced hardware."
            />

            <Card
              title="BAM Safety Scan™"
              text="Safety and compliance intelligence system."
            />

            <Card
              title="BAM Hub™"
              text="Local secure data hub for every facility."
            />

            <Card
              title="BAM Cloud™"
              text="Future enterprise connection platform."
            />

            <Card
              title="BAM Systems™"
              text="Industrial integration and support."
            />


          </div>

        </div>

      </section>



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

    <div className="rounded-2xl bg-white/10 border border-blue-500/30 p-6 shadow-xl">

      <h3 className="text-2xl font-bold text-blue-300">
        {title}
      </h3>


      <p className="text-gray-300 mt-3">
        {text}
      </p>

    </div>

  );

}