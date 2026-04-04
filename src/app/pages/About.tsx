import { ImageWithFallback } from '../components/ImageWithFallback';
import { BookOpen, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16 md:pt-20">
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxSd2FuZGElMjBjb21tdW5pdHklMjB3b21lbiUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc3NTI1NDU0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Community member"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
                About <span className="text-[var(--kidspedia-green)]">Kidspedia</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kidspedia is an international platform of education professionals and board members dedicated to creating multilingual children's learning materials that spark joy and foster growth.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Based in Kigali, Rwanda, we exist at the intersection of childhood education and women's empowerment. Our mission is twofold: to promote multilingual education in French, English, and Kinyarwanda, and to uplift women and low-income families across our community.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[var(--kidspedia-light-green)] rounded-2xl">
                  <div className="bg-[var(--kidspedia-green)] p-3 rounded-xl">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-1">Multilingual Learning</h3>
                    <p className="text-gray-700">Creating books in French, English, and Kinyarwanda to celebrate linguistic diversity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[var(--kidspedia-light-yellow)] rounded-2xl">
                  <div className="bg-[var(--kidspedia-yellow)] p-3 rounded-xl">
                    <Users className="text-[var(--kidspedia-charcoal)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-1">Women's Empowerment</h3>
                    <p className="text-gray-700">Every purchase directly supports low-income women, including construction workers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                  <div className="bg-[var(--kidspedia-sky-blue)] p-3 rounded-xl">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-1">International Impact</h3>
                    <p className="text-gray-700">African-rooted but globally minded, bringing quality education materials to children worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
