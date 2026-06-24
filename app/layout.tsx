import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Thomas Cornell | IT Portfolio",
  description:
    "IT portfolio focused on IAM, Active Directory, virtualization, Docker, and automation.",
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
            <Link href="/resume">Resume</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}