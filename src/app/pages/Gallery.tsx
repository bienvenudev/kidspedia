import Masonry from 'react-responsive-masonry';

const galleryImages = [
  { src: '/assets/Community-Outreach.jpg', alt: 'Kidspedia community outreach event' },
  { src: '/assets/ABC OF ANAYA COVER.jpg', alt: 'ABC of Anaya — book cover' },
  { src: '/assets/Suzanne-in-community-outreach.jpg', alt: 'Suzanne during community outreach' },
  { src: '/assets/ABC OF ANAYA COPIES.jpg', alt: 'ABC of Anaya — multiple copies' },
  { src: '/assets/Suzanne Portrait.jpg', alt: 'Suzanne, Kidspedia Founder' },
  { src: '/assets/IMG-20241011-WA0040.jpg', alt: 'Kidspedia community event' },
];

export function Gallery() {
  return (
    <div className="pt-16 md:pt-20">
      <section id="gallery" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Our <span className="text-[var(--kidspedia-green)]">Gallery</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Moments from our community outreach, book launches, and the people behind Kidspedia.
            </p>
          </div>

          <Masonry columnsCount={3} gutter="1.5rem">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </div>
  );
}
