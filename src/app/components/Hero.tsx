import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Community-Outreach.jpg"
          alt="Kidspedia community outreach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--kidspedia-charcoal)]/85 via-[var(--kidspedia-charcoal)]/70 to-[var(--kidspedia-green)]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Children. <br />
            <span className="text-[var(--kidspedia-yellow)]">Uplifting Women.</span> <br />
            One Book at a Time.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Multilingual children's books in French, English, and Kinyarwanda that fund women's empowerment in Rwanda.
            Every purchase creates opportunity for low-income families and puts learning in a child's hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/books"
              className="bg-[var(--kidspedia-green)] text-white px-8 py-4 rounded-full hover:bg-[var(--kidspedia-green)]/90 transition-all shadow-lg text-lg text-center"
            >
              Explore Our Books
            </Link>
            <Link
              to="/get-involved"
              className="bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-8 py-4 rounded-full hover:bg-[var(--kidspedia-yellow)]/90 transition-all shadow-lg text-lg text-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
