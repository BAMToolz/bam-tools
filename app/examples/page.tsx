export default function ExamplesPage() {
  return (
    <main style={main}>
      <section style={heroCard}>
        <p style={topLine}>BAM™ • BALL ADVANCED MANAGEMENT</p>
        <h1 style={logo}>BAMToolz™ Examples</h1>
        <h2 style={blue}>How Industrial Intelligence Works</h2>

        <p>
          BAMToolz™ turns equipment photos, asset tags, manuals, and technician
          knowledge into organized machine intelligence.
        </p>

        <a href="/" style={button}>← Back Home</a>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ Example 1: Motor Nameplate Scan</h2>
        <p>
          A technician scans a motor tag. BAM Scan™ reads voltage, horsepower,
          model, serial number, RPM, and manufacturer data.
        </p>
        <p>
          Result: faster part lookup, safer troubleshooting, and cleaner
          equipment records.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ Example 2: Hospital Asset Tracking</h2>
        <p>
          A hospital scans a pump, bed, cart, or critical facility asset.
          BAM Hub™ stores location, repair status, assigned technician, and
          return-to-service notes.
        </p>
        <p>
          Result: the facility knows what is down, where it is, and when it
          returns.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ Example 3: Machine Memory</h2>
        <p>
          A senior technician adds notes after fixing a recurring issue.
          BAM Hub™ saves the repair history so the next technician does not
          start from zero.
        </p>
        <p>
          Result: technician knowledge stays with the machine.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ Example 4: Safety Before Repair</h2>
        <p>
          Before opening a panel or servicing equipment, BAM Safety™ highlights
          lockout/tagout, stored energy, electrical hazards, and required checks.
        </p>
        <p>
          Result: protect the technician and protect the facility.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ Example 5: BAMSystems™ Integration</h2>
        <p>
          Once BAMToolz™ proves the equipment data, BAMSystems™ can connect
          controls, sensors, PLC data, automation, and facility systems.
        </p>
        <p>
          Result: industrial intelligence moves from app to infrastructure.
        </p>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #062444 0%, #020711 45%, #000 100%)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const heroCard = {
  border: "1px solid #0077ff",
  borderRadius: "28px",
  padding: "28px",
  background: "linear-gradient(180deg, #04111f, #02050a)",
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
  fontSize: "42px",
  fontStyle: "italic",
};

const blue = {
  color: "#0077ff",
};

const button = {
  display: "inline-block",
  marginTop: "10px",
  background: "#0077ff",
  color: "#000",
  padding: "14px 26px",
  borderRadius: "999px",
  fontWeight: "900",
  textDecoration: "none",
};