import Link from 'next/link';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <main className="projectPage">
      <p className="sectionLabel">Project Detail</p>
      <h1>{title}</h1>
      <p>
        This project page is intentionally minimal and ready for case-study expansion with process, outcomes,
        gallery blocks, and testimonials.
      </p>
      <Link href="/" className="cta">
        Back Home
      </Link>
    </main>
  );
}
