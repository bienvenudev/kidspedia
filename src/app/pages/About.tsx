import { BookOpen, Users, Globe, Linkedin } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* About Kidspedia */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
              About <span className="text-[var(--kidspedia-green)]">Kidspedia</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kidspedia is an international platform of education professionals and board members dedicated to creating multilingual children's learning materials that spark joy and foster growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in Kigali, Rwanda, we sit at the intersection of childhood education and women's empowerment — promoting literacy in French, English, and Kinyarwanda while uplifting low-income families across our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-[var(--kidspedia-light-green)] rounded-2xl">
              <div className="bg-[var(--kidspedia-green)] p-4 rounded-xl mb-4">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">Multilingual Learning</h3>
              <p className="text-gray-700 text-sm">Books in French, English, and Kinyarwanda celebrating linguistic diversity.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-[var(--kidspedia-light-yellow)] rounded-2xl">
              <div className="bg-[var(--kidspedia-yellow)] p-4 rounded-xl mb-4">
                <Users className="text-[var(--kidspedia-charcoal)]" size={28} />
              </div>
              <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">Women's Empowerment</h3>
              <p className="text-gray-700 text-sm">Every purchase directly supports low-income women and their families.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-2xl">
              <div className="bg-[var(--kidspedia-sky-blue)] p-4 rounded-xl mb-4">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">International Impact</h3>
              <p className="text-gray-700 text-sm">African-rooted, globally minded — quality education for children everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--kidspedia-charcoal)] text-center mb-12">
            Meet the <span className="text-[var(--kidspedia-green)]">Founder</span>
          </h2>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid sm:grid-cols-2 gap-0 items-center">
              <img
                src="/assets/Suzanne Portrait.jpeg"
                alt="Suzanne, Kidspedia Founder"
                className="w-full h-64 sm:h-full object-cover object-top"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-[var(--kidspedia-charcoal)] mb-1">Suzanne Uwabera</h3>
                <p className="text-[var(--kidspedia-green)] font-medium mb-4">Founder &amp; Executive Director</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  An education advocate and social entrepreneur, Suzanne founded Kidspedia to bridge the gap between quality children's books and community development in Rwanda.
                </p>
                <a
                  href="https://www.linkedin.com/in/suzanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-full hover:bg-[#0A66C2]/90 transition-all text-sm font-medium"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
