import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <section className="py-16 sm:py-20">
        <span className="chip-pink">Contact</span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
          Let&rsquo;s <span className="text-pink-purple-gradient">connect</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted">
          Open to opportunities in AI, machine learning, and software engineering. Send a message
          or reach out through the links below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-5">
          <div className="sm:col-span-2">
            <h2 className="text-sm font-semibold text-brand-white">Reach me directly</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:bongiwe.mene@example.com"
                  className="flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-pink"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-border">
                    <Mail className="h-4 w-4 text-brand-pink" />
                  </span>
                  bongiwe.mene@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BongiweMene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-pink"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-border">
                    <Github className="h-4 w-4 text-brand-pink" />
                  </span>
                  github.com/BongiweMene
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bongiwe-mene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-pink"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-border">
                    <Linkedin className="h-4 w-4 text-brand-pink" />
                  </span>
                  linkedin.com/in/bongiwe-mene
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-border">
                  <MapPin className="h-4 w-4 text-brand-pink" />
                </span>
                South Africa
              </li>
            </ul>
          </div>

          <div className="sm:col-span-3">
            <form onSubmit={onSubmit} className="card-pink flex flex-col gap-4 p-6">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-brand-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-muted/60 focus:border-brand-pink/50 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-brand-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-muted/60 focus:border-brand-pink/50 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-brand-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-2.5 text-sm text-brand-white placeholder:text-brand-muted/60 focus:border-brand-pink/50 focus:outline-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}
              {sent && (
                <p className="text-sm text-brand-pink">
                  Thanks for reaching out! I&rsquo;ll get back to you soon.
                </p>
              )}

              <button type="submit" className="btn-pink w-full">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
