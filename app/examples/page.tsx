export default function ExamplesPage() {
  return (
    <main style={main}>

      <section style={panel}>

        <p style={topLine}>
          BAMLabs™ • BALL ADVANCED MANAGEMENT
        </p>

        <h1 style={logo}>
          BAMToolz™
        </h1>

        <h2 style={blue}>
          Industrial AI Equipment Platform
        </h2>

        <p>
          Aerospace-grade intelligence system designed
          for manufacturing, maintenance, and critical facilities.
        </p>


        <section style={device}>

          <div style={statusBar}>
            BAM SCANNER // ONLINE
          </div>

          <div style={screen}>

            <h2 style={screenTitle}>
              BAM Intelligence™
            </h2>

            <p style={data}>
              ASSET ID: READY
            </p>

            <p style={data}>
              AI MODEL: ACTIVE
            </p>

            <p style={data}>
              MEMORY HUB: CONNECTED
            </p>

            <div style={scanLine}>
              SCAN EQUIPMENT
            </div>

          </div>


          <div style={modules}>

            <div style={module}>
              BAM Scan™
            </div>

            <div style={module}>
              BAM Assist™
            </div>

            <div style={module}>
              BAM Hub™
            </div>

            <div style={module}>
              BAM Safety™
            </div>

          </div>

        </section>

      </section>



      <section style={card}>
        <h2 style={blue}>◈ BAM Scan™</h2>

        <p>
          Identifies equipment tags, serial numbers,
          manuals, and asset data.
        </p>

      </section>



      <section style={card}>

        <h2 style={blue}>◈ BAM Assist™</h2>

        <p>
          AI troubleshooting with guided technician
          questions and repair intelligence.
        </p>

      </section>



      <section style={card}>

        <h2 style={blue}>◈ BAM Hub™</h2>

        <p>
          Machine memory preserving repair history,
          experience, and knowledge.
        </p>

      </section>



      <section style={card}>

        <h2 style={blue}>◈ BAMSystems™</h2>

        <p>
          Automation, controls, sensors,
          PLC data, and facility integration.
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
    "linear-gradient(135deg,#000,#03111f,#000)",
  color:"#e8f4ff",
  padding:"22px",
  fontFamily:"Arial",
};



const panel = {
  border:"1px solid #008cff",
  padding:"28px",
  background:"#02060b",
  boxShadow:
    "0 0 45px rgba(0,140,255,.3)",
};



const topLine = {
  color:"#8fc7ff",
  letterSpacing:"4px",
  fontSize:"12px",
};



const logo = {
  color:"#008cff",
  fontSize:"52px",
  letterSpacing:"2px",
};



const blue = {
  color:"#008cff",
};



const device = {
  marginTop:"30px",
  border:"2px solid #263849",
  padding:"18px",
  background:
    "linear-gradient(180deg,#111923,#020406)",
};



const statusBar = {
  background:"#008cff",
  color:"#000",
  padding:"10px",
  fontWeight:"900",
  letterSpacing:"3px",
};



const screen = {
  marginTop:"18px",
  padding:"22px",
  background:"#000",
  border:"1px solid #008cff",
};



const screenTitle = {
  color:"#8fc7ff",
};



const data = {
  fontFamily:"monospace",
  color:"#8fc7ff",
};



const scanLine = {
  marginTop:"25px",
  border:"1px solid #008cff",
  padding:"18px",
  textAlign:"center" as const,
  fontWeight:"900",
  letterSpacing:"3px",
};



const modules = {
  display:"grid",
  gridTemplateColumns:
    "repeat(2,1fr)",
  gap:"12px",
  marginTop:"18px",
};



const module = {
  border:"1px solid #008cff",
  padding:"18px",
  background:"#07111d",
  textAlign:"center" as const,
  fontWeight:"900",
};



const card = {
  marginTop:"25px",
  padding:"22px",
  border:"1px solid #008cff",
  background:"#03070d",
};



const footer = {
  marginTop:"40px",
  textAlign:"center" as const,
};



const button = {
  background:"#008cff",
  color:"#000",
  padding:"15px 35px",
  textDecoration:"none",
  fontWeight:"900",
};