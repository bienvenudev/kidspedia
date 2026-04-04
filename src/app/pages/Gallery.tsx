import { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/assets/Community-Outreach.jpg', alt: 'Kidspedia community outreach event' },
  { src: '/assets/ABC OF ANAYA COVER.jpg', alt: 'ABC of Anaya — book cover' },
  { src: '/assets/Suzanne-in-community-outreach.jpg', alt: 'Suzanne during community outreach' },
  { src: '/assets/ABC OF ANAYA COPIES.jpg', alt: 'ABC of Anaya — multiple copies' },
  { src: '/assets/Suzanne Portrait.jpg', alt: 'Suzanne, Kidspedia Founder' },
  { src: '/assets/IMG-20241011-WA0040.jpg', alt: 'Kidspedia community event' },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex]);

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

          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}>
            <Masonry gutter="1.5rem">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
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
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
          >
            <ChevronRight size={32} />
          </button>

          {/* Caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full">
            {galleryImages[lightboxIndex].alt} — {lightboxIndex + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </div>
  );
}
