import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <span className="chip-pink">Education</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          My <span className="text-pink-purple-gradient">Learning Path</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          A foundation in ICT and a growing focus on AI engineering.
        </p>

        <div className="mt-10 space-y-4">
          {education.map((item, i) => (
            <div key={i} className="card-pink relative p-6 pl-16">
              <span className="absolute left-5 top-6 grid h-10 w-10 place-items-center rounded-xl bg-brand-pink/10">
                <GraduationCap className="h-5 w-5 text-brand-pink" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-brand-white">{item.title}</h3>
                <span className="pill-pink pill-pink-idle w-fit">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand-pink-soft">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
