import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0 }}>

        {/* GLOBAL NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 40px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            Thomas Cornell
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/">Home</Link>
            <Link href="/lab">Lab</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}