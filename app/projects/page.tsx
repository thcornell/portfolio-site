export default function Projects() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Projects Dashboard</h1>

      <p>
        A collection of infrastructure, identity, and automation projects
        built in my home lab and IT environment.
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* PROJECT CARDS */}
      <section style={{ display: "grid", gap: "20px" }}>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>🖥️ Active Directory Home Lab</h2>
          <p>Windows Server 2022 domain with Windows 11 client integration.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>🐳 Docker Environment</h2>
          <p>Self-hosted services and containerized applications.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h2>📜 PowerShell Automation</h2>
          <p>Scripts for system tasks and administrative automation.</p>
        </div>

      </section>
    </main>
  );
}