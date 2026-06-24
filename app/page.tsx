import Link from "next/link";
export default function Home() {
  return (
    <main style={{ fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <section style={{ padding: "60px 40px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          IT / IAM Engineer
        </h1>

        <p style={{ fontSize: "18px", color: "#444" }}>
          Active Directory • Windows Infrastructure • Virtualization • Docker
        </p>
      </section>

      {/* STATUS SECTION */}
      <section style={{ padding: "0 40px" }}>
        <h2>Lab Status</h2>
        <ul>
          <li>Domain Controller — Online</li>
          <li>Windows 11 VM — Online</li>
          <li>Docker Host — Online</li>
        </ul>
      </section>
    </main>
  );
}