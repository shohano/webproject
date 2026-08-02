import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { value: '400+', label: 'Projects Delivered' },
  { value: '7000+', label: 'Students Trained' },
  { value: '80%', label: 'Job Placement' },
  { value: 'Since 2012', label: 'Established' },
];

const floatingBadges = [
  { icon: Zap, label: 'Lightning Fast', className: 'left-2 top-10 sm:left-6' },
  { icon: ShieldCheck, label: 'Secure & Reliable', className: 'right-2 top-32 sm:right-4' },
  { icon: Star, label: '5-Star Rated', className: 'bottom-10 left-4' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary-600/25 blur-[120px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary-800/30 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)',
        }}
      />

      <div className="container-px grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div className="text-center lg:text-left">
          <span className="section-eyebrow animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            Empowering Future Through Technology
          </span>

          <h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animation: 'fade-up 0.7s 0.05s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            We build websites that{' '}
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent">
              grow your business
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg lg:mx-0"
            style={{ animation: 'fade-up 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            Since 2012, NextTech Limited has delivered 400+ software and IT
            projects. From sleek business sites to powerful custom web apps, we
            craft fast, modern, and reliable websites that turn visitors into
            customers.
          </p>

          <div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            style={{ animation: 'fade-up 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#services" className="btn-ghost w-full sm:w-auto">
              Explore Services
            </Link>
          </div>

          <dl
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
            style={{ animation: 'fade-up 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ink-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
              <img
                src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="NextTech development team collaborating"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
            </div>

            {/* Floating badges */}
            {floatingBadges.map((b) => (
              <div
                key={b.label}
                className={`absolute ${b.className} flex animate-float items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/80 px-3.5 py-2.5 backdrop-blur-md`}
                style={{ animationDelay: `${Math.random() * 2}s` }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-500/20 text-primary-300">
                  <b.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-white">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
