import { Zap, ShieldCheck, Smartphone, LifeBuoy, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning-Fast Performance',
    desc: 'Optimized code and assets that load in under a second, keeping visitors engaged and SEO rankings high.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'Best-practice security, SSL, and regular backups keep your site and customer data protected around the clock.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive Design',
    desc: 'Pixel-perfect on mobile, tablet, and desktop — your site looks stunning on every screen size.',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Support',
    desc: 'A real team behind every project, with ongoing maintenance and fast, friendly support whenever you need it.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We respect deadlines. Clear milestones and transparent communication keep your launch on schedule.',
  },
  {
    icon: Award,
    title: 'Award-Worthy Quality',
    desc: 'Clean, semantic code and meticulous design that meets modern web standards and impresses your users.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-primary-700/20 blur-[120px]" />
      </div>

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:pr-8">
            <span className="section-eyebrow reveal">Why NextTech</span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl reveal" data-delay="60">
              Why choose NextTech
            </h2>
            <p className="mt-4 text-base text-ink-300 sm:text-lg reveal" data-delay="120">
              We combine strategy, design, and engineering to deliver websites that
              don&apos;t just look great — they perform. Here&apos;s what sets us apart.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 reveal" data-delay="180">
              {[
                { v: '400+', l: 'Projects' },
                { v: '7000+', l: 'Students' },
                { v: '4.9/5', l: 'Avg. Rating' },
              ].map((s) => (
                <div key={s.l} className="card p-4 text-center">
                  <div className="font-display text-xl font-bold text-white sm:text-2xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-400">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="card group p-6 hover:-translate-y-1 hover:border-accent-400/30 hover:bg-white/[0.06] reveal"
                data-delay={i * 80}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-500/15 text-accent-300 ring-1 ring-inset ring-accent-400/20 transition-transform group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
