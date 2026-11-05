import { Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <span className="chip-pink">Certifications</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          Industry <span className="text-pink-purple-gradient">credentials</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          Certifications I&rsquo;ve earned across AI, machine learning, and Python.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div key={i} className="card-pink group flex flex-col p-5">
              <div className="overflow-hidden rounded-xl border border-brand-border">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-brand-pink" />
                <h3 className="text-sm font-semibold leading-snug text-brand-white">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
