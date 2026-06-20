export default function ContactPage() {
  return (
    <main style={main}>

      <section style={card}>

        <p style={topLine}>
          BAM™ • BALL ADVANCED MANAGEMENT
        </p>

        <h1 style={logo}>
          BAMToolz™ Support
        </h1>

        <h2 style={blue}>
          Industrial Intelligence Support Center
        </h2>

        <p>
          Support, questions, partnerships,
          facility setup, and integration requests.
        </p>


        <section style={box}>
          <h2 style={blue}>
            ◈ Contact Support
          </h2>

          <p>
            Need help with BAM Scan™,
            BAM Hub™, or BAMSystems™?
          </p>

          <p>
            Email:
          </p>

          <a
            href="mailto:BAMToolzsupport@gmail.com"
            style={email}
          >
            BAMToolzsupport@gmail.com
          </a>

        </section>


        <section style={box}>
          <h2 style={blue}>
            ◈ BAMLabs™
          </h2>

          <p>
            Artificial intelligence, research,
            prototypes, and future technology.
          </p>
        </section>


        <section style={box}>
          <h2 style={blue}>
            ◈ BAMToolz™
          </h2>

          <p>
            BAM Scan™ • BAM Assist™
            • BAM Hub™ • BAM Safety™
          </p>

          <p>
            Preserving equipment knowledge,
            history, and technician experience.
          </p>
        </section>


        <section style={box}>
          <h2 style={blue}>
            ◈ BAMSystems™
          </h2>

          <p>
            Automation, controls,
            smart facilities, and industrial
            system integration.
          </p>
        </section>


        <a href="/" style={button}>
          Back Home
        </a>

      </section>

    </main>
  );
}


const main = {
  minHeight:"100vh",
  background:
    "radial-gradient(circle at top,#062444,#020711,#000)",
  color:"#e8f4ff",
  padding:"22px",
  fontFamily:"Arial, Helvetica, sans-serif",
};


const card = {
  border:"1px solid #0077ff",
  borderRadius:"28px",
  padding:"28px",
  background:"linear-gradient(180deg,#04111f,#02050a)",
  boxShadow:"0 0 35px rgba(0,119,255,.35)",
};


const topLine = {
  color:"#8fc7ff",
  fontSize:"12px",
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


const box = {
  marginTop:"25px",
  padding:"20px",
  border:"1px solid #0077ff",
  borderRadius:"20px",
  background:"rgba(0,119,255,.08)",
};


const email = {
  color:"#8fc7ff",
  fontSize:"18px",
  fontWeight:"900",
  textDecoration:"none",
};


const button = {
  display:"inline-block",
  marginTop:"30px",
  background:"#0077ff",
  color:"#000",
  padding:"16px 30px",
  borderRadius:"999px",
  fontWeight:"900",
  textDecoration:"none",
};