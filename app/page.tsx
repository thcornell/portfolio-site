import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section>
        <p className="eyebrow">IT Portfolio / Technical Knowledge Base</p>

        <h1 className="hero-title">Thomas Cornell</h1>

        <p className="hero-subtitle">
          IT Support Engineer focused on Identity & Access Management,
          Active Directory, Windows infrastructure, virtualization, Docker,
          and automation.
        </p>
      </section>

      <section className="section">
        <h2>System Overview</h2>

        <div className="grid">
          <div className="card">
            <span className="status-pill">Active</span>
            <h3>Identity</h3>
            <p>Active Directory, Okta, SailPoint, and user lifecycle support.</p>
          </div>

          <div className="card">
            <span className="status-pill">Active</span>
            <h3>Infrastructure</h3>
            <p>Windows Server, Windows 11 clients, DNS, and virtual machines.</p>
          </div>

          <div className="card">
            <span className="status-pill status-muted">Building</span>
            <h3>Automation</h3>
            <p>PowerShell, repeatable workflows, documentation, and scripts.</p>
          </div>

          <div className="card">
            <span className="status-pill status-muted">Planned</span>
            <h3>Containers</h3>
            <p>Docker, Docker Compose, self-hosted tools, and monitoring.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Featured Work</h2>

        <div className="card">
          <span className="status-pill">In Progress</span>
          <h3>Active Directory Home Lab</h3>

          <p>
            A Windows Server 2022 lab environment for practicing domain
            services, DNS, user/group management, Group Policy concepts, and
            client domain joins.
          </p>

          <Link href="/projects/active-directory" className="link-accent">
            View project →
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Current Build Status</h2>

        <div className="card">
          <ul>
            <li>Next.js portfolio deployed through GitHub and Vercel</li>
            <li>Projects section created</li>
            <li>Active Directory project documentation started</li>
            <li>Resume section scaffolded</li>
          </ul>
        </div>
      </section>
    </main>
  );
}