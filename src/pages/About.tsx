import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { skills } from '@/data/portfolio';

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <span className="chip-pink">About Me</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          Hi, I&rsquo;m <span className="text-pink-purple-gradient">Bongiwe Mene</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-brand-muted">
          I&rsquo;m an ICT graduate and AI Engineering Candidate passionate about building
          intelligent, user-focused solutions. My journey spans software engineering, machine
          learning, and prompt engineering &mdash; with a strong foundation in Python and modern
          web technologies.
        </p>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          I believe AI should be practical and accessible. Whether it&rsquo;s a study assistant
          that helps learners prep faster or a churn model that helps a business retain customers,
          I enjoy turning ideas into working, polished software.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-pink">
            See My Work <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="/Bongiwe_Mene_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Download CV <Download className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <h2 className="text-xl font-bold tracking-tight text-brand-white sm:text-2xl">
          Skills &amp; <span className="text-pink-purple-gradient">Tools</span>
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group} className="card-pink p-6">
              <h3 className="text-sm font-semibold text-brand-pink">{group.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip-pink">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
