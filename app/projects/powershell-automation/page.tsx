import Link from "next/link";

const plannedScripts = [
  {
    title: "File Cleanup Script",
    description:
      "Practice scanning folders, identifying file types, moving files into organized directories, and logging actions.",
  },
  {
    title: "CSV Report Generator",
    description:
      "Use PowerShell to read structured data, format output, and export reports for review.",
  },
  {
    title: "Folder Inventory Report",
    description:
      "Generate a report of files, folders, sizes, and modified dates to practice basic system inventory tasks.",
  },
  {
    title: "Log Search Script",
    description:
      "Search text-based logs for keywords, timestamps, or error messages and return useful results.",
  },
  {
    title: "Active Directory User Summary",
    description:
      "Eventually connect this project to the AD lab by querying user account details, group membership, and enabled status.",
  },
];

const skills = [
  "PowerShell scripting fundamentals",
  "Variables, loops, and conditionals",
  "Working with files and folders",
  "Importing and exporting CSV data",
  "Writing reusable functions",
  "Error handling and validation",
  "Basic reporting and documentation",
  "Future Active Directory automation",
];

export default function PowerShellAutomationProject() {
  return (
    <main className="page">
      <p className="home-kicker">Project Case Study</p>

      <h1 className="hero-title">PowerShell Automation Toolkit</h1>

      <p className="hero-subtitle">
        A growing collection of PowerShell scripts for practicing IT
        administration, reporting, file management, and future Active Directory
        automation.
      </p>

      <div className="button-row">
        <Link href="/projects" className="button-secondary">
          Back to Projects
        </Link>

        <Link href="/projects/active-directory" className="button-secondary">
          View AD Lab
        </Link>
      </div>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Overview</p>
          <h2>Why I’m building this toolkit</h2>
        </div>

        <div className="prose">
          <p>
            This project is a planned collection of small PowerShell scripts
            built to practice automation concepts that are useful in IT support,
            systems administration, and identity-related troubleshooting.
          </p>

          <p>
            After building my Active Directory home lab, I wanted a natural next
            step that would help me move beyond only using graphical tools. The
            goal is to start with simple scripts for file management and
            reporting, then build toward scripts that interact with Active
            Directory in the lab environment.
          </p>

          <p>
            I am treating this as both a learning project and a documentation
            project. Each script should have a clear purpose, readable code,
            comments where needed, and notes explaining what I learned while
            building it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Project Goal</p>
          <h2>What this project is meant to practice</h2>
        </div>

        <div className="plain-card">
          <p>
            The goal is to build practical PowerShell scripts that solve small,
            realistic IT tasks. Instead of trying to create one large script, I
            want this project to grow as a toolkit of focused examples that can
            be improved over time.
          </p>
        </div>

        <div className="grid" style={{ marginTop: "22px" }}>
          <div className="card">
            <h2>Core goals</h2>

            <ul>
              <li>Practice PowerShell fundamentals through real examples</li>
              <li>Automate small, repeatable administrative tasks</li>
              <li>Generate readable reports from files, folders, and CSV data</li>
              <li>Improve scripting confidence before moving into AD cmdlets</li>
              <li>Document each script like an internal IT knowledge base item</li>
              <li>Eventually connect the toolkit to the Active Directory lab</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Planned Scripts</p>
          <h2>What I plan to build first</h2>
        </div>

        <div className="grid">
          {plannedScripts.map((script) => (
            <div className="card" key={script.title}>
              <h2>{script.title}</h2>
              <p>{script.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Connection to AD Lab</p>
          <h2>How this builds on the Active Directory project</h2>
        </div>

        <div className="prose">
          <p>
            The Active Directory lab gave me a controlled environment for
            learning how users, groups, DNS, domain joins, and Group Policy fit
            together. This PowerShell project is the next step because it gives
            me a way to interact with those systems programmatically.
          </p>

          <p>
            My first scripts can be built without relying on the lab being
            online. Later, once the AD environment is available, I want to add
            scripts that query lab users, summarize group membership, export
            reports, and create test accounts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="home-kicker">Skills Demonstrated</p>
          <h2>Technical areas this project will develop</h2>
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
          <p className="home-kicker">Next Step</p>
          <h2>First script to build</h2>
        </div>

        <div className="card">
          <h2>File Cleanup Script</h2>

          <p>
            The first script I plan to build is a simple file cleanup tool. It
            will scan a folder, identify file types, create destination folders
            if needed, move files into the correct locations, and log what
            changed.
          </p>

          <p>
            This is a good starting point because it practices core PowerShell
            concepts without requiring Active Directory or a running server VM.
          </p>
        </div>
      </section>
    </main>
  );
}