export default function Home() {
  return (
    <main style={styles.page}>

      <section style={styles.hero}>

        <img
          src="/logo.png"
          alt="BAMToolz Logo"
          style={styles.logo}
        />

        <h1 style={styles.title}>
          BAMToolz™
        </h1>

        <h2 style={styles.subtitle}>
          Ball Advanced Management
        </h2>

        <p style={styles.text}>
          AI Industrial Intelligence Platform built by BAMLabs™.
          Scan equipment. Assist technicians. Save machine knowledge.
          Protect people and facilities.
        </p>

        <img
          src="/bam-scanner.png"
          alt="BAMToolz AI Industrial Scanner"
          style={styles.scanner}
        />

        <div style={styles.card}>
          <h2>BAM Scan™</h2>
          <p>
            Identify machines, read equipment tags,
            capture manuals, parts, and history.
          </p>
        </div>

        <div style={styles.card}>
          <h2>BAM Assist™</h2>
          <p>
            AI guided troubleshooting with technician
            questions and repair support.
          </p>
        </div>

        <div style={styles.card}>
          <h2>BAM Hub™</h2>
          <p>
            Machine memory storing repairs,
            knowledge, manuals, and experience.
          </p>
        </div>

        <div style={styles.card}>
          <h2>BAM Safety™</h2>
          <p>
            Safety awareness, LOTO reminders,
            and facility protection.
          </p>
        </div>

        <footer style={styles.footer}>
          © BAMLabs™ | Ball Advanced Management
          <br />
          Support: BAMToolzsupport@gmail.com
        </footer>

      </section>

    </main>
  );
}


const styles = {

  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "white",
    padding: "25px",
    fontFamily: "Arial",
  },

  hero: {
    maxWidth: "950px",
    margin: "auto",
    textAlign: "center" as const,
  },

  logo: {
    width: "130px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "48px",
    color: "#168cff",
    marginBottom: "5px",
  },

  subtitle: {
    fontSize: "22px",
    color: "#cccccc",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "25px",
  },

  scanner: {
    width: "100%",
    borderRadius: "25px",
    border: "1px solid #168cff",
    boxShadow:
      "0 0 45px rgba(22,140,255,.45)",
    marginBottom: "35px",
  },

  card: {
    background: "#111",
    border:
      "1px solid rgba(22,140,255,.5)",
    borderRadius: "20px",
    padding: "20px",
    marginBottom: "18px",
  },

  footer: {
    marginTop: "40px",
    color: "#888",
    fontSize: "14px",
  },
};