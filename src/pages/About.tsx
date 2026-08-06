import { motion } from 'framer-motion';
import { profile, aboutSections } from '@/lib/portfolio-data';
import { fadeUp, stagger, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A closer look at my journey as an AI Engineer — what drives me, the impact I want to create, and where I'm headed."
          center
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-pink/20 to-transparent blur-xl" />
              <img
                src="/images/ChatGPT_Image_Jul_23,_2026,_11_07_22_AM.png"
                alt={profile.name}
                className="relative rounded-2xl w-full object-cover object-top ring-1 ring-brand-pink/20"
              />
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-6"
          >
            {aboutSections.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="card-pink p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-pink/10 text-brand-pink">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm sm:text-base text-brand-muted leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
