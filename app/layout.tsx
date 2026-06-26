import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Thomas Cornell | IT Portfolio",
  description:
    "IT portfolio focused on enterprise support, infrastructure, systems administration, automation, and technical documentation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="nav-brand">
            Thomas Cornell
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </nav>

        {children}

        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <p className="footer-title">Thomas Cornell</p>
              <p className="footer-subtitle">
                IT Portfolio / Technical Knowledge Base
              </p>
            </div>

            <div className="footer-links">
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/resume">Resume</Link>
              <a href="mailto:thcornell@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/thcornell">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}