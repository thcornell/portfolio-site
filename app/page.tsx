import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <section style={{ marginBottom: "40px" }}>
        <p style={{ color: "#666", marginBottom: "10px" }}>
          IT Portfolio / Technical Knowledge Base
        </p>

        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Thomas Cornell
        </h1>

        <p style={{ fontSize: "20px", color: "#444", maxWidth: "800px" }}>
          IT Support Engineer focused on Identity & Access Management,
          Active Directory, Windows infrastructure, virtualization, Docker,
          and automation.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>System Overview</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h3>Identity</h3>
            <p>Active Directory, Okta, SailPoint, user lifecycle support.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h3>Infrastructure</h3>
            <p>Windows Server, Windows 11 clients, DNS, virtual machines.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h3>Automation</h3>
            <p>PowerShell, repeatable workflows, documentation, scripts.</p>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h3>Containers</h3>
            <p>Docker, Docker Compose, self-hosted tools, monitoring.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Featured Work</h2>

        <div style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}>
          <h3>Active Directory Home Lab</h3>
          <p>
            A Windows Server 2022 lab environment for practicing domain services,
            DNS, user/group management, Group Policy concepts, and client domain joins.
          </p>

          <Link href="/projects/active-directory">
            View project →
          </Link>
        </div>
      </section>

      <section>
        <h2>Current Build Status</h2>

        <ul>
          <li>Next.js portfolio deployed through GitHub and Vercel</li>
          <li>Projects section created</li>
          <li>Active Directory project documentation started</li>
          <li>Resume section scaffolded</li>
        </ul>
      </section>
    </main>
  );
}