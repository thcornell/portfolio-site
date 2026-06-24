import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
  status = "In Progress",
}: ProjectCardProps) {
  const card = (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        opacity: href ? 1 : 0.6,
      }}
    >
      <p style={{ color: "#666", marginBottom: "8px" }}>{status}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
        {card}
      </Link>
    );
  }

  return card;
}