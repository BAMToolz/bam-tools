export default function Home() {
  return (
    <main style={main}>
      <section style={scannerFrame}>
        <p style={topLine}>BAM™ • BALL ADVANCED MANAGEMENT</p>

        <p style={prototype}>BAMLabs™ Prototype Interface</p>

        <h1 style={logo}>BAMToolz™</h1>

        <h2 style={subtitle}>Industrial Intelligence Platform</h2>

        <section style={screen}>
          <h2 style={blue}>◈ BAM Intelligence™</h2>

          <p>
            Scan equipment. Assist technicians. Preserve machine memory.
          </p>

          <div style={grid}>
            <div style={tile}>BAM Scan™</div>
            <div style={tile}>BAM Assist™</div>
            <div style={tile}>BAM Hub™</div>
            <div style={tile}>BAM Safety™</div>
          </div>
        </section>

        <a href="/scanner" style={button}>
          Launch BAM Intelligence™
        </a>

        <a href="/examples" style={button}>
          View BAM Examples™
        </a>

        <a href="/contact" style={button}>
          Contact Support
        </a>
      </section>

      <section style={card}>
        <h2 style={blue}>BAMLabs™</h2>
        <p>Research • AI • Innovation • Future Technology</p>
        <p>Creating the intelligence behind BAMToolz™.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAMToolz™</h2>
        <p>BAM Scan™ • BAM Assist™ • BAM Hub™ • BAM Safety™</p>
        <p>Every machine gains history, knowledge, and intelligence.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Network™</h2>
        <p>Private technician communication inside each facility.</p>
        <p>
          Hospitals, factories, and critical facilities keep their own secure
          teams, machines, repair notes, photos, and knowledge separate.
        </p>
        <p>
          Facility teams can chat around a specific asset, share repair history,
          ask senior technicians, and preserve shift handoff knowledge.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAMSystems™</h2>
        <p>Automation • Controls • Sensors • Integration</p>
      </section>

      <footer style={footer}>
        © 2026 Ball Advanced Management™
        <br />
        BAMLabs™ • BAMToolz™ • BAMSystems™
        <br />
        BAMToolzsupport@gmail.com
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#082b52,#020711,#000)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial",
};

const scannerFrame = {
  border: "2px solid #0077ff",
  borderRadius: "32px",
  padding: "26px",
  background: "linear-gradient(180deg,#06192d,#02050a)",
  boxShadow: "0 0 40px rgba(0,119,255,.4)",
};

const topLine = {
  color: "#8fc7ff",
  textAlign: "center" as const,
  letterSpacing: "3px",
  fontWeight: "900",
};

const prototype = {
  textAlign: "center" as const,
  color: "#8fc7ff",
};

const logo = {
  textAlign: "center" as const,
  color: "#0077ff",
  fontSize: "50px",
};

const subtitle = {
  textAlign: "center" as const,
};

const screen = {
  margin: "25px 0",
  padding: "20px",
  border: "1px solid rgba(0,119,255,.8)",
  borderRadius: "22px",
  background: "#000",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0,1fr))",
  gap: "12px",
};

const tile = {
  padding: "15px",
  border: "1px solid #0077ff",
  borderRadius: "16px",
  textAlign: "center" as const,
};

const card = {
  marginTop: "25px",
  padding: "22px",
  border: "1px solid #0077ff",
  borderRadius: "22px",
  background: "#03070d",
};

const blue = {
  color: "#0077ff",
};

const button = {
  display: "block",
  marginTop: "15px",
  background: "linear-gradient(90deg,#0077ff,#5bb6ff)",
  color: "#000",
  padding: "15px",
  borderRadius: "999px",
  textAlign: "center" as const,
  fontWeight: "900",
  textDecoration: "none",
};

const footer = {
  marginTop: "40px",
  textAlign: "center" as const,
  color: "#8fc7ff",
};