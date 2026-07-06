import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

export default function Home() {
  const latestPost = blogPosts[0];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-kicker">IT Portfolio / Technical Documentation</p>

          <h1 className="home-name">Thomas Cornell</h1>

          <p className="home-lead">
            Service Desk Analyst II in enterprise healthcare IT, supporting
            users, troubleshooting access and endpoint issues, and documenting
            technical processes. This portfolio highlights the infrastructure,
            automation, and systems administration skills I’m building through
            hands-on projects and technical writing.
          </p>

          <p className="home-supporting">
            My current focus areas include Windows infrastructure, Active
            Directory, virtualization, PowerShell automation, Docker, networking
            fundamentals, and practical IT documentation.
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

        <div className="home-photo-card">
          <Image
            src="/images/home/thomas-home-headshot.jpeg"
            alt="Thomas Cornell"
            width={992}
            height={1246}
            priority
            className="home-photo"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="home-kicker">Featured Work</p>
          <h2>Projects and writing</h2>
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
            <p className="feature-type">
              {latestPost.category} · {latestPost.date}
            </p>

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