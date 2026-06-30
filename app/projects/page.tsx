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
            title="PowerShell Automation Toolkit"
            description="A growing collection of PowerShell scripts for practicing IT administration, reporting, file management, and future Active Directory automation."
            href="/projects/powershell-automation"
            tags={["PowerShell", "Automation", "Reporting"]}
          />

          <ProjectCard
            title="Docker Environment"
            description="Containerized services, Docker Compose, and self-hosted tools."
            tags={["Docker", "Containers", "Self-hosting"]}
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