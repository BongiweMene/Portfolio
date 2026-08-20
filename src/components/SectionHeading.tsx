import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/animations';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={center ? 'text-center' : ''}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-pink">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base text-brand-muted ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
