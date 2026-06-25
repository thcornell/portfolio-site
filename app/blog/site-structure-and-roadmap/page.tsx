export default function SiteStructureAndRoadmapPost() {
  return (
    <main className="page">
      <p className="home-kicker">Portfolio Build Notes</p>

      <h1 className="hero-title">
        From Portfolio Website to Technical Knowledge Base
      </h1>

      <div className="prose">
        <p>
          When I started this project, my original goal was to build a personal
          website that I could add to my resume.
        </p>

        <p>
          As I worked through the setup, the project started becoming something
          more useful than a basic portfolio. Instead of just creating a page
          with my name, resume, and a few links, I realized I could use it as a
          living technical knowledge base — a place to document projects, write
          about what I’m learning, and show how I approach technical work.
        </p>

        <h2>Why I Changed the Direction</h2>

        <p>
          I did not want this to be a one-time project that I build, deploy, and
          forget about. I wanted something I could keep adding to over time.
        </p>

        <p>
          That changed how I thought about the structure. I wanted the site to
          be flexible enough to include Active Directory labs, Docker projects,
          PowerShell scripts, networking notes, troubleshooting write-ups, and
          future cloud or infrastructure projects.
        </p>

        <p>
          The goal became less about saying, “Here are the tools I know,” and
          more about showing how I learn, build, document, and troubleshoot
          systems.
        </p>

        <h2>What I Learned So Far</h2>

        <p>
          One of the biggest things I learned early on was how a modern
          development workflow fits together.
        </p>

        <p>The basic workflow looks like this:</p>

        <pre>
          <code>{`Edit code in VS Code
→ Save changes
→ Check Git status
→ Commit changes
→ Push to GitHub
→ Vercel deploys the site`}</code>
        </pre>

        <p>
          At first, it felt like a lot of steps just to change a webpage. But
          after repeating the process, it started to make sense. Each step has a
          purpose.
        </p>

        <p>
          VS Code is where I make changes. Git tracks those changes. GitHub
          stores the project remotely. Vercel takes the latest version from
          GitHub and deploys it as a live website.
        </p>

        <p>
          That workflow is valuable beyond web development. It is similar to how
          real teams manage scripts, documentation, infrastructure files, and
          application code.
        </p>

        <p>
          I also learned more about how Next.js organizes pages. In the{" "}
          <code>app</code> directory, folders become routes. For example:
        </p>

        <pre>
          <code>{`app/page.tsx → /
app/projects/page.tsx → /projects
app/blog/page.tsx → /blog
app/resume/page.tsx → /resume`}</code>
        </pre>

        <p>
          That file-based routing system helped me understand how the site
          should be structured before worrying too much about design.
        </p>

        <h2>Why Documentation Matters</h2>

        <p>
          One of the biggest reasons I wanted to add a blog early is because
          documentation is part of the work.
        </p>

        <p>
          In IT, solving a problem is only part of the job. You also need to
          explain what happened, document the fix, and make the process easier
          for the next person. That applies whether you are troubleshooting a
          user issue, writing a knowledge base article, managing access, or
          building a lab environment.
        </p>

        <p>This blog gives me a place to practice that skill publicly.</p>

        <h2>Future Plans for the Site</h2>

        <p>
          The next step is to keep building out the Projects section. I want
          each project page to eventually include:
        </p>

        <ul>
          <li>The purpose of the project</li>
          <li>Tools and technologies used</li>
          <li>Architecture or layout diagrams</li>
          <li>Setup steps</li>
          <li>Problems encountered</li>
          <li>Troubleshooting notes</li>
          <li>What I learned</li>
          <li>Future improvements</li>
        </ul>

        <p>Some project areas I plan to expand include:</p>

        <ul>
          <li>Active Directory home lab documentation</li>
          <li>Virtual machine environment notes</li>
          <li>Docker and self-hosted services</li>
          <li>PowerShell automation examples</li>
          <li>Networking and DNS troubleshooting</li>
          <li>Future cloud or infrastructure projects</li>
        </ul>

        <p>
          I also want the Blog section to become a running record of the
          journey. Not every post needs to be perfect or overly technical. Some
          posts will simply document what changed, what I learned, and what I
          plan to improve next.
        </p>

        <h2>Final Thoughts</h2>

        <p>
          This project started as a resume website, but it is becoming a place
          to showcase my technical growth.
        </p>

        <p>
          The main purpose of the site is to document the systems I am building,
          the tools I am learning, and the process I follow as I continue
          developing as an IT professional.
        </p>

        <p>
          Over time, I want this site to become something more useful than a
          portfolio. I want it to become a clear record of hands-on learning,
          technical problem-solving, and professional development.
        </p>
      </div>
    </main>
  );
}