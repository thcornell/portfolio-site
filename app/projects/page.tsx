import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="page">
      <p className="home-kicker">Technical Work</p>

      <h1 className="hero-title">Projects</h1>

      <p className="hero-subtitle">
        Hands-on technical projects focused on infrastructure, identity,
        virtualization, automation, troubleshooting, and systems documentation.
      </p>

      <section className="section">
        <div className="grid">
          <ProjectCard
            title="Active Directory Home Lab"
            description="Windows Server 2022 domain controller, DNS, users, groups, Group Policy concepts, and Windows 11 domain join testing."
            href="/projects/active-directory"
            tags={["Active Directory", "Windows Server", "VirtualBox"]}
          />

          <ProjectCard
            title="Docker Environment"
            description="Containerized services, Docker Compose, and self-hosted tools."
            tags={["Docker", "Containers", "Self-hosting"]}
          />

          <ProjectCard
            title="PowerShell Automation"
            description="Scripts for IT administration, reporting, and repeatable system tasks."
            tags={["PowerShell", "Automation", "Admin Tasks"]}
          />

          <ProjectCard
            title="Networking Notes"
            description="DNS, DHCP, VPN, troubleshooting, and lab networking documentation."
            tags={["Networking", "DNS", "Troubleshooting"]}
          />
        </div>
      </section>
    </main>
  );
}