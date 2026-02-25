import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="projectPage">
      <p className="sectionLabel">Project Detail</p>
      <h1>{project.title}</h1>
      <p>
        Category: {project.category}. This page is ready for case-study expansion with challenge, strategy,
        visuals, and measurable outcomes.
      </p>
      <Link href="/" className="cta">
        Back Home
      </Link>
    </main>
  );
}
