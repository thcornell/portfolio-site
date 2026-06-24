import Link from "next/link";

export default function Lab() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Home Lab</h1>

      <p>
        A structured environment for practicing infrastructure, identity,
        virtualization, automation, and containerization.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <section style={{ display: "grid", gap: "20px" }}>
        <Link href="/lab/active-directory" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ border: "1px solid #ddd", padding: "20px" }}>
            <h2>🖥️ Active Directory Lab</h2>
            <p>
              Windows Server 2022 domain controller, DNS, users, groups,
              GPO concepts, and Windows 11 domain join testing.
            </p>
          </div>
        </Link>

        <div style={{ border: "1px solid #ddd", padding: "20px", opacity: 0.6 }}>
          <h2>🐳 Docker Lab</h2>
          <p>Containerized services and self-hosted tools. Coming soon.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", opacity: 0.6 }}>
          <h2>📜 PowerShell Automation</h2>
          <p>Scripts for IT administration and reporting. Coming soon.</p>
        </div>
      </section>
    </main>
  );
}