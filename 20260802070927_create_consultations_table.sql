import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="container-px">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary-700/30 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[100px]" />
            <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-accent-500/15 blur-[80px]" />
          </div>
          <div className="relative">
            <span className="section-eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Ready to Start?
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build something great together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-200 sm:text-lg">
              Get a free, no-obligation consultation today. Tell us your idea and
              we&apos;ll show you how to bring it to life.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
