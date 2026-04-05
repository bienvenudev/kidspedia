import { Linkedin } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* About Kidspedia */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
              About <span className="text-[var(--kidspedia-green)]">Kidspedia</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Kidspedia is an international platform of education professionals and board members creating children's books that do more than teach — they fund real change.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in Kigali, Rwanda, we work at the intersection of childhood education and women's empowerment, building materials that reach children in English today and in French and Kinyarwanda soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
            <div>
              <div className="w-10 h-1 bg-[var(--kidspedia-green)] mb-4 rounded-full"></div>
              <h3 className="font-semibold text-[var(--kidspedia-charcoal)] text-lg mb-2">Multilingual Learning</h3>
              <p className="text-gray-600 leading-relaxed">Currently publishing in English, with French and Kinyarwanda editions in development.</p>
            </div>
            <div>
              <div className="w-10 h-1 bg-[var(--kidspedia-yellow)] mb-4 rounded-full"></div>
              <h3 className="font-semibold text-[var(--kidspedia-charcoal)] text-lg mb-2">Women's Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">Every purchase directly supports low-income women and their families in Rwanda.</p>
            </div>
            <div>
              <div className="w-10 h-1 bg-[var(--kidspedia-sky-blue)] mb-4 rounded-full"></div>
              <h3 className="font-semibold text-[var(--kidspedia-charcoal)] text-lg mb-2">International Reach</h3>
              <p className="text-gray-600 leading-relaxed">African-rooted and globally minded — quality education for children everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--kidspedia-charcoal)] mb-12">
            Meet the <span className="text-[var(--kidspedia-green)]">Founder</span>
          </h2>

          <div className="max-w-2xl bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid sm:grid-cols-2 gap-0 items-center">
              <img
                src="/assets/Suzanne Portrait.jpeg"
                alt="Suzanne Uwabera, Kidspedia Founder"
                className="w-full h-64 sm:h-full object-cover object-top"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-[var(--kidspedia-charcoal)] mb-1">Suzanne Uwabera</h3>
                <p className="text-[var(--kidspedia-green)] font-medium mb-4">Founder &amp; Executive Director</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  An education advocate and social entrepreneur, Suzanne founded Kidspedia to bridge the gap between quality children's books and community development in Rwanda.
                </p>
                <a
                  href="https://www.linkedin.com/in/suzanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-5 py-2.5 rounded-lg hover:bg-[#0A66C2]/90 transition-all text-sm font-medium"
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
