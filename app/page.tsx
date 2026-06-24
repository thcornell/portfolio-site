export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <section style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Thomas Cornell
        </h1>

        <p style={{ fontSize: "20px", color: "#444" }}>
          IT Support Engineer | Identity & Access Management | Windows Infrastructure
        </p>

        <p style={{ maxWidth: "750px", lineHeight: "1.6" }}>
          This portfolio documents my hands-on work with Active Directory,
          virtualization, Docker, automation, and enterprise IT support concepts.
          The goal is to showcase not just what I know, but how I build,
          troubleshoot, and document technical systems.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Focus Areas</h2>

        <ul>
          <li>Active Directory and Windows Server administration</li>
          <li>Identity and Access Management concepts</li>
          <li>Virtual machines and lab environments</li>
          <li>Docker and self-hosted services</li>
          <li>PowerShell and IT automation</li>
        </ul>
      </section>

      <section>
        <h2>Current Build Status</h2>

        <ul>
          <li>Portfolio website deployed with Next.js, GitHub, and Vercel</li>
          <li>Projects dashboard created</li>
          <li>Active Directory project documentation in progress</li>
          <li>Resume section planned</li>
        </ul>
      </section>
    </main>
  );
}