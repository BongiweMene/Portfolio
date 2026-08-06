import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { profile } from '@/lib/portfolio-data';
import { supabase } from '@/lib/supabase';
import { fadeUp, viewportOnce } from '@/lib/animations';
import SectionHeading from '@/components/SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const { error: dbError } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (dbError) throw dbError;
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
          center
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="card-pink p-6">
              <Mail className="h-6 w-6 text-brand-pink" />
              <h3 className="mt-3 font-display text-base font-semibold text-white">Email</h3>
              <a href={`mailto:${profile.email}`} className="text-sm text-brand-muted hover:text-brand-pink transition-colors">
                {profile.email}
              </a>
            </div>
            <div className="card-pink p-6">
              <div className="flex gap-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-pink transition-colors">
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-pink transition-colors">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="card-pink p-6 space-y-4"
          >
            <div>
              <label className="text-xs font-semibold text-brand-muted">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-brand-border bg-brand-bg/50 px-4 py-2.5 text-sm text-white placeholder-brand-muted focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-brand-muted">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-brand-border bg-brand-bg/50 px-4 py-2.5 text-sm text-white placeholder-brand-muted focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-brand-muted">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-brand-border bg-brand-bg/50 px-4 py-2.5 text-sm text-white placeholder-brand-muted focus:border-brand-pink focus:outline-none focus:ring-1 focus:ring-brand-pink resize-none"
                placeholder="Your message"
              />
            </div>

            {error && <p className="text-xs text-red-400">{error}</p>}

            {status === 'sent' ? (
              <div className="flex items-center gap-2 text-sm text-brand-pink">
                <CheckCircle2 className="h-4 w-4" /> Message sent! I'll get back to you soon.
              </div>
            ) : (
              <a href="sms:0725630198" className="btn-pink w-full">
                <MessageSquare className="h-4 w-4" /> Send Message
              </a>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
