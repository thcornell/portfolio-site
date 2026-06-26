import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  href,
  tags = [],
}: ProjectCardProps) {
  const isClickable = Boolean(href);

  const card = (
    <div className={`card ${isClickable ? "" : "card-muted"}`}>
      <h2>{title}</h2>
      <p>{description}</p>

      {tags.length > 0 && (
        <div className="card-meta">
          {tags.map((tag) => (
            <span className="card-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{card}</Link>;
  }

  return card;
}