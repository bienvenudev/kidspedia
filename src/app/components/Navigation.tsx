import { useState } from 'react';
import { Link, NavLink } from 'react-router';
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
          <div className="hidden min-[860px]:flex items-center gap-8">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/about', label: 'About Us' },
              { to: '/books', label: 'Our Books' },
              { to: '/impact', label: 'Our Impact' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav-underline transition-colors ${
                    isActive
                      ? 'text-[var(--kidspedia-green)] font-semibold is-active'
                      : 'text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
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
            className="min-[860px]:hidden p-2 text-[var(--kidspedia-charcoal)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="min-[860px]:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {[
              { to: '/', label: 'Home', end: true },
              { to: '/about', label: 'About Us' },
              { to: '/books', label: 'Our Books' },
              { to: '/impact', label: 'Our Impact' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left py-2 transition-colors ${
                    isActive
                      ? 'text-[var(--kidspedia-green)] font-semibold border-l-2 border-[var(--kidspedia-green)] pl-2'
                      : 'text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]'
                  }`
                }
              >
                {label}
              </NavLink>
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
