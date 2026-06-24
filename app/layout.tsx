import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Thomas Cornell | IT Portfolio",
  description: "IT portfolio focused on IAM, Active Directory, virtualization, Docker, and automation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0 }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Thomas Cornell
          </Link>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "inherit" }}>Home</Link>
            <Link href="/projects" style={{ color: "inherit" }}>Projects</Link>
            <Link href="/resume" style={{ color: "inherit" }}>Resume</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}