import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, X, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/lib/portfolio-data';
import { fadeUp, stagger, scaleIn, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const navigate = useNavigate();

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects showcasing my work in AI, machine learning, and software development."
          center
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              className="card-pink group p-6 text-left"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="chip-pink">{p.category}</span>
                <div className="flex items-center gap-2">
                  {p.status === 'Live' && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  )}
                  {p.featured && (
                    <span className="text-xs font-semibold text-brand-pink">Featured</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {p.icon && (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-pink/10 text-brand-pink ring-1 ring-brand-pink/20">
                    <p.icon className="h-5 w-5" />
                  </span>
                )}
                <h3 className="font-display text-base font-semibold text-white group-hover:text-brand-pink transition-colors">
                  {p.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-brand-muted leading-relaxed line-clamp-3">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span key={t} className="chip-pink">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelected(p)}
                  className="text-xs font-medium text-brand-muted hover:text-white transition-colors"
                >
                  Quick view
                </button>
                <button
                  onClick={() => navigate(`/projects/${p.id}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-pink hover:gap-2.5 transition-all"
                >
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl border border-brand-border bg-brand-card p-6 shadow-card-dark"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-brand-muted hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <span className="chip-pink">{selected.category}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{selected.title}</h3>
              <p className="mt-3 text-sm text-brand-muted leading-relaxed">{selected.description}</p>

              <div className="mt-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                  <Code2 className="h-4 w-4" /> Technologies
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <span key={t} className="chip-pink">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                  <CheckCircle2 className="h-4 w-4" /> Features
                </p>
                <ul className="mt-2 space-y-1.5">
                  {selected.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-3">
                {selected.liveUrl !== '#' && (
                  <a
                    href={selected.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pink flex-1"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {selected.githubUrl !== '#' && (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost flex-1"
                  >
                    <Github className="h-4 w-4" /> View on GitHub
                  </a>
                )}
              </div>

              {selected.githubUrl !== '#' && (
                <p className="mt-2 text-center text-xs text-brand-muted">
                  This link takes you to the GitHub repository for this project.
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
