import Link from "next/link";

export default function ActiveDirectoryHomeLabPost() {
  return (
    <main className="page">
      <p className="home-kicker">Active Directory Lab</p>

      <h1 className="hero-title">
        Behind the Curtain: Building My First Active Directory Home Lab
      </h1>

      <p className="hero-subtitle">
        How building a small Active Directory lab helped me better understand
        the systems I work with in enterprise IT support.
      </p>

      <div className="button-row">
        <Link href="/projects/active-directory" className="button-secondary">
          View AD Project
        </Link>

        <Link href="/blog" className="button-secondary">
          Back to Blog
        </Link>
      </div>

      <div className="prose section">
        <p>
          Working in enterprise IT, I interact with Active Directory almost every
          day.
        </p>

        <p>
          Whether it is unlocking accounts, troubleshooting access issues,
          resetting passwords, or adding users to security groups, Active
          Directory is involved in a large percentage of the tickets I work on.
          Over time, I became comfortable using the tools, but I realized there
          was something I did not fully understand.
        </p>

        <p>
          I knew how to use Active Directory. I wanted to understand how it
          actually worked. That was the motivation behind building this lab.
        </p>

        <h2>Looking Behind the Curtain</h2>

        <p>
          At work, many of the systems I interact with are already in place. The
          domain controller exists, DNS is configured, Group Policy is already
          managing devices, and user accounts are part of a much larger
          environment.
        </p>

        <p>I wanted to build a small version of that environment myself.</p>

        <p>
          Starting from a blank Windows Server installation forced me to think
          about the pieces that make Active Directory possible instead of simply
          using them. Installing Active Directory Domain Services, configuring
          DNS, creating users and organizational units, and experimenting with
          Group Policy helped connect concepts that previously felt separate.
        </p>

        <p>
          Seeing everything come together made a lot of the work I do every day
          make more sense.
        </p>

        <h2>What I Built</h2>

        <p>For this project, I created a small virtual lab consisting of:</p>

        <ul>
          <li>A Windows Server 2022 virtual machine</li>
          <li>Active Directory Domain Services</li>
          <li>DNS</li>
          <li>A Windows 11 domain-joined client</li>
          <li>Organizational Units</li>
          <li>Test users and security groups</li>
          <li>Several Group Policy Objects for experimentation</li>
        </ul>

        <p>
          The goal was not to recreate a production environment. It was to build
          something small enough to understand while still behaving like a real
          Windows domain.
        </p>

        <h2>One Thing That Stood Out</h2>

        <p>
          One thing I did not fully appreciate before this project was how much
          Active Directory depends on DNS. Before building the lab, DNS felt like
          a separate topic. After troubleshooting domain joins and seeing how the
          server and client communicated, it became clear why so many Active
          Directory issues can trace back to DNS.
        </p>

        <h2>Where This Leads Next</h2>

        <p>
          Building the Active Directory lab also showed me where I want to go
          next.
        </p>

        <p>
          The next project I want to build is a PowerShell Automation Toolkit
          based around this lab. Instead of only using graphical tools to look up
          users, manage groups, or create test accounts, I want to start
          automating common administrative tasks with PowerShell.
        </p>

        <p>
          That feels like a natural next step because it builds directly on the
          environment I already created while helping me develop another skill
          that is widely used in enterprise IT.
        </p>

        <h2>Final Thoughts</h2>

        <p>
          Looking back, this project was not really just about installing Windows
          Server.
        </p>

        <p>
          It was about understanding the technology behind a lot of the work I do
          every day.
        </p>

        <p>
          Now that I have the lab in place, it feels less like the end of one
          project and more like the start of a larger learning path.
        </p>
      </div>
    </main>
  );
}