export default function Home() {
  return (
    <main style={main}>
      <section style={card}>
        <h1 style={logo}>BAMToolz™</h1>

        <h2 style={blue}>Preserving Presence™</h2>

        <div style={quietBadge}>
          <h2 style={quietText}>Quiet Genius At Work™</h2>
        </div>

        <h3>In Every Machine</h3>

        <p>
          AI-powered equipment intelligence for manufacturing, hospitals,
          aerospace, and critical facilities.
        </p>

        <a href="/scanner" style={button}>
          📸 Launch BAM Scan™
        </a>
      </section>

      <section style={card}>
        <h2>🏷 Existing Tag Integration</h2>
        <p>
          Connect existing barcodes, QR codes, asset tags, serial plates, and
          equipment IDs.
        </p>
        <h3 style={blue}>Don’t replace facility knowledge. Unlock it.</h3>
      </section>

      <section style={card}>
        <h2 style={blue}>🏭 BAM Hub™</h2>
        <h3>Every Machine Gets a Memory™</h3>
        <p>⚙ Equipment Profiles</p>
        <p>📍 Locations</p>
        <p>📚 Manuals & Schematics</p>
        <p>🔧 Parts Intelligence</p>
        <p>🛠 Repair History</p>
        <p>🧠 Technician Knowledge</p>
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
  fontFamily: "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
};

const card = {
  marginTop: "35px",
  border: "2px solid #0077ff",
  borderRadius: "24px",
  padding: "25px",
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

const quietBadge = {
  margin: "20px 0",
  padding: "14px",
  border: "2px solid #0077ff",
  borderRadius: "20px",
  boxShadow: "0 0 20px #0077ff",
};

const quietText = {
  margin: 0,
  color: "#e8f4ff",
  fontStyle: "italic",
};

const button = {
  display: "inline-block",
  background: "#0077ff",
  color: "#000",
  padding: "17px 32px",
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