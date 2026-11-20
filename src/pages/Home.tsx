import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, GraduationCap, Briefcase, Award } from 'lucide-react';
import { projects } from '@/data/portfolio';

const tickerSkills = [
  'Python',
  'Java',
  'JavaScript',
  'React.js',
  'Node.js',
  'HTML & CSS',
  'SQL / MySQL',
  'REST APIs',
  'Streamlit',
  'Artificial Intelligence',
  'Machine Learning',
  'Generative AI',
  'Prompt Engineering',
  'Scikit-learn',
  'Git & GitHub',
  'Data Science',
  'Cloud Computing',
  'Cybersecurity',
];

export default function Home() {
  const featured = projects.slice(0, 3);
  const badgeFloatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = badgeFloatRef.current;
    if (!node) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = Math.max(-24, Math.min(24, -window.scrollY * 0.08));
      node.style.transform = `translateY(${offset}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero */}
      <section className="relative grid items-center gap-12 py-16 sm:gap-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <span className="chip-pink tracking-[0.08em]">AI ENGINEERING CANDIDATE · ICT GRADUATE</span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-brand-white sm:text-5xl lg:mx-0 lg:text-[3.45rem]">
            Aspiring AI Engineer <span className="text-pink-purple-gradient">|</span>{' '}
            Software Developer <span className="text-pink-purple-gradient">|</span>{' '}
            ICT Graduate
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg lg:mx-0">
            I&rsquo;m an ICT graduate specialising in Application Development and currently an AI
            Engineering Candidate at CAPACITI. I am passionate about Artificial Intelligence,
            Machine Learning and Software Development. I enjoy developing applications, exploring
            emerging technologies and building practical solutions to real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link to="/projects" className="btn-pink">
              Explore My Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Let&rsquo;s Connect
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
            <div className="hero-title-badge-float" ref={badgeFloatRef}>
              <div className="hero-title-badge">
                <span className="hero-title-badge-dot" aria-hidden="true" />
                Software Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-ticker-section pb-20" aria-label="Technical skills">
        <div className="mb-4 flex items-center justify-between gap-4 px-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">Technical toolkit</p>
          <span className="hidden text-xs text-brand-muted/70 sm:block">Always learning, always building</span>
        </div>
        <div className="skills-ticker" role="region" aria-label="Scrolling list of technical skills">
          <div className="skills-ticker-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="skills-ticker-group" aria-hidden={copyIndex === 1}>
                {tickerSkills.map((skill) => (
                  <span key={`${copyIndex}-${skill}`} className="skills-ticker-pill">
                    {skill}
                  </span>
                ))}
              </div>
            ))}
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
