import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-brand-white">Project not found</h1>
        <p className="mt-3 text-sm text-brand-muted">
          The project you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link to="/projects" className="btn-pink mt-6">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-brand-muted transition-all hover:gap-2 hover:text-brand-pink">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <span className="chip-pink mt-6">{project.category}</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-base text-brand-pink-soft">{project.tagline}</p>
        <p className="mt-6 text-base leading-relaxed text-brand-muted">{project.description}</p>

        <h2 className="mt-10 text-lg font-semibold text-brand-white">Highlights</h2>
        <ul className="mt-4 space-y-3">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-pink" />
              {h}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-semibold text-brand-white">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip-pink">
              {tag}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {link.label} <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
