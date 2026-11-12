import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, GraduationCap, Briefcase, Award } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="relative grid items-center gap-12 py-16 sm:gap-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <span className="chip-pink">AI Engineering Candidate · ICT Graduate</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-brand-white sm:text-6xl lg:mx-0">
            Building intelligent, <br className="hidden sm:block" />
            <span className="text-pink-purple-gradient">user-focused solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg lg:mx-0">
            Hi, I&rsquo;m Bongiwe Mene &mdash; an ICT graduate and AI Engineering Candidate
            passionate about AI, Machine Learning, Python, and Software Engineering. Explore my
            projects, experience, and certifications.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link to="/projects" className="btn-pink">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-brand-pink/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-border bg-brand-card shadow-card-dark">
            <img
              src="/images/ChatGPT_Image_Nov_12,_2026,_03_28_14_AM.png"
              alt="Bongiwe Mene"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-4 pb-20 sm:grid-cols-3">
        {[
          { icon: Cpu, title: 'AI & Machine Learning', text: 'Hands-on with prompt engineering, RAG, and ML models.' },
          { icon: GraduationCap, title: 'Continuous Learning', text: 'Multiple industry certifications in AI and Python.' },
          { icon: Briefcase, title: 'Software Engineering', text: 'Building accessible, responsive web applications.' },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="card-pink p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-pink/10">
              <Icon className="h-5 w-5 text-brand-pink" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-brand-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p>
          </div>
        ))}
      </section>

      {/* Featured projects */}
      <section className="pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
              Featured <span className="text-pink-purple-gradient">Projects</span>
            </h2>
            <p className="mt-2 text-sm text-brand-muted">A selection of things I&rsquo;ve built.</p>
          </div>
          <Link to="/projects" className="pill-pink pill-pink-idle hidden sm:inline-flex">
            All Projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="card-pink group flex flex-col p-6">
              <span className="chip-pink w-fit">{p.category}</span>
              <h3 className="mt-4 text-lg font-semibold text-brand-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-pink transition-all group-hover:gap-2">
                Read more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/projects" className="pill-pink pill-pink-idle">
            All Projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="card-pink flex flex-col items-center gap-5 p-10 text-center sm:p-14">
          <Award className="h-8 w-8 text-brand-pink" />
          <h2 className="text-2xl font-bold tracking-tight text-brand-white sm:text-3xl">
            Let&rsquo;s build something <span className="text-pink-purple-gradient">intelligent</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-brand-muted">
            I&rsquo;m open to opportunities in AI, machine learning, and software engineering.
          </p>
          <Link to="/contact" className="btn-pink">
            Contact Me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
