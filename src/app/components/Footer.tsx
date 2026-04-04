import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--kidspedia-charcoal)] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/assets/kidspedia-logo.PNG"
                alt="Kidspedia"
                className="h-12 w-auto rounded-sm"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your child's learning. A woman's future. One book at a time.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kidspedia.io_/" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-[var(--kidspedia-green)] transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--kidspedia-yellow)]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/books', label: 'Our Books' },
                { to: '/impact', label: 'Our Impact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-300 hover:text-[var(--kidspedia-green)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--kidspedia-yellow)]">More</h3>
            <ul className="space-y-3">
              {[
                { to: '/gallery', label: 'Gallery' },
                { to: '/get-involved', label: 'Get Involved' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-300 hover:text-[var(--kidspedia-green)] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Kidspedia. All rights reserved. Made with love in Rwanda.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[var(--kidspedia-green)] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[var(--kidspedia-green)] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
