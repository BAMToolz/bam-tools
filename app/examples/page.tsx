export default function ExamplesPage() {
  return (
    <main style={main}>

      <section style={hero}>

        <p style={topLine}>
          BAM™ • BALL ADVANCED MANAGEMENT
        </p>

        <h1 style={logo}>
          BAMToolz™ Examples
        </h1>

        <h2 style={blue}>
          Industrial Intelligence In Action
        </h2>

        <p>
          Built by BAMLabs™ to connect machines,
          technicians, history, and knowledge.
        </p>


        <section style={prototype}>

          <h2 style={blue}>
            BAMToolz™ Prototype Scanner
          </h2>

          <p>
            Rugged handheld industrial AI scanner
            designed for manufacturing, aerospace,
            hospitals, and facility maintenance.
          </p>


          <div style={screen}>

            <h2 style={blue}>
              BAM Intelligence™
            </h2>

            <p>BAM Scan™</p>
            <p>BAM Assist™</p>
            <p>BAM Hub™</p>
            <p>BAM Safety™</p>

          </div>

        </section>


      </section>



      <section style={card}>
        <h2 style={blue}>◈ BAM Scan™</h2>

        <p>
          Scan equipment tags, serial numbers,
          QR codes, manuals, and asset information.
        </p>

      </section>



      <section style={card}>
        <h2 style={blue}>◈ BAM Assist™</h2>

        <p>
          AI guided troubleshooting that helps
          technicians diagnose problems.
        </p>

      </section>



      <section style={card}>
        <h2 style={blue}>◈ BAM Hub™</h2>

        <p>
          Machine memory storing repairs,
          history, documents, and knowledge.
        </p>

      </section>



      <section style={card}>
        <h2 style={blue}>◈ BAMSystems™</h2>

        <p>
          Automation • Controls • PLC Data
          • Smart Facility Integration
        </p>

      </section>



      <footer style={footer}>

        <a href="/" style={button}>
          Back Home
        </a>

      </footer>


    </main>
  );
}



const main = {
  minHeight:"100vh",
  background:
    "radial-gradient(circle at top,#062444,#020711,#000)",
  color:"#e8f4ff",
  padding:"22px",
  fontFamily:"Arial",
};



const hero = {
  border:"1px solid #0077ff",
  borderRadius:"28px",
  padding:"28px",
  background:
    "linear-gradient(180deg,#04111f,#02050a)",
  boxShadow:
    "0 0 35px rgba(0,119,255,.35)",
};



const prototype = {
  marginTop:"25px",
  padding:"25px",
  border:"1px solid #0077ff",
  borderRadius:"24px",
  background:
    "rgba(0,119,255,.08)",
};



const screen = {
  marginTop:"20px",
  padding:"22px",
  background:"#000",
  border:"1px solid #0077ff",
  borderRadius:"18px",
};



const topLine = {
  color:"#8fc7ff",
  letterSpacing:"3px",
  fontWeight:"900",
};



const logo = {
  color:"#0077ff",
  fontSize:"42px",
  fontStyle:"italic",
};



const blue = {
  color:"#0077ff",
};



const card = {
  marginTop:"25px",
  padding:"22px",
  border:"1px solid #0077ff",
  borderRadius:"22px",
  background:"#03070d",
};



const footer = {
  marginTop:"40px",
  textAlign:"center" as const,
};



const button = {
  background:"#0077ff",
  color:"#000",
  padding:"15px 30px",
  borderRadius:"999px",
  fontWeight:"900",
  textDecoration:"none",
};