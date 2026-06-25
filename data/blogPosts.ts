export type BlogPost = {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "From Portfolio Website to Technical Knowledge Base",
    description:
      "How this project evolved from a simple resume website into a living technical portfolio and documentation hub.",
    href: "/blog/site-structure-and-roadmap",
    date: "2026-06-25",
    category: "Portfolio",
  },
  {
    title: "Building This Portfolio Site",
    description:
      "Notes from creating this site with Next.js, VS Code, GitHub, Vercel, routing, reusable components, and a simple development workflow.",
    href: "/blog/building-this-site",
    date: "2026-06-24",
    category: "Portfolio",
  },
].sort((a, b) => b.date.localeCompare(a.date));