import { Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <span className="chip-pink">Experience</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          Where I&rsquo;ve <span className="text-pink-purple-gradient">grown</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          Roles, programmes, and hands-on work building AI and software solutions.
        </p>

        <div className="mt-10 space-y-4">
          {experience.map((item, i) => (
            <div key={i} className="card-pink relative p-6 pl-16">
              <span className="absolute left-5 top-6 grid h-10 w-10 place-items-center rounded-xl bg-brand-pink/10">
                <Briefcase className="h-5 w-5 text-brand-pink" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-brand-white">{item.role}</h3>
                <span className="pill-pink pill-pink-idle w-fit">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand-pink-soft">{item.organisation}</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-brand-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
