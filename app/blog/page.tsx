import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";

export default function Blog() {
  return (
    <main className="page">
      <p className="home-kicker">Technical Notes</p>

      <h1 className="hero-title">Blog</h1>

      <p className="hero-subtitle">
        Notes on projects, troubleshooting, home lab work, tools I’m learning,
        and the process of building this portfolio.
      </p>

      <section className="section">
        <div className="grid">
          {blogPosts.map((post) => (
            <Link href={post.href} key={post.href}>
              <div className="card">
                <p className="feature-type">{post.category}</p>

                <h2>{post.title}</h2>

                <p>{post.description}</p>

                <p className="link-accent">Read post →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}