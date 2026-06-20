export default function Home() {
  return (
    <main style={main}>
      <section style={heroCard}>
        <h1 style={logo}>BAMToolz™</h1>
        <h2 style={blue}>Preserving Presence™</h2>

        <div style={systemBadge}>
          <h2 style={badgeTitle}>◈ Preserving Knowledge ◈</h2>
          <p style={badgeText}>Intelligent Maintenance Systems</p>
        </div>

        <h3>In Every Machine</h3>

        <p>
          AI-powered equipment intelligence for manufacturing, hospitals,
          aerospace, and critical facilities.
        </p>

        <a href="/scanner" style={button}>
          Launch BAM Scan™
        </a>
      </section>

      <section style={card}>
        <h2 style={blue}>Asset Intelligence</h2>
        <p>
          Connect barcodes, QR codes, asset tags, serial plates, and equipment
          IDs.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Hub™</h2>
        <h3>Every Machine Gets a Memory™</h3>
        <p>Equipment Profiles</p>
        <p>Locations</p>
        <p>Manuals & Schematics</p>
        <p>Parts Intelligence</p>
        <p>Repair History</p>
        <p>Technician Knowledge</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Safety™</h2>
        <p>Lockout / Tagout</p>
        <p>Electrical Hazards</p>
        <p>Stored Energy</p>
        <p>Procedures</p>
      </section>

      <footer style={footer}>
        <p>© 2026 BAMToolz™. All Rights Reserved.</p>
        <p>BAM Scan™ • BAM Hub™ • BAM Safety™</p>
        <p>Ball Advanced Maintenance Tools</p>
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#000",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const heroCard = {
  marginTop: "20px",
  border: "1px solid #0077ff",
  borderRadius: "28px",
  padding: "28px",
  background: "linear-gradient(180deg, #04111f, #02050a)",
  boxShadow: "0 0 35px rgba(0,119,255,.35)",
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
  letterSpacing: "1px",
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
  letterSpacing: "1px",
};

const badgeText = {
  marginBottom: 0,
  color: "#8fc7ff",
};

const button = {
  display: "inline-block",
  marginTop: "10px",
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