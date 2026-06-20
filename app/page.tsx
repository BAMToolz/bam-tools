export default function Home() {
  return (
    <main style={main}>
      <section style={heroCard}>
        <p style={topLine}>BAM™ • BALL ADVANCED MANAGEMENT</p>

        <h1 style={logo}>BAMToolz™</h1>

        <h2 style={blue}>Industrial Intelligence Platform</h2>

        <div style={systemBadge}>
          <h2 style={badgeTitle}>◈ Preserving Presence ◈</h2>
          <p style={badgeText}>
            Asset intelligence. Knowledge systems. Machine memory.
          </p>
        </div>

        <p>
          Built by BAMLabs™ for manufacturing, hospitals, aerospace, and
          critical facilities.
        </p>

        <div>
          <a href="/scanner" style={button}>
            Launch BAM Intelligence™
          </a>

          <br />
          <br />

          <a href="/examples" style={button}>
            View BAM Examples™
          </a>

          <br />
          <br />

          <a href="/contact" style={button}>
            Contact Support
          </a>
        </div>
      </section>

      <section style={card}>
        <h2 style={blue}>BAMLabs™</h2>
        <p>Research • AI • Innovation • Future Technology</p>
        <p>Creating the intelligence behind BAMToolz™.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAMToolz™</h2>
        <p>BAM Scan™ • BAM Assist™ • BAM Hub™ • BAM Safety™</p>
        <p>Every asset gets knowledge, history, and memory.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAMSystems™</h2>
        <p>Automation • Controls • Integration • Smart Facilities</p>
        <p>Where industrial intelligence connects to the real world.</p>
      </section>

      <footer style={footer}>
        <p>© 2026 Ball Advanced Management™. All Rights Reserved.</p>
        <p>BAMLabs™ • BAMToolz™ • BAMSystems™</p>
        <p>BAMToolzsupport@gmail.com</p>
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#062444,#020711,#000)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const heroCard = {
  marginTop: "20px",
  border: "1px solid #0077ff",
  borderRadius: "28px",
  padding: "28px",
  background: "linear-gradient(180deg,#04111f,#02050a)",
  boxShadow: "0 0 35px rgba(0,119,255,.35)",
};

const topLine = {
  color: "#8fc7ff",
  fontSize: "12px",
  letterSpacing: "3px",
  fontWeight: "900",
};

const card = {
  marginTop: "28px",
  border: "1px solid #0077ff",
  borderRadius: "24px",
  padding: "24px",
  background: "#03070d",
};

const logo = {
  color: "#0077ff",
  fontSize: "46px",
  fontStyle: "italic",
};

const blue = {
  color: "#0077ff",
};

const systemBadge = {
  margin: "22px 0",
  padding: "16px",
  border: "1px solid #0077ff",
  borderRadius: "18px",
  background: "rgba(0,119,255,.08)",
};

const badgeTitle = {
  margin: 0,
  color: "#e8f4ff",
};

const badgeText = {
  color: "#8fc7ff",
};

const button = {
  display: "inline-block",
  background: "#0077ff",
  color: "#000",
  padding: "16px 30px",
  borderRadius: "999px",
  fontWeight: "900",
  textDecoration: "none",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "50px",
  color: "#8fc7ff",
  fontWeight: "bold",
};