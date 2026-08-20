import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  User,
  Activity,
} from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-28 pb-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-2xl font-bold text-white">Project not found</h1>
        <p className="mt-3 text-sm text-brand-muted">
          The project you're looking for doesn't exist or may have been removed.
        </p>
        <button onClick={() => navigate('/projects')} className="btn-pink mt-6">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </button>
      </div>
    );
  }

  const Icon = project.icon ?? Activity;

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 card-pink relative overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand-pink/10 blur-3xl" />

          <div className="relative flex flex-col sm:flex-row sm:items-start sm:gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-pink/10 text-brand-pink ring-1 ring-brand-pink/20">
              <Icon className="h-7 w-7" />
            </span>
            <div className="mt-4 sm:mt-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip-pink">{project.category}</span>
                {project.status === 'Live' && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">
                {project.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed max-w-2xl">
                {project.overview ?? project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-pink"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    <Github className="h-4 w-4" /> GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {project.disclaimer && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <p className="text-sm text-amber-100/90 leading-relaxed">{project.disclaimer}</p>
          </motion.div>
        )}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {project.features.length > 0 && (
            <motion.div variants={fadeUp} className="card-pink p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                <CheckCircle2 className="h-4 w-4" /> Key Features
              </p>
              <ul className="mt-4 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-brand-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.technologies.length > 0 && (
            <motion.div variants={fadeUp} className="card-pink p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                <Code2 className="h-4 w-4" /> Technologies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="chip-pink">{t}</span>
                ))}
              </div>
            </motion.div>
          )}

          {project.role && (
            <motion.div variants={fadeUp} className="card-pink p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                <User className="h-4 w-4" /> My Role
              </p>
              <p className="mt-4 text-sm text-brand-muted leading-relaxed">{project.role}</p>
            </motion.div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <motion.div variants={fadeUp} className="card-pink p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                <AlertTriangle className="h-4 w-4" /> Challenges
              </p>
              <ul className="mt-4 space-y-2">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-brand-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 card-pink p-6"
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
              <Lightbulb className="h-4 w-4" /> What I Learned
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.lessonsLearned.map((l) => (
                <div key={l} className="flex items-start gap-2 text-sm text-brand-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                  {l}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 card-pink relative overflow-hidden p-8 text-center"
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-pink/10 blur-2xl" />
          <SectionHeading
            eyebrow="Explore"
            title="Project Links"
            subtitle="Try the live app or browse the source code on GitHub."
            center
          />
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-pink">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <Github className="h-4 w-4" /> GitHub Repository
              </a>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
