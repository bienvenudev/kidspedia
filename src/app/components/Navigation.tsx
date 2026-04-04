import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/kidspedia-logo.PNG"
              alt="Kidspedia"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)] transition-colors">
              About Us
            </Link>
            <Link to="/books" className="text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)] transition-colors">
              Our Books
            </Link>
            <Link to="/impact" className="text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)] transition-colors">
              Our Impact
            </Link>
            <Link to="/gallery" className="text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)] transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)] transition-colors">
              Contact
            </Link>
            <Link
              to="/get-involved"
              className="bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-6 py-2.5 rounded-full hover:bg-[var(--kidspedia-green)] hover:text-white transition-all shadow-md"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--kidspedia-charcoal)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/books', label: 'Our Books' },
              { to: '/impact', label: 'Our Impact' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-6 py-2.5 rounded-full hover:bg-[var(--kidspedia-green)] hover:text-white transition-all shadow-md text-center mt-2"
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
