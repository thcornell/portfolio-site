import Link from "next/link";

export default function Resume() {
  return (
    <main className="page">
      <section className="resume-hero">
        <p className="home-kicker">Resume</p>

        <h1 className="hero-title">Thomas Cornell</h1>

        <p className="hero-subtitle">
          Service Desk Analyst II with enterprise healthcare IT experience
          supporting users, endpoints, applications, identity/access workflows,
          remote connectivity, Citrix/VDI, Microsoft 365, and technical
          documentation.
        </p>

        <div className="resume-contact-row">
          <span>Milford, CT</span>
          <span>thcornell@gmail.com</span>
          <a href="https://www.linkedin.com/in/thcornell">LinkedIn</a>
        </div>

        <div className="home-actions">
          <Link href="/projects" className="primary-action">
            View Projects
          </Link>

          <Link href="/blog" className="secondary-action">
            Read Blog
          </Link>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section-header">
          <p className="home-kicker">Experience</p>
          <h2>Professional Background</h2>
        </div>

        <div className="resume-timeline">
          <article className="resume-card">
            <div className="resume-card-header">
              <div>
                <h3>Service Desk Analyst II</h3>
                <p>Nuvance Health — Danbury, CT</p>
              </div>

              <span>Oct 2025 – Present</span>
            </div>

            <ul>
              <li>
                Provide remote technical support to a healthcare network of over
                18,000 users, fielding over 40 calls daily, maintaining a 75%
                first-call resolution rate, and exceeding customer satisfaction
                survey expectations.
              </li>
              <li>
                Maintain proper user access and permissions across three Windows
                Active Directory domains, including security groups, OUs,
                department mailboxes, account enables/disables, unlocks, and
                password resets.
              </li>
              <li>
                Use remote support tools to diagnose, resolve, or escalate issues
                involving laptops/desktops, printers, telephones, mobile
                devices, Microsoft 365, Citrix/VDI sessions, VPN/network
                connectivity, and software updates.
              </li>
              <li>
                Support remote access using Okta by assisting with MFA resets,
                reviewing logs, troubleshooting login issues, verifying identity,
                and helping users regain secure access.
              </li>
              <li>
                Support virtual desktop infrastructure and Citrix-hosted
                applications by performing software installations and security
                updates, resolving stuck sessions, and monitoring performance to
                maintain secure, high-availability access.
              </li>
              <li>
                Communicate and document issues using Ivanti’s ITSM ticketing
                system to track, escalate, prioritize, and follow up on support
                requests.
              </li>
              <li>
                Improve team efficiency by documenting procedures and maintaining
                up-to-date knowledge base articles aligned with IT best
                practices.
              </li>
            </ul>
          </article>

          <article className="resume-card">
            <div className="resume-card-header">
              <div>
                <h3>Service Desk Analyst I</h3>
                <p>Nuvance Health — Danbury, CT</p>
              </div>

              <span>Oct 2022 – Oct 2025</span>
            </div>

            <p>
              Earlier role in the same enterprise support environment, focused
              on frontline troubleshooting, ticket resolution, remote support,
              endpoint issues, account access support, and escalation to
              infrastructure, security, IAM, and application teams.
            </p>
          </article>

          <article className="resume-card">
            <div className="resume-card-header">
              <div>
                <h3>Senior Sailing Instructor</h3>
                <p>Chelsea Yacht Club — Chelsea, NY</p>
              </div>

              <span>Jun 2016 – Oct 2022</span>
            </div>
          </article>

          <article className="resume-card">
            <div className="resume-card-header">
              <div>
                <h3>Manager</h3>
                <p>Lake Murray Axe Throwing — Irmo, SC</p>
              </div>

              <span>Sep 2020 – May 2022</span>
            </div>
          </article>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section-header">
          <p className="home-kicker">Skills</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="resume-skills-grid">
          <div className="resume-card">
            <h3>Operating Systems & Software</h3>
            <p>
              Windows 7/10/11, macOS, Microsoft Office 365, Microsoft Teams,
              Citrix, SailPoint, Okta, Azure, VMware, Ivanti Endpoint
              Management, RCViewer, MSRA, Delinea, Cerner.
            </p>
          </div>

          <div className="resume-card">
            <h3>Identity & Access Support</h3>
            <p>
              Active Directory user support, security groups, OUs, password
              resets, account unlocks, account enable/disable support, Okta MFA
              resets, login troubleshooting, and access verification.
            </p>
          </div>

          <div className="resume-card">
            <h3>Hardware & Endpoint Support</h3>
            <p>
              PCs, laptops, Dell Wyse thin clients, telephones, printers,
              scanners, cell phones, endpoint troubleshooting, software updates,
              and remote diagnostics.
            </p>
          </div>

          <div className="resume-card">
            <h3>Networking & Remote Access</h3>
            <p>
              VPN and remote connectivity, Zscaler, NetScaler, network
              troubleshooting, Meraki, Citrix/VDI sessions, and remote access
              support.
            </p>
          </div>

          <div className="resume-card">
            <h3>Documentation & ITSM</h3>
            <p>
              Ivanti ITSM ticketing, issue documentation, escalation workflows,
              prioritization, follow-up, internal procedures, and knowledge base
              article maintenance.
            </p>
          </div>

          <div className="resume-card">
            <h3>Portfolio Focus Areas</h3>
            <p>
              Active Directory labs, virtualization, Docker, PowerShell,
              networking, technical notes, and hands-on infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section-header">
          <p className="home-kicker">Education</p>
          <h2>Education</h2>
        </div>

        <div className="resume-card">
          <div className="resume-card-header">
            <div>
              <h3>University of South Carolina</h3>
              <p>Columbia, SC</p>
            </div>

            <span>May 2022</span>
          </div>

          <p>
            Bachelor of Arts: Criminology and Criminal Justice
            <br />
            Cognate: Computer Science
          </p>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section-header">
          <p className="home-kicker">Beyond the Resume</p>
          <h2>Projects & Technical Notes</h2>
        </div>

        <div className="resume-card">
          <p>
            This site expands on my resume by documenting hands-on technical
            projects, troubleshooting notes, and systems I am learning or
            building. The Projects and Blog sections show practical work beyond
            traditional resume bullets.
          </p>

          <Link href="/projects" className="link-accent">
            View technical projects →
          </Link>
        </div>
      </section>
    </main>
  );
}