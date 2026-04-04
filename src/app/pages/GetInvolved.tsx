import { ShoppingBag, Gift, Share2, MessageCircle } from 'lucide-react';

export function GetInvolved() {
  const whatsappOrderMessage = encodeURIComponent("Hi! I'd like to order the ABC of Anaya book from Kidspedia.");
  const whatsappSponsorMessage = encodeURIComponent("Hi! I'm interested in sponsoring books for a community through Kidspedia.");
  const shareText = encodeURIComponent("Check out Kidspedia - empowering children and uplifting women through multilingual children's books!");

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    if (shareUrls[platform]) window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="pt-16 md:pt-20">
      <section id="get-involved" className="py-20 md:py-32 bg-gradient-to-br from-[var(--kidspedia-light-green)] via-white to-[var(--kidspedia-light-yellow)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--kidspedia-charcoal)] mb-6">
              Get <span className="text-[var(--kidspedia-green)]">Involved</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every book puts learning in a child's hands and income in a mother's pocket.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Buy a Book */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-[var(--kidspedia-green)]">
              <div className="bg-gradient-to-br from-[var(--kidspedia-green)] to-[var(--kidspedia-green)]/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--kidspedia-charcoal)] mb-4">Buy a Book, Change a Life</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every purchase of our multilingual children's books directly funds women's empowerment programs and supports low-income families in Rwanda.
              </p>
              <div className="bg-[var(--kidspedia-light-green)] rounded-2xl p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--kidspedia-charcoal)]">ABC of Anaya</span>
                  <span className="text-xl font-bold text-[var(--kidspedia-green)]">$15</span>
                </div>
              </div>
              <a
                href={`https://wa.me/250788000000?text=${whatsappOrderMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[var(--kidspedia-green)] text-white px-6 py-4 rounded-full hover:bg-[var(--kidspedia-green)]/90 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </a>
            </div>

            {/* Sponsor Books */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-[var(--kidspedia-yellow)]">
              <div className="bg-gradient-to-br from-[var(--kidspedia-yellow)] to-[var(--kidspedia-yellow)]/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Gift className="text-[var(--kidspedia-charcoal)]" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--kidspedia-charcoal)] mb-4">Sponsor Books for a Community</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Organizations, schools, and NGOs can purchase books in bulk for distribution to communities.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start"><span className="text-[var(--kidspedia-green)] mr-2">✓</span><span>Bulk pricing available</span></li>
                <li className="flex items-start"><span className="text-[var(--kidspedia-green)] mr-2">✓</span><span>Custom distribution support</span></li>
                <li className="flex items-start"><span className="text-[var(--kidspedia-green)] mr-2">✓</span><span>Impact reporting included</span></li>
              </ul>
              <a
                href={`https://wa.me/250788000000?text=${whatsappSponsorMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[var(--kidspedia-yellow)] text-[var(--kidspedia-charcoal)] px-6 py-4 rounded-full hover:bg-[var(--kidspedia-yellow)]/90 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                Start Conversation
              </a>
            </div>

            {/* Spread the Word */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-[var(--kidspedia-sky-blue)]">
              <div className="bg-gradient-to-br from-[var(--kidspedia-sky-blue)] to-[var(--kidspedia-sky-blue)]/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Share2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--kidspedia-charcoal)] mb-4">Spread the Word</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Can't purchase right now? Share our mission with your network — every share amplifies our impact.
              </p>
              <div className="space-y-3">
                <button onClick={() => handleShare('twitter')} className="w-full bg-gray-100 text-[var(--kidspedia-charcoal)] px-6 py-3 rounded-full hover:bg-gray-200 transition-all">Share on Twitter</button>
                <button onClick={() => handleShare('facebook')} className="w-full bg-gray-100 text-[var(--kidspedia-charcoal)] px-6 py-3 rounded-full hover:bg-gray-200 transition-all">Share on Facebook</button>
                <button onClick={() => handleShare('linkedin')} className="w-full bg-gray-100 text-[var(--kidspedia-charcoal)] px-6 py-3 rounded-full hover:bg-gray-200 transition-all">Share on LinkedIn</button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 italic text-lg">
              Together, we're building a future where every child can learn and every woman can thrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
