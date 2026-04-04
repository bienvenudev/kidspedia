import { ImageWithFallback } from '../components/ImageWithFallback';
import { Users, Target, BookHeart, TrendingUp } from 'lucide-react';

export function Impact() {
  const stats = [
    { icon: Users, number: '300+', label: 'Families Supported', color: 'bg-[var(--kidspedia-green)]' },
    { icon: Target, number: '1,000', label: 'Women Targeted in Q2', color: 'bg-[var(--kidspedia-yellow)]' },
    { icon: BookHeart, number: '1,500+', label: 'Books Distributed', color: 'bg-[var(--kidspedia-sky-blue)]' },
    { icon: TrendingUp, number: '100%', label: 'Profits to Community', color: 'bg-[var(--kidspedia-green)]' },
  ];

  const impactImages = [
    'https://images.unsplash.com/photo-1691256257482-ac753cb26509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbmFsJTIwd29ya3Nob3AlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzUyNTQ1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxBZnJpY2FuJTIwY2hpbGRyZW4lMjByZWFkaW5nJTIwYm9va3MlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzUyNTQ1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1756245994854-1e2cf9108a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjb21tdW5pdHklMjB3b21lbiUyMGVtcG93ZXJtZW50fGVufDF8fHx8MTc3NTI1NDU0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section id="impact" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Our <span className="text-[var(--kidspedia-green)]">Impact</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Every book purchased creates real change in the lives of women and children across Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all">
                <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--kidspedia-charcoal)] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[var(--kidspedia-light-green)] to-[var(--kidspedia-light-yellow)] rounded-3xl p-8 md:p-12 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
                Creating Opportunity Through Education
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Every purchase of a Kidspedia book directly supports low-income women in Rwanda, including construction site workers who are building a better future for their families.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through community workshops and book distribution events, we bring learning materials to children while creating sustainable income opportunities for mothers and caregivers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <ImageWithFallback src={image} alt={`Community impact ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
