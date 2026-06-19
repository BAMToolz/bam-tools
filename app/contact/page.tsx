export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#e8f4ff",
        padding: "28px",
        fontFamily: "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
      }}
    >
      <h1 style={{ color: "#0077ff" }}>Contact BAMToolz™</h1>

      <p>
        For support, demos, partnerships, or early facility conversations,
        contact BAMToolz™.
      </p>

      <a
        href="mailto:bamtoolz@gmail.com?subject=BAMToolz%20Contact"
        style={{
          display: "inline-block",
          background: "#0077ff",
          color: "#000",
          padding: "16px 28px",
          borderRadius: "999px",
          fontWeight: "900",
          textDecoration: "none",
          marginTop: "20px",
        }}
      >
        Email BAMToolz™
      </a>

      <p style={{ marginTop: "35px" }}>
        Built by maintenance. For maintenance.
      </p>

      <a href="/" style={{ color: "#0077ff", fontWeight: "900" }}>
        ← Back Home
      </a>
    </main>
  );
}