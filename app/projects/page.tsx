import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Projects</h1>

      <p style={{ maxWidth: "750px", lineHeight: "1.6" }}>
        Technical projects focused on infrastructure, identity, virtualization,
        automation, and systems documentation.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <section style={{ display: "grid", gap: "20px" }}>
        <ProjectCard
          title="Active Directory Home Lab"
          description="Windows Server 2022 domain controller, DNS, users, groups, Group Policy concepts, and Windows 11 domain join testing."
          href="/projects/active-directory"
          status="Active"
        />

        <ProjectCard
          title="Docker Environment"
          description="Containerized services, Docker Compose, and self-hosted tools."
          status="Coming Soon"
        />

        <ProjectCard
          title="PowerShell Automation"
          description="Scripts for IT administration, reporting, and repeatable system tasks."
          status="Coming Soon"
        />

        <ProjectCard
          title="Networking Notes"
          description="DNS, DHCP, VPN, troubleshooting, and lab networking documentation."
          status="Coming Soon"
        />
      </section>
    </main>
  );
}