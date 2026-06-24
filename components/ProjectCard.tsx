import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
}: ProjectCardProps) {
  const isClickable = Boolean(href);

  const card = (
    <div className={`card ${isClickable ? "" : "card-muted"}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href}>{card}</Link>;
  }

  return card;
}