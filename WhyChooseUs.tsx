import Contact from '@/components/Contact';
import { useReveal } from '@/hooks/useReveal';

export default function ContactPage() {
  useReveal();
  return (
    <main className="pt-20 md:pt-24">
      <Contact />
    </main>
  );
}
