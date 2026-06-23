export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
        Thomas Cornell
      </h1>

      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        IT Support Engineer | Identity & Access Management (IAM) | Windows Infrastructure
      </p>

      <hr style={{ margin: "30px 0" }} />

      <section>
        <h2>About</h2>
        <p>
          I am an IT professional with experience supporting enterprise environments,
          including Active Directory, Microsoft 365, Okta, and enterprise user management.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Core Skills</h2>
        <ul>
          <li>Active Directory (Users, Groups, GPO, DNS)</li>
          <li>Identity & Access Management (Okta, SailPoint)</li>
          <li>Windows Server & Client Support</li>
          <li>Virtual Machines (VirtualBox, Windows Server, Linux)</li>
          <li>Docker & Containerized Services</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Current Projects</h2>
        <ul>
          <li>Active Directory Home Lab (Windows Server + Windows 11 client)</li>
          <li>Docker Self-Hosting Environment</li>
          <li>IT Automation Scripts (PowerShell)</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>Links</h2>
        <ul>
          <li>GitHub: (add soon)</li>
          <li>Resume: (add soon)</li>
          <li>Home Lab Documentation: (in progress)</li>
        </ul>
      </section>
    </main>
  );
}