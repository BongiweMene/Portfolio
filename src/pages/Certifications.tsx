import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { certifications, type Certification } from '@/lib/portfolio-data';
import { scaleIn, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function Certifications() {
  const [preview, setPreview] = useState<Certification | null>(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (preview) setPaused(true);
  }, [preview]);

  const handleBackgroundClick = () => {
    if (paused) setPaused(false);
  };

  const items = [...certifications, ...certifications];

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Professional certifications validating my expertise in AI, machine learning, and software development."
          center
        />
      </section>

      <div
        onClick={handleBackgroundClick}
        className="relative mt-12 overflow-hidden no-scrollbar select-none"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
      >
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="w-full"
        >
          <div
            ref={trackRef}
            className={`cert-track flex gap-6 w-max ${paused ? 'paused' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((c, idx) => (
              <div
                key={`${c.id}-${idx}`}
                className="card-pink group p-5 w-72 sm:w-80 shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-card-dark"
                onClick={() => setPreview(c)}
              >
                <div className="overflow-hidden rounded-lg border border-brand-pink/15 bg-brand-card/50 transition-all group-hover:border-brand-pink/30">
                  <img
                    src={c.previewImage}
                    alt={`${c.name} certificate preview`}
                    loading="lazy"
                    className="w-full h-32 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold text-white">{c.name}</h3>
                <p className="text-xs text-brand-muted">{c.issuer} · {c.date}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); setPreview(c); }}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-pink px-3 py-1.5 text-xs font-semibold text-white transition-all hover:shadow-pink-sm"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> View
                  </button>
                  <a
                    href={c.previewUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-card/40 px-3 py-1.5 text-xs font-semibold text-brand-white transition-all hover:border-brand-pink/40"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-brand-card/40 px-3 py-1.5 text-xs font-semibold text-brand-white transition-all hover:border-brand-pink/40"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" /> Verify
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="mt-6 text-center text-xs text-brand-muted">
        Click a certificate to pause and view. Click the background to resume scrolling.
      </p>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl border border-brand-border bg-brand-card p-4 shadow-card-dark"
            >
              <button
                onClick={() => setPreview(null)}
                className="absolute top-3 right-3 z-10 text-brand-muted hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="mb-3 font-display text-base font-semibold text-white">{preview.name}</h3>
              <div className="w-full bg-brand-bg flex items-center justify-center p-4 max-h-[60vh] overflow-auto rounded-lg">
                <img
                  src={preview.previewImage}
                  alt={`${preview.name} certificate`}
                  className="max-h-[55vh] w-auto rounded-lg"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={preview.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pink"
                >
                  <ExternalLink className="h-4 w-4" /> Open Full
                </a>
                <a
                  href={preview.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <ShieldCheck className="h-4 w-4" /> Verify
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
