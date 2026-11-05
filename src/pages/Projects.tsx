import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <span className="chip-pink">Projects</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          Things I&rsquo;ve <span className="text-pink-purple-gradient">built</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          A collection of AI, machine learning, and web development projects.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="card-pink group flex flex-col p-6">
              <span className="chip-pink w-fit">{p.category}</span>
              <h3 className="mt-4 text-lg font-semibold text-brand-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="chip-pink">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-pink transition-all group-hover:gap-2">
                View details <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
