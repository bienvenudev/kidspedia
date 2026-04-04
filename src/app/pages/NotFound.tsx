import { Link } from 'react-router';
import { Home as HomeIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--kidspedia-light-green)] to-[var(--kidspedia-light-yellow)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[var(--kidspedia-green)] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Oops! It seems this page doesn't exist. Let's get you back on track.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[var(--kidspedia-green)] text-white px-8 py-4 rounded-full hover:bg-[var(--kidspedia-green)]/90 transition-all shadow-lg"
        >
          <HomeIcon size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
