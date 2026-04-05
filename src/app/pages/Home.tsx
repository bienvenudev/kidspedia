import { Link } from 'react-router';
import { Hero } from '../components/Hero';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div>
      <Hero />

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/Suzanne-in-community-outreach.jpg"
                alt="Suzanne during community outreach"
                className="w-full h-80 md:h-[480px] object-cover object-center"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
                About <span className="text-[var(--kidspedia-green)]">Kidspedia</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kidspedia is an international platform of education professionals dedicated to creating multilingual children's learning materials that spark joy and foster growth.              </p>

              {/* Pull quote */}
              <blockquote className="border-l-4 border-[var(--kidspedia-green)] pl-5 mb-8">
                <p className="text-xl text-[var(--kidspedia-charcoal)] italic leading-relaxed">
                  "Every book is a bridge — between a child's curiosity and the world, and between a mother's hard work and her family's future."
                </p>
                <footer className="mt-3 text-sm text-gray-500 not-italic">
                  — Suzanne Uwabera, Founder
                </footer>
              </blockquote>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[var(--kidspedia-green)] hover:text-[var(--kidspedia-green)]/80 font-semibold"
              >
                Learn more about our mission
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-20 md:py-32 bg-[var(--kidspedia-light-green)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Featured <span className="text-[var(--kidspedia-green)]">Book</span>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="p-8 flex items-center justify-center bg-amber-50">
                <img
                  src="/assets/ABC OF ANAYA COVER.jpg"
                  alt="ABC of Anaya book cover"
                  className="w-48 md:w-64 h-auto shadow-xl rounded-xl object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
                  ABC of Anaya: An Alphabet of Loving Affirmations
                </h3>
                <p className="text-gray-700 mb-6">
                  A children's affirmation and coloring book, currently in English with French and Kinyarwanda editions coming soon.
                </p>
                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 bg-[var(--kidspedia-green)] text-white px-6 py-3 rounded-lg hover:bg-[var(--kidspedia-green)]/90 transition-all"
                >
                  View All Books
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Our <span className="text-[var(--kidspedia-green)]">Impact</span>
            </h2>
            <p className="text-lg text-gray-700">Creating real change in the lives of women and children across Rwanda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { number: '300+', label: 'Families Supported', color: 'text-[var(--kidspedia-green)]' },
              { number: '1,000', label: 'Women Targeted', color: 'text-[var(--kidspedia-yellow)]' },
              { number: '1,500+', label: 'Books Distributed', color: 'text-[var(--kidspedia-sky-blue)]' },
            ].map(({ number, label, color }) => (
              <div key={label} className="border border-gray-200 rounded-xl p-6 text-center">
                <div className={`text-4xl font-bold ${color} mb-2`}>{number}</div>
                <div className="text-gray-600 text-sm">{label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 text-[var(--kidspedia-green)] hover:text-[var(--kidspedia-green)]/80 font-semibold text-lg"
            >
              See our full impact story
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--kidspedia-green)] to-[var(--kidspedia-green)]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Every book puts learning in a child's hands and income in a mother's pocket.
            Join us in empowering the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-8 py-4 rounded-full hover:bg-[var(--kidspedia-yellow)]/90 transition-all shadow-lg text-lg font-semibold"
            >
              Get Involved
            </Link>
            <Link
              to="/books"
              className="bg-white text-[var(--kidspedia-green)] px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg text-lg font-semibold"
            >
              Browse Our Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
