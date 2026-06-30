import Image from "next/image";
import Link from "next/link";

const configuredItems = [
  "Installed VirtualBox on the host machine",
  "Created a Windows Server 2022 virtual machine",
  "Created a Windows 11 virtual machine",
  "Installed Active Directory Domain Services",
  "Promoted the server to a domain controller",
  "Configured DNS for the domain",
  "Created organizational units",
  "Created test users",
  "Created security groups",
  "Joined the Windows 11 client to the domain",
  "Logged into the Windows 11 client with a domain user",
  "Created or tested a Group Policy Object",
  "Troubleshot DNS, domain join, or login issues",
];

const skills = [
  "Virtual machine setup and management",
  "Windows Server 2022 administration",
  "Active Directory Domain Services setup",
  "DNS configuration and troubleshooting",
  "Windows domain join process",
  "User, group, and OU management",
  "Basic Group Policy testing",
  "Technical documentation",
];

const nextImprovements = [
  "Add more screenshots as the lab grows",
  "Document specific Group Policy examples",
  "Add a second Windows client for additional testing",
  "Practice shared folder and mapped drive configuration",
  "Add PowerShell examples for user and group management",
  "Create a more polished visual network diagram",
  "Continue documenting troubleshooting scenarios",
];

const screenshots = [
  {
    title: "Server Manager — AD DS and DNS Roles",
    src: "/images/ad-lab/01-server-manager-ad-ds-dns-roles.png",
    alt: "Server Manager dashboard showing AD DS and DNS roles",
    caption:
      "Server Manager dashboard showing AD DS and DNS roles installed on the Windows Server 2022 domain controller.",
  },
  {
    title: "Active Directory Users and Computers — Lab Users OU",
    src: "/images/ad-lab/02-active-directory-users-and-computers-lab-users-ou.png",
    alt: "Active Directory Users and Computers showing lab users",
    caption:
      "Active Directory Users and Computers showing the homelab.local domain structure, organizational units, and test user accounts.",
  },
  {
    title: "DNS Manager — Forward Lookup Zone",
    src: "/images/ad-lab/03-dns-manager-forward-lookup-zone.png",
    alt: "DNS Manager showing the homelab.local forward lookup zone",
    caption:
      "DNS Manager showing the homelab.local forward lookup zone and domain-related DNS records.",
  },
  {
    title: "Group Policy Management — Custom GPOs",
    src: "/images/ad-lab/04-group-policy-management-custom-gpos.png",
    alt: "Group Policy Management Console showing custom GPOs",
    caption:
      "Group Policy Management Console showing custom GPOs created for lab testing, including distribution, icon, logging, password, and wallpaper policies.",
  },
  {
    title: "PowerShell — Get-ADUser Query",
    src: "/images/ad-lab/05-powershell-get-aduser-query.png",
    alt: "PowerShell output showing Get-ADUser query",
    caption:
      "PowerShell output using Get-ADUser to list Active Directory user accounts and enabled status.",
  },
];

export default function ActiveDirectoryProject() {
  return (
    <main className="page">
      <p className="home-kicker">Project Case Study</p>

      <h1 className="hero-title">Active Directory Home Lab</h1>

      <p className="hero-subtitle">
        A virtual Windows domain environment built to practice Active Directory,
        DNS, domain joins, user and group management, and Group Policy basics.
      </p>

      <div className="button-row">
        <Link href="/projects" className="button-secondary">
          Back to Projects
        </Link>

        <Link href="/blog" className="button-secondary">
          Read Blog
        </Link>
      </div>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Overview</p>
          <h2>Why I built this lab</h2>
        </div>

        <div className="prose">
          <p>
            This project documents a small Active Directory lab built with
            VirtualBox, Windows Server 2022, and a Windows 11 client. The goal
            was to practice core Windows domain concepts including Active
            Directory Domain Services, DNS, domain joins, user and group
            management, and Group Policy basics.
          </p>

          <p>
            Because many of the access and endpoint issues I support at work
            involve Active Directory in some way, I wanted to build a lab
            environment where I could better understand how the underlying
            pieces fit together. This gives me a safe place to test, document,
            and troubleshoot concepts that connect directly to enterprise IT
            support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Project Goal</p>
          <h2>What this lab is meant to practice</h2>
        </div>

        <div className="plain-card">
          <p>
            The goal of this lab was to build a small Windows domain environment
            from the ground up using virtual machines. I wanted to better
            understand how a domain controller, DNS, and a Windows client work
            together in a basic enterprise-style setup.
          </p>
        </div>

        <div className="grid" style={{ marginTop: "22px" }}>
          <div className="card">
            <h2>Core goals</h2>

            <ul>
              <li>Create and manage a virtual lab environment using VirtualBox</li>
              <li>Build a small Windows domain environment</li>
              <li>Practice Windows Server 2022 domain controller setup</li>
              <li>Understand how DNS supports Active Directory</li>
              <li>Join a Windows 11 client to the domain</li>
              <li>Practice basic user, group, and policy management</li>
              <li>Document the process like an internal IT knowledge base</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Environment</p>
          <h2>Lab setup</h2>
        </div>

        <div className="grid">
          <div className="card">
            <p className="feature-type">Host Machine</p>
            <h2>Lenovo ThinkCentre</h2>
            <p>Physical desktop used to run the virtual lab environment.</p>
          </div>

          <div className="card">
            <p className="feature-type">Virtualization</p>
            <h2>VirtualBox</h2>
            <p>Used to create and manage the server and client virtual machines.</p>
          </div>

          <div className="card">
            <p className="feature-type">Server VM</p>
            <h2>Windows Server 2022</h2>
            <p>Configured as the domain controller for the lab environment.</p>
          </div>

          <div className="card">
            <p className="feature-type">Client VM</p>
            <h2>Windows 11</h2>
            <p>Used as the domain-joined workstation for testing.</p>
          </div>

          <div className="card">
            <p className="feature-type">Core Server Roles</p>
            <h2>AD DS and DNS</h2>
            <p>
              Active Directory Domain Services and DNS provide the foundation
              for the Windows domain.
            </p>
          </div>

          <div className="card">
            <p className="feature-type">Management Areas</p>
            <h2>Users, Groups, OUs, and Policy</h2>
            <p>
              The lab focuses on basic domain administration and Group Policy
              concepts.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Lab Architecture</p>
          <h2>How the environment is organized</h2>
        </div>

        <div className="prose">
          <pre>
            <code>{`Windows 10 Host
└── VirtualBox
    ├── Windows Server 2022
    │   ├── Active Directory Domain Services
    │   └── DNS
    └── Windows 11 Client
        └── Domain-joined workstation`}</code>
          </pre>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Screenshots / Evidence</p>
          <h2>Lab configuration proof</h2>
        </div>

        <div className="screenshot-grid">
          {screenshots.map((screenshot) => (
            <figure className="screenshot-card" key={screenshot.src}>
              <div className="screenshot-image-wrap">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 1100px"
                  className="screenshot-image"
                />
              </div>

              <figcaption>
                <h3>{screenshot.title}</h3>
                <p>{screenshot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Configuration</p>
          <h2>What I configured</h2>
        </div>

        <div className="card">
          <ul>
            {configuredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Skills Demonstrated</p>
          <h2>Technical areas practiced</h2>
        </div>

        <div className="grid">
          {skills.map((skill) => (
            <div className="card" key={skill}>
              <h2>{skill}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Next Improvements</p>
          <h2>How I plan to keep building on this lab</h2>
        </div>

        <div className="card">
          <ul>
            {nextImprovements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}