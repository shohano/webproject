import { useState, type FormEvent } from 'react';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2, Loader2, MapPin, Clock, Globe } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', phone: '', message: '' };

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: '57/12, Sonargaon Plaza (4th Floor), Panthapath, Dhaka 1215, Bangladesh' },
  { icon: Phone, label: 'Call Us', value: '+880 1728-619131', href: 'tel:+8801728619131' },
  { icon: Mail, label: 'Email Us', value: 'info@nexttechltd.com', href: 'mailto:info@nexttechltd.com' },
  { icon: Clock, label: 'Working Hours', value: 'Sat - Thu, 9:00 AM - 6:00 PM' },
];

const services = [
  'Business Website Development',
  'E-commerce Website Development',
  'Corporate Website Development',
  'Custom Web Application Development',
  'General Inquiry',
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [service, setService] = useState(services[0]);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) {
      next.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address';
    }
    if (form.phone && !/^[0-9+\-\s()]{6,20}$/.test(form.phone)) {
      next.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please enter at least 10 characters';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    const { error } = await supabase.from('consultations').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
      service,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm(initialForm);
  }

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  const inputBase =
    'w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2';

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-primary-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow reveal">
            <Globe className="h-3.5 w-3.5" />
            Let&apos;s Talk
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl reveal" data-delay="60">
            Get a free consultation
          </h2>
          <p className="mt-4 text-base text-ink-300 sm:text-lg reveal" data-delay="120">
            Tell us about your project and we&apos;ll get back to you within one
            business day with a free, no-obligation quote.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info */}
          <div className="reveal">
            <div className="card h-full p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-ink-300">
                Reach out through any channel — we&apos;re here to help your
                business grow online.
              </p>
              <ul className="mt-8 space-y-6">
                {contactInfo.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-500/15 text-primary-300 ring-1 ring-inset ring-primary-400/20">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-400">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block text-sm font-medium text-white transition-colors hover:text-primary-300"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="mt-1 text-sm font-medium text-white">
                          {c.value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" data-delay="100">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-8"
              aria-label="Free consultation request form"
            >              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-500/15 text-accent-300 ring-1 ring-inset ring-accent-400/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-300">
                    Your request has been received. Our team will reach out to you
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" icon={User} error={errors.name} htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your full name"
                        className={`${inputBase} ${
                          errors.name
                            ? 'border-red-500/60 focus:ring-red-500/40'
                            : 'border-white/10 focus:border-primary-400/50 focus:ring-primary-500/30'
                        }`}
                      />
                    </Field>
                    <Field label="Email" icon={Mail} error={errors.email} htmlFor="email">
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                        className={`${inputBase} ${
                          errors.email
                            ? 'border-red-500/60 focus:ring-red-500/40'
                            : 'border-white/10 focus:border-primary-400/50 focus:ring-primary-500/30'
                        }`}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone (optional)" icon={Phone} error={errors.phone} htmlFor="phone">
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+880 1XXX-XXXXXX"
                        className={`${inputBase} ${
                          errors.phone
                            ? 'border-red-500/60 focus:ring-red-500/40'
                            : 'border-white/10 focus:border-primary-400/50 focus:ring-primary-500/30'
                        }`}
                      />
                    </Field>
                    <Field label="Service of Interest" htmlFor="service">
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`${inputBase} border-white/10 focus:border-primary-400/50 focus:ring-primary-500/30 [&>option]:bg-ink-900`}
                      >
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" icon={MessageSquare} error={errors.message} htmlFor="message">
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className={`${inputBase} resize-none ${
                        errors.message
                          ? 'border-red-500/60 focus:ring-red-500/40'
                          : 'border-white/10 focus:border-primary-400/50 focus:ring-primary-500/30'
                      }`}
                    />
                  </Field>

                  {status === 'error' && (
                    <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      Something went wrong sending your message. Please try again
                      or email us directly at info@nexttechltd.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  error,
  htmlFor,
  children,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-200"
      >
        {Icon && <Icon className="h-3.5 w-3.5 text-ink-400" />}
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
