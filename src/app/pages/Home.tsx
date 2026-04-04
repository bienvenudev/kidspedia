import { Link } from 'react-router';
import { Hero } from '../components/Hero';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BookOpen, Users, Globe, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div>
      <Hero />

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxSd2FuZGElMjBjb21tdW5pdHklMjB3b21lbiUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc3NTI1NDU0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
                About <span className="text-[var(--kidspedia-green)]">Kidspedia</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kidspedia is an international platform of education professionals dedicated to creating multilingual children's learning materials that spark joy and foster growth.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Based in Kigali, Rwanda, we exist at the intersection of childhood education and women's empowerment.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="bg-[var(--kidspedia-light-green)] p-3 rounded-xl mb-2 inline-block">
                    <BookOpen className="text-[var(--kidspedia-green)]" size={24} />
                  </div>
                  <p className="text-sm text-gray-600">Multilingual Learning</p>
                </div>
                <div className="text-center">
                  <div className="bg-[var(--kidspedia-light-yellow)] p-3 rounded-xl mb-2 inline-block">
                    <Users className="text-[var(--kidspedia-yellow)]" size={24} />
                  </div>
                  <p className="text-sm text-gray-600">Women's Empowerment</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 p-3 rounded-xl mb-2 inline-block">
                    <Globe className="text-[var(--kidspedia-sky-blue)]" size={24} />
                  </div>
                  <p className="text-sm text-gray-600">Global Impact</p>
                </div>
              </div>

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

      {/* Books Preview */}
      <section className="py-20 md:py-32 bg-[var(--kidspedia-light-green)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Featured <span className="text-[var(--kidspedia-green)]">Book</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 flex items-center justify-center bg-gradient-to-br from-[var(--kidspedia-light-yellow)] to-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581544291234-31340be4b1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyN3MlMjBib29rJTIwYWxwaGFiZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyNTQ1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="ABC of Anaya book cover"
                  className="w-48 md:w-64 h-auto shadow-2xl rounded-2xl"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
                  ABC of Anaya: An Alphabet of Loving Affirmations
                </h3>
                <p className="text-gray-700 mb-6">
                  A beautiful children's affirmation and coloring book in French, English &amp; Kinyarwanda.
                </p>
                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 bg-[var(--kidspedia-green)] text-white px-6 py-3 rounded-full hover:bg-[var(--kidspedia-green)]/90 transition-all"
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
            <p className="text-lg text-gray-700">
              Creating real change in the lives of women and children across Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[var(--kidspedia-light-green)] to-white border-2 border-gray-100 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[var(--kidspedia-green)] mb-2">300+</div>
              <div className="text-gray-600">Families Supported</div>
            </div>
            <div className="bg-gradient-to-br from-[var(--kidspedia-light-yellow)] to-white border-2 border-gray-100 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[var(--kidspedia-yellow)] mb-2">1,000</div>
              <div className="text-gray-600">Women Targeted</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-gray-100 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[var(--kidspedia-sky-blue)] mb-2">1,500+</div>
              <div className="text-gray-600">Books Distributed</div>
            </div>
            <div className="bg-gradient-to-br from-[var(--kidspedia-light-green)] to-white border-2 border-gray-100 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-[var(--kidspedia-green)] mb-2">100%</div>
              <div className="text-gray-600">Profits to Community</div>
            </div>
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
