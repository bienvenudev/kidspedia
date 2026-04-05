import { Mail, MapPin, Briefcase, School, Users, Newspaper, MessageCircle } from 'lucide-react';

const WHATSAPP = '+33601402401';
const EMAIL = 'susuzy041@gmail.com';

const contactOptions = [
  {
    icon: Briefcase,
    title: 'Partner with Kidspedia',
    description: 'Interested in collaborating or partnering with us?',
    color: 'bg-[var(--kidspedia-green)]',
    action: { label: 'Message us on WhatsApp', href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I\'m interested in partnering with Kidspedia.')}`, external: true },
  },
  {
    icon: School,
    title: 'Schools & Organizations',
    description: 'Want to buy books in bulk for your school or community?',
    color: 'bg-[var(--kidspedia-yellow)]',
    action: { label: 'Message us on WhatsApp', href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I\'d like to order Kidspedia books for my school/organization.')}`, external: true },
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Want to contribute your time and skills to our mission?',
    color: 'bg-[var(--kidspedia-sky-blue)]',
    action: { label: 'Send us an email', href: `mailto:${EMAIL}?subject=Volunteer Inquiry`, external: false },
  },
  {
    icon: Newspaper,
    title: 'Press & Media',
    description: 'Press inquiries, interviews, and media requests.',
    color: 'bg-[var(--kidspedia-green)]',
    action: { label: 'Send us an email', href: `mailto:${EMAIL}?subject=Press Inquiry`, external: false },
  },
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
              We'd love to hear from you. Choose what best describes your enquiry below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[var(--kidspedia-green)] transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`${option.color} p-3 rounded-xl flex-shrink-0`}>
                    <option.icon
                      className={option.color.includes('yellow') ? 'text-[var(--kidspedia-charcoal)]' : 'text-white'}
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2 text-lg">{option.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{option.description}</p>
                    <a
                      href={option.action.href}
                      target={option.action.external ? '_blank' : undefined}
                      rel={option.action.external ? 'noopener noreferrer' : undefined}
                      className="text-[var(--kidspedia-green)] hover:underline font-medium text-sm"
                    >
                      {option.action.label} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8">
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
                <a href={`mailto:${EMAIL}`} className="text-[var(--kidspedia-green)] hover:underline break-all text-sm">
                  {EMAIL}
                </a>
              </div>

              <div className="text-center">
                <div className="bg-[var(--kidspedia-sky-blue)] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-[var(--kidspedia-charcoal)] mb-2">WhatsApp</h3>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--kidspedia-green)] hover:underline text-sm"
                >
                  +33 6 01 40 24 01
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
