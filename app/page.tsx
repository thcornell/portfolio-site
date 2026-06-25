import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

export default function Home() {
  const latestPost = blogPosts[0];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-kicker">IT Portfolio / Technical Documentation</p>

          <h1>Thomas Cornell</h1>

          <p className="home-lead">
            IT professional with enterprise support experience, building a
            practical portfolio around infrastructure, systems administration,
            automation, troubleshooting, and technical documentation.
          </p>

          <p className="home-supporting">
            This site highlights hands-on projects, written technical notes, and
            professional experience across Windows infrastructure, Active
            Directory, virtualization, Docker, scripting, and related IT systems.
          </p>

          <div className="home-actions">
            <Link href="/projects" className="primary-action">
              View Projects
            </Link>

            <Link href="/resume" className="secondary-action">
              View Resume
            </Link>

            <Link href="/blog" className="secondary-action">
              Read Blog
            </Link>
          </div>
        </div>

        <aside className="home-summary-card">
          <p className="summary-label">At a Glance</p>

          <div className="summary-item">
            <span>Current Role</span>
            <strong>Service Desk Analyst II</strong>
          </div>

          <div className="summary-item">
            <span>Environment</span>
            <strong>Enterprise healthcare IT</strong>
          </div>

          <div className="summary-item">
            <span>Core Work</span>
            <strong>
              User support, access issues, endpoint troubleshooting,
              documentation
            </strong>
          </div>

          <div className="summary-item">
            <span>This Site</span>
            <strong>Projects, technical notes, and resume</strong>
          </div>
        </aside>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="home-kicker">Start Here</p>
          <h2>Featured Work</h2>
        </div>

        <div className="feature-grid">
          <Link href="/projects/active-directory" className="feature-card">
            <p className="feature-type">Project</p>

            <h3>Active Directory Home Lab</h3>

            <p>
              A Windows Server 2022 lab for practicing domain services, DNS,
              user and group management, Group Policy concepts, and Windows
              client administration.
            </p>

            <span>View project →</span>
          </Link>

          <Link href={latestPost.href} className="feature-card">
            <p className="feature-type">Latest Blog Post</p>

            <h3>{latestPost.title}</h3>

            <p>{latestPost.description}</p>

            <span>Read post →</span>
          </Link>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="home-kicker">Why This Site Exists</p>
          <h2>A living technical portfolio</h2>
        </div>

        <div className="plain-card">
          <p>
            I built this site to go beyond a traditional resume. The goal is to
            document what I’m learning, show how I approach technical problems,
            and create a place where employers can see practical examples of my
            work over time.
          </p>
        </div>
      </section>
    </main>
  );
}