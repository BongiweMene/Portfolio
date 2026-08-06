import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, ExternalLink, Github } from 'lucide-react';
import { profile, stats, skillGroups, projects } from '@/lib/portfolio-data';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-pink/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-brand-pink/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 rounded-full border border-brand-pink/20 bg-brand-pink/5 px-3 py-1.5 text-xs font-medium text-brand-pink-soft"
              >
                <span className="h-2 w-2 rounded-full bg-brand-pink animate-pulse shadow-pink-sm" />
                Building Intelligent Solutions
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                ICT Graduate <span className="text-brand-pink">|</span> AI Engineer <span className="text-brand-pink">|</span> Software Developer
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-base sm:text-lg text-brand-muted leading-relaxed max-w-xl"
              >
                {profile.summary}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/projects" className="btn-pink">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/Bongiwe_Mene_CV.pdf"
                  download="Bongiwe_Mene_CV.pdf"
                  className="btn-ghost"
                  onClick={async (e) => {
                    const res = await fetch('/Bongiwe_Mene_CV.pdf', { method: 'HEAD' });
                    if (!res.ok) {
                      e.preventDefault();
                      alert('CV is currently unavailable. Please check back soon or contact me directly.');
                    }
                  }}
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative mx-auto lg:mx-0 animate-float-soft"
            >
              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-brand-pink/30 via-brand-pink-soft/20 to-purple-700/25 blur-2xl" />
              <div className="relative h-80 w-72 sm:h-96 sm:w-80 rounded-3xl overflow-hidden shadow-card-dark ring-1 ring-brand-pink/20">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 glass-pink px-5 py-4 text-center">
                  <p className="font-display text-sm font-semibold text-white">{profile.name}</p>
                  <p className="text-xs text-brand-pink-soft mt-0.5">Building Intelligent Solutions with AI & Software Engineering</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="card-pink p-5 text-center">
              <s.icon className="mx-auto h-6 w-6 text-brand-pink" />
              <p className="mt-3 font-display text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-brand-muted mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Technologies"
          subtitle="A modern toolkit for building intelligent, scalable software."
          center
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((g) => (
            <motion.div key={g.title} variants={fadeUp} className="card-pink group p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-pink/10 text-brand-pink transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,79,163,0.6)]">
                  <g.icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold text-white">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="chip-pink">{s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="Featured Work"
          title="Featured Projects"
          subtitle="Selected projects that showcase my skills across AI, machine learning, and full-stack development."
          center
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.filter((p) => p.featured).map((p) => {
            const Icon = p.icon ?? Sparkles;
            return (
              <motion.article
                key={p.id}
                variants={fadeUp}
                className="card-pink group relative overflow-hidden p-6 sm:p-7"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand-pink/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-pink/10 text-brand-pink ring-1 ring-brand-pink/20 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex items-center gap-2">
                    {p.status === 'Live' && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    )}
                    {p.featured && (
                      <span className="text-xs font-semibold text-brand-pink">Featured</span>
                    )}
                  </div>
                </div>

                <h3 className="relative mt-5 font-display text-lg font-semibold text-white group-hover:text-brand-pink transition-colors">
                  {p.title}
                </h3>
                <span className="relative mt-1 block text-xs font-medium text-brand-pink-soft">{p.category}</span>
                <p className="relative mt-3 text-sm text-brand-muted leading-relaxed line-clamp-3">{p.description}</p>

                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 6).map((t) => (
                    <span key={t} className="chip-pink">{t}</span>
                  ))}
                  {p.technologies.length > 6 && (
                    <span className="chip-pink">+{p.technologies.length - 6}</span>
                  )}
                </div>

                {p.disclaimer && (
                  <p className="relative mt-4 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-[11px] leading-relaxed text-amber-100/80">
                    <span className="font-semibold text-amber-300">Note:</span>
                    {p.disclaimer}
                  </p>
                )}

                <div className="relative mt-5 flex flex-wrap items-center gap-3">
                  {p.liveUrl !== '#' && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-pink"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {p.githubUrl !== '#' && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  <Link
                    to={`/projects/${p.id}`}
                    className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-brand-pink hover:gap-2.5 transition-all"
                  >
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center">
          <Link to="/projects" className="btn-ghost">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="card-pink relative overflow-hidden p-8 sm:p-12 text-center"
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-pink/10 blur-2xl" />
          <Sparkles className="mx-auto h-8 w-8 text-brand-pink" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">Let's build something together</h2>
          <p className="mt-3 text-sm text-brand-muted max-w-lg mx-auto">
            I'm currently seeking opportunities where I can contribute, grow, and collaborate on building the next generation of digital solutions.
          </p>
          <Link to="/contact" className="btn-pink mt-6">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
