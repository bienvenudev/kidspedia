import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from '../components/ImageWithFallback';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1774686030499-27af852cbc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjByZWFkaW5nJTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzUyNTQ1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Children reading colorful books' },
  { src: 'https://images.unsplash.com/photo-1761168434263-1a01b07b64d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBwbGF5aW5nJTIwaGFwcHklMjBqb3lmdWx8ZW58MXx8fHwxNzc1MjU0NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Smiling children in front of wooden house' },
  { src: 'https://images.unsplash.com/photo-1691256257482-ac753cb26509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbmFsJTIwd29ya3Nob3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyNTQ1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Children at educational workshop' },
  { src: 'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBZnJpY2FuJTIwY2hpbGRyZW4lMjByZWFkaW5nJTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzUyNTQ1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Boy reading in classroom' },
  { src: 'https://images.unsplash.com/photo-1756245994854-1e2cf9108a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjb21tdW5pdHklMjB3b21lbiUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc3NTI1NDU0MXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Woman in colorful headwrap' },
  { src: 'https://images.unsplash.com/photo-1678225892688-e4a3bd3d9214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxSd2FuZGElMjBjb21tdW5pdHklMjB3b21lbiUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc3NTI1NDU0MXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Woman reading book' },
  { src: 'https://images.unsplash.com/photo-1640717815333-008542541e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBwbGF5aW5nJTIwaGFwcHklMjBqb3lmdWx8ZW58MXx8fHwxNzc1MjU0NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Children walking together' },
  { src: 'https://images.unsplash.com/photo-1581544291234-31340be4b1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyN3MlMjBib29rJTIwYWxwaGFiZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyNTQ1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Colorful alphabet letters' },
  { src: 'https://images.unsplash.com/photo-1703301287877-8840e572a939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjaGlsZHJlbiUyMGVkdWNhdGlvbmFsJTIwd29ya3Nob3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyNTQ1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Young girl painting' },
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
              Moments from our community workshops, book distributions, and behind-the-scenes activities.
            </p>
          </div>

          <Masonry columnsCount={3} gutter="1.5rem">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <ImageWithFallback
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
