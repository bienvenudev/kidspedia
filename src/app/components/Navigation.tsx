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
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--kidspedia-green)] rounded-lg flex items-center justify-center relative">
                  <span className="text-white font-bold text-lg md:text-xl">K</span>
                  <div className="absolute -right-1 -bottom-1 w-3 h-3 md:w-4 md:h-4 bg-[var(--kidspedia-yellow)] rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center mt-0.5">
                <span className="text-[var(--kidspedia-green)] font-semibold text-sm md:text-base">kids</span>
                <span className="text-[var(--kidspedia-yellow)] font-semibold text-sm md:text-base">pedia</span>
              </div>
            </div>
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
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]">
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]">
              About Us
            </Link>
            <Link to="/books" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]">
              Our Books
            </Link>
            <Link to="/impact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]">
              Our Impact
            </Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]">
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left py-2 text-[var(--kidspedia-charcoal)] hover:text-[var(--kidspedia-green)]">
              Contact
            </Link>
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
