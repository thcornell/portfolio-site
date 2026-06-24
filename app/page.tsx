import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section>
        <p className="eyebrow">IT Portfolio / Technical Knowledge Base</p>

        <h1 className="hero-title">Thomas Cornell</h1>

        <p className="hero-subtitle">
          I’m an IT professional with enterprise support experience, building a
          hands-on portfolio around infrastructure, systems administration,
          automation, and technical documentation.
        </p>

        <p className="hero-subtitle">
          This site documents the systems I’m learning, building, and
          troubleshooting — from Active Directory and virtual machines to Docker,
          scripting, networking, and future cloud projects.
        </p>

        <div className="button-row">
          <Link href="/projects" className="button">
            View Projects
          </Link>

          <Link href="/resume" className="button-secondary">
            View Resume
          </Link>

          <Link href="/blog" className="button-secondary">
            Read Blog
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Featured Project</h2>

        <div className="card">
          <h3>Active Directory Home Lab</h3>

          <p>
            A Windows Server 2022 lab used to practice domain services, DNS,
            user and group management, Group Policy concepts, and Windows client
            administration.
          </p>

          <Link href="/projects/active-directory" className="link-accent">
            View project →
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Latest Blog Post</h2>

        <div className="card">
          <h3>Building This Portfolio Site</h3>

          <p>
            Notes from creating this site with Next.js, GitHub, Vercel, and a
            simple development workflow.
          </p>

          <Link href="/blog/building-this-site" className="link-accent">
            Read post →
          </Link>
        </div>
      </section>
    </main>
  );
}