export default function ExamplesPage() {
  return (
    <main style={main}>
      <section style={hero}>
        <p style={eyebrow}>BAMLabs™ Prototype Series</p>

        <h1 style={title}>BAMToolz™ Scanner</h1>

        <p style={subtitle}>
          A premium industrial AI scanner concept for equipment intelligence,
          technician guidance, machine memory, and facility safety.
        </p>

        <div style={productCard}>
          <div style={device}>
            <div style={sensorBar}></div>
            <div style={glassScreen}>
              <h2 style={deviceLogo}>BAMToolz™</h2>
              <p style={deviceText}>AI Equipment Scanner</p>
              <div style={smallLine}></div>
              <p style={deviceText}>Scan • Assist • Hub • Safety</p>
            </div>
            <div style={grip}></div>
          </div>
        </div>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Scan™</h2>
        <p>AI equipment recognition for tags, nameplates, panels, motors, and fault screens.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Assist™</h2>
        <p>Guided troubleshooting that asks smart technician follow-up questions.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Hub™</h2>
        <p>Machine memory for repair history, manuals, parts, and technician knowledge.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>BAM Safety™</h2>
        <p>Safety awareness for lockout, stored energy, hazards, and facility protection.</p>
      </section>

      <footer style={footer}>
        <a href="/" style={button}>Back Home</a>
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#071d33,#02060b,#000)",
  color: "#e8f4ff",
  padding: "24px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const hero = {
  maxWidth: "950px",
  margin: "auto",
  textAlign: "center" as const,
};

const eyebrow = {
  color: "#8fc7ff",
  letterSpacing: "3px",
  fontSize: "12px",
  fontWeight: "900",
};

const title = {
  color: "#168cff",
  fontSize: "52px",
  marginBottom: "8px",
};

const subtitle = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#cfe8ff",
};

const productCard = {
  marginTop: "30px",
  padding: "35px",
  border: "1px solid rgba(22,140,255,.5)",
  background: "linear-gradient(180deg,#08131f,#03070d)",
  boxShadow: "0 0 45px rgba(22,140,255,.25)",
};

const device = {
  position: "relative" as const,
  width: "250px",
  height: "460px",
  margin: "auto",
  background: "linear-gradient(145deg,#1b2633,#05070a)",
  border: "2px solid #24384d",
  boxShadow: "0 25px 60px rgba(0,0,0,.7)",
};

const sensorBar = {
  height: "58px",
  background: "linear-gradient(90deg,#05070a,#168cff,#05070a)",
  borderBottom: "2px solid #168cff",
};

const glassScreen = {
  margin: "22px",
  padding: "22px",
  minHeight: "210px",
  background: "linear-gradient(180deg,#02060b,#061626)",
  border: "1px solid #168cff",
  boxShadow: "inset 0 0 30px rgba(22,140,255,.25)",
};

const deviceLogo = {
  color: "#168cff",
  fontSize: "28px",
};

const deviceText = {
  color: "#cfe8ff",
  fontSize: "14px",
};

const smallLine = {
  height: "1px",
  background: "#168cff",
  margin: "18px 0",
};

const grip = {
  position: "absolute" as const,
  bottom: "-110px",
  left: "82px",
  width: "86px",
  height: "120px",
  background: "linear-gradient(180deg,#111,#050505)",
  border: "2px solid #24384d",
};

const card = {
  maxWidth: "950px",
  margin: "24px auto 0",
  padding: "24px",
  background: "rgba(3,7,13,.9)",
  border: "1px solid rgba(22,140,255,.45)",
};

const blue = {
  color: "#168cff",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "140px",
};

const button = {
  display: "inline-block",
  background: "#168cff",
  color: "#000",
  padding: "15px 32px",
  fontWeight: "900",
  textDecoration: "none",
};