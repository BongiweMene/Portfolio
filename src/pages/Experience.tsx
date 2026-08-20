import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Heart, Calendar, Building2, Zap } from 'lucide-react';
import { experienceHistory, type ExperienceItem } from '@/lib/portfolio-data';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

const categoryConfig: Record<ExperienceItem['category'], { icon: typeof Briefcase; color: string }> = {
  Internship: { icon: Sparkles, color: 'text-brand-pink' },
  Work: { icon: Briefcase, color: 'text-brand-pink-soft' },
  Volunteer: { icon: Heart, color: 'text-brand-pink-neon' },
};

export default function Experience() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="My professional journey across AI engineering, IT support, education, and administration."
          center
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {experienceHistory.map((exp) => {
            const cfg = categoryConfig[exp.category];
            const CatIcon = cfg.icon;

            return (
              <motion.div
                key={`${exp.position}-${exp.organization}`}
                variants={fadeUp}
                className="card-pink group relative overflow-hidden p-6 sm:p-7 transition-all duration-300 hover:shadow-pink-md hover:border-brand-pink/40"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-pink/5 blur-2xl transition-opacity duration-300 group-hover:bg-brand-pink/10" />

                {/* Header: category badge + duration */}
                <div className="relative flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-3 py-1 text-xs font-semibold text-brand-pink">
                    <CatIcon className="h-3.5 w-3.5" />
                    {exp.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted whitespace-nowrap">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.duration}
                  </span>
                </div>

                {/* Title + company */}
                <h3 className="relative mt-4 font-display text-lg font-bold text-white">
                  {exp.position}
                </h3>
                <p className="relative mt-1 flex items-center gap-1.5 text-sm text-brand-pink">
                  <Building2 className="h-3.5 w-3.5" />
                  {exp.organization}
                </p>

                {/* Responsibilities */}
                <ul className="relative mt-5 space-y-2.5">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span key={s} className="chip-pink">{s}</span>
                  ))}
                </div>

                {/* Impact */}
                <div className="relative mt-5 rounded-xl border border-brand-pink/20 bg-brand-pink/5 p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-pink">
                    <Zap className="h-3.5 w-3.5" />
                    Impact
                  </p>
                  <p className="mt-2 text-sm text-brand-white leading-relaxed">{exp.impact}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
