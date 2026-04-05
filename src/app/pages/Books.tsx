import { Link } from 'react-router';
import { Star, Heart, Palette } from 'lucide-react';

export function Books() {
  return (
    <div className="pt-16 md:pt-20">
      <section id="books" className="py-20 md:py-32 bg-[var(--kidspedia-light-green)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Our <span className="text-[var(--kidspedia-green)]">Books</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our collection of multilingual children's learning materials designed to inspire and empower.
            </p>
          </div>

          {/* Featured Book */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              {/* Book Cover */}
              <div className="p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-[var(--kidspedia-light-yellow)] to-white">
                <img
                  src="/assets/ABC OF ANAYA COVER.jpg"
                  alt="ABC of Anaya book cover"
                  className="w-64 md:w-80 h-auto shadow-2xl rounded-2xl object-cover"
                />
              </div>

              {/* Book Details */}
              <div className="p-8 md:p-12">
                <div className="inline-block bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-4 py-1 rounded-full mb-4 text-sm font-semibold">
                  Featured Book
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
                  ABC of Anaya: An Alphabet of Loving Affirmations
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A beautiful children's affirmation and coloring book that combines learning the alphabet with positive self-affirmations. Perfect for young minds to build confidence while developing literacy skills in multiple languages.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-[var(--kidspedia-green)] p-2 rounded-lg">
                      <Star className="text-white" size={20} />
                    </div>
                    <span className="text-gray-700">Currently in English. French &amp; Kinyarwanda editions coming soon</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[var(--kidspedia-yellow)] p-2 rounded-lg">
                      <Palette className="text-[var(--kidspedia-charcoal)]" size={20} />
                    </div>
                    <span className="text-gray-700">Interactive coloring activities included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[var(--kidspedia-sky-blue)] p-2 rounded-lg">
                      <Heart className="text-white" size={20} />
                    </div>
                    <span className="text-gray-700">Promotes positive self-image &amp; confidence</span>
                  </div>
                </div>

                <Link
                  to="/get-involved"
                  className="inline-block bg-[var(--kidspedia-green)] text-white px-8 py-4 rounded-full hover:bg-[var(--kidspedia-green)]/90 transition-all shadow-lg text-center"
                >
                  Get Your Copy
                </Link>
              </div>
            </div>
          </div>

          {/* Copies / In the Community */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
                  Books in the Community
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Each copy of the ABC of Anaya represents both a child's learning journey and a woman's livelihood. Our books are distributed at community events, schools, and through our network of partners across Rwanda.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A meaningful share of every sale is reinvested into the community — funding training, workshops, and economic opportunities for women.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/assets/ABC OF ANAYA COPIES.jpg"
                  alt="Multiple copies of ABC of Anaya"
                  className="w-full h-72 md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
