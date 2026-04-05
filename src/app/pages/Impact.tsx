import { Users, Target, BookHeart, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, number: '300+', label: 'Families Supported', color: 'bg-[var(--kidspedia-green)]' },
  { icon: Target, number: '1,000', label: 'Women Targeted in Q2', color: 'bg-[var(--kidspedia-yellow)]' },
  { icon: BookHeart, number: '1,500+', label: 'Books Distributed', color: 'bg-[var(--kidspedia-sky-blue)]' },
  { icon: TrendingUp, number: '100%', label: 'Profits to Community', color: 'bg-[var(--kidspedia-green)]' },
];

export function Impact() {
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

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--kidspedia-charcoal)] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Community Outreach Feature */}
          <div className="rounded-2xl overflow-hidden shadow-md mb-12">
            <div className="grid md:grid-cols-2 items-center">
              <img
                src="/assets/Suzanne-in-community-outreach.jpg"
                alt="Suzanne during community outreach"
                className="w-full h-72 md:h-96 object-cover object-center"
              />
              <div className="bg-white p-8 md:p-12">
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
          </div>

          {/* Community Photos */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/assets/Community-Outreach.jpg"
                alt="Kidspedia community outreach event"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="/assets/IMG-20241011-WA0040.jpg"
                alt="Kidspedia community event"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
