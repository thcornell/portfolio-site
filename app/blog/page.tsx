import Link from "next/link";

export default function Blog() {
  return (
    <main className="page">
      <p className="eyebrow">Technical Notes</p>

      <h1 className="hero-title">Blog</h1>

      <p className="hero-subtitle">
        Notes on projects, troubleshooting, home lab work, tools I’m learning,
        and the process of building this portfolio.
      </p>

      <section className="section">
        <div className="grid">
          <Link href="/blog/building-this-site">
            <div className="card">
              <span className="status-pill">Portfolio</span>

              <h2>Building This Portfolio Site</h2>

              <p>
                Documenting the process of creating this site with Next.js,
                GitHub, Vercel, reusable components, routing, and project
                structure.
              </p>

              <p className="link-accent">Read post →</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}