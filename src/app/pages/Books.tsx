import { Link } from 'react-router';
import { ImageWithFallback } from '../components/ImageWithFallback';
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

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-[var(--kidspedia-light-yellow)] to-white">
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--kidspedia-yellow)]/20 blur-3xl rounded-full"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581544291234-31340be4b1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyN3MlMjBib29rJTIwYWxwaGFiZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyNTQ1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="ABC of Anaya book cover"
                    className="relative w-64 md:w-80 h-auto shadow-2xl rounded-2xl"
                  />
                </div>
              </div>

              <div className="p-8 md:p-12 md:pl-0">
                <div className="inline-block bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-4 py-1 rounded-full mb-4">
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
                    <span className="text-gray-700">Multilingual: French, English &amp; Kinyarwanda</span>
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

          <div className="mt-16 text-center">
            <p className="text-gray-600 italic">More books coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
