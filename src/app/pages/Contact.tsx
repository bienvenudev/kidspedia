import { Mail, MapPin, Briefcase, School, Users, Newspaper, MessageCircle } from 'lucide-react';

const contactOptions = [
  { icon: Briefcase, title: 'Partner with Kidspedia', description: 'Interested in collaborating or partnering with us?', email: 'partnerships@kidspedia.com', color: 'bg-[var(--kidspedia-green)]' },
  { icon: School, title: 'For Schools & Organizations', description: 'Want to buy books for your school or organization?', email: 'schools@kidspedia.com', color: 'bg-[var(--kidspedia-yellow)]' },
  { icon: Users, title: 'Volunteer Opportunities', description: 'Want to contribute your time and skills?', email: 'volunteer@kidspedia.com', color: 'bg-[var(--kidspedia-sky-blue)]' },
  { icon: Newspaper, title: 'Press & Media', description: 'Press inquiries and media requests', email: 'media@kidspedia.com', color: 'bg-[var(--kidspedia-green)]' },
];

export function Contact() {
  return (
    <div className="pt-16 md:pt-20">
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-4">
              Contact <span className="text-[var(--kidspedia-green)]">Us</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We'd love to hear from you. Choose the best way to reach us below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-[var(--kidspedia-green)]">
                <div className="flex items-start gap-4">
                  <div className={`${option.color} p-3 rounded-xl flex-shrink-0`}>
                    <option.icon className={option.color.includes('yellow') ? 'text-[var(--kidspedia-charcoal)]' : 'text-white'} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2 text-lg">{option.title}</h3>
                    <p className="text-gray-600 mb-3">{option.description}</p>
                    <a href={`mailto:${option.email}`} className="text-[var(--kidspedia-green)] hover:underline font-medium">
                      {option.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[var(--kidspedia-light-green)] to-[var(--kidspedia-light-yellow)] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[var(--kidspedia-green)] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">Location</h3>
                <p className="text-gray-700">Kigali, Rwanda</p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--kidspedia-yellow)] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-[var(--kidspedia-charcoal)]" size={28} />
                </div>
                <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">Email</h3>
                <a href="mailto:hello@kidspedia.com" className="text-[var(--kidspedia-green)] hover:underline">hello@kidspedia.com</a>
              </div>
              <div className="text-center">
                <div className="bg-[var(--kidspedia-sky-blue)] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">WhatsApp</h3>
                <a href="https://wa.me/250788000000" target="_blank" rel="noopener noreferrer" className="text-[var(--kidspedia-green)] hover:underline">+250 788 000 000</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
