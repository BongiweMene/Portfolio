import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import { educationHistory, type EducationItem } from '@/lib/portfolio-data';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function Education() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Education & Achievements"
          subtitle="A timeline of my academic milestones and qualifications."
          center
        />

        <div className="relative mt-16 max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-brand-pink/70 via-brand-pink/30 to-transparent" />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-10"
          >
            {educationHistory.map((item: EducationItem, i) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className={`relative pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-[52%] sm:text-right' : 'sm:pl-[52%]'}`}
              >
                <span className="absolute top-1.5 left-2 sm:left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-pink ring-4 ring-brand-bg shadow-pink-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <div className="card-pink group p-5">
                  <div className={`flex items-center gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    <item.icon className="h-5 w-5 text-brand-pink transition-all group-hover:drop-shadow-[0_0_6px_rgba(255,79,163,0.6)]" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-muted">{item.type}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-brand-muted">{item.organization}</p>
                  <p className="mt-1 text-xs font-medium text-brand-pink">{item.date}</p>

                  {item.achievement && (
                    <div className={`mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-3 py-1 ${i % 2 === 0 ? 'sm:ml-auto' : ''}`}>
                      <Award className="h-3.5 w-3.5 text-brand-pink" />
                      <span className="text-xs font-semibold text-brand-pink">{item.achievement}</span>
                    </div>
                  )}

                  {item.coursework && (
                    <div className="mt-4">
                      <p className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-pink ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        <BookOpen className="h-3.5 w-3.5" />
                        Relevant Coursework
                      </p>
                      <ul className={`mt-2 flex flex-wrap gap-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                        {item.coursework.map((c) => (
                          <li key={c} className="chip-pink">{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="mt-3 text-sm text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>
    </div>
  );
}
