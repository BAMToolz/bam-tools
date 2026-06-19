export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">PROTOTYPE LIVE</div>

        <h1>BAMToolz</h1>
        <p className="subtitle">Ball Advanced Maintenance Tools</p>

        <h2>AI Maintenance Intelligence</h2>
        <p className="description">
          Scan equipment tags, identify machines, find parts, store manuals,
          and build better maintenance history.
        </p>

        <a className="scanButton" href="/scan">
          📸 SCAN EQUIPMENT
        </a>
      </section>

      <section className="cards">
        <div className="card">
          <h3>⚙️ Equipment ID</h3>
          <p>Read nameplates, tags, motors, panels, and machine labels.</p>
        </div>

        <div className="card">
          <h3>🔧 Parts Finder</h3>
          <p>Build spare parts lists from photos and maintenance notes.</p>
        </div>

        <div className="card">
          <h3>📚 Manuals</h3>
          <p>Keep machine manuals and troubleshooting info in one place.</p>
        </div>

        <div className="card">
          <h3>⚡ Controls Help</h3>
          <p>Support for PLCs, VFDs, sensors, wiring, and fault tracing.</p>
        </div>
      </section>

      <footer>Built by maintenance. For maintenance.</footer>
    </main>
  );
}
