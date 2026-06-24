export default function BuildingThisSitePost() {
  return (
    <main className="page">
      <p className="eyebrow">Portfolio Build Notes</p>

      <h1 className="hero-title">Building This Portfolio Site</h1>

      <div className="prose">
        <p>
          I started this portfolio to create a central place for my resume,
          technical projects, and ongoing learning. Rather than only listing
          technologies on a resume, I wanted a site that could show how I build,
          troubleshoot, and document systems.
        </p>

        <h2>Why I Built It</h2>

        <p>
          My goal is to create a living technical portfolio that can grow over
          time. As I work on projects involving Active Directory, virtual
          machines, Docker, scripting, networking, and other IT topics, I want
          to document the process in a way that is useful both for myself and
          for potential employers.
        </p>

        <h2>Tools Used</h2>

        <ul>
          <li>Next.js for the website framework</li>
          <li>VS Code for editing</li>
          <li>Git for version control</li>
          <li>GitHub for hosting the repository</li>
          <li>Vercel for deployment</li>
        </ul>

        <h2>What I Learned So Far</h2>

        <p>
          The first major concept I learned was file-based routing. In Next.js,
          folders inside the app directory become routes. For example,
          app/projects/page.tsx becomes the Projects page, and
          app/blog/page.tsx becomes the Blog page.
        </p>

        <p>
          I also started practicing a real development workflow: edit files in
          VS Code, check changes with Git, commit updates with clear messages,
          push to GitHub, and let Vercel automatically deploy the site.
        </p>

        <h2>Next Steps</h2>

        <p>
          Next, I plan to keep improving the design, expand the Projects
          section, and document my Active Directory home lab in more detail.
          Over time, this site will become both a portfolio and a technical
          knowledge base.
        </p>
      </div>
    </main>
  );
}