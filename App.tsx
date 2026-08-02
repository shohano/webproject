import { Store, Building2, Code2, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Business Website Development',
    desc: 'Professional, SEO-friendly websites that establish your brand and convert visitors into leads.',
    points: ['Lead-focused design', 'CMS integration', 'SEO ready'],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Website Development',
    desc: 'Secure online stores with smooth checkout, inventory management, and payment gateway integration.',
    points: ['Secure checkout', 'Payment gateways', 'Inventory sync'],
  },
  {
    icon: Store,
    title: 'Corporate Website Development',
    desc: 'Polished corporate platforms that communicate trust, scale, and authority to your stakeholders.',
    points: ['Brand consistency', 'Multi-page architecture', 'Scalable'],
  },
  {
    icon: Code2,
    title: 'Custom Web Application Development',
    desc: 'Tailored web apps built to automate workflows and solve your unique business challenges.',
    points: ['Custom dashboards', 'API integrations', 'Cloud-native'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow reveal">What We Do</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl reveal" data-delay="60">
            Our Services
          </h2>
          <p className="mt-4 text-base text-ink-300 sm:text-lg reveal" data-delay="120">
            End-to-end web development solutions designed to launch, scale, and
            elevate your digital presence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card group relative flex flex-col p-7 hover:-translate-y-1.5 hover:border-primary-400/30 hover:bg-white/[0.06] hover:shadow-glow reveal"
              data-delay={i * 90}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 text-primary-300 ring-1 ring-inset ring-primary-400/20 transition-transform duration-300 group-hover:scale-110">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">
                {s.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-ink-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-300 transition-colors hover:text-primary-200"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
