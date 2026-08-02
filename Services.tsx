import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-primary-400 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-300">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
