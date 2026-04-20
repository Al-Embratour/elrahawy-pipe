"use client";
import React from 'react';
import Image from 'next/image';
// استدعاء الهوك الخاص باللغة
import { useLanguage } from "../../../context/LanguageContext";

const Partners = () => {
  // سحب اللغة والترجمة مباشرة من الكونتكست
  const { lang, t } = useLanguage();

  const partnerLogos = [
    { id: 1, src: '/partners/p1.png', alt: 'Partner 1' },
    { id: 2, src: '/partners/p2.png', alt: 'Partner 2' },
    { id: 3, src: '/partners/p3.png', alt: 'Partner 3' },
    { id: 4, src: '/partners/p4.png', alt: 'Partner 4' },
    { id: 5, src: '/partners/p5.png', alt: 'Partner 5' },
    { id: 6, src: '/partners/p6.png', alt: 'Partner 6' },
  ];

  return (
    <section 
      className="py-20 bg-white overflow-hidden border-t border-slate-100"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 mb-12 text-center">
        {/* استخدام t.partners من الكونتكست */}
        <h2 className="text-slate-900 font-black text-3xl md:text-5xl mb-4">
          {t.partners.title}
        </h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          {t.partners.subtitle}
        </p>
      </div>

      <div className="relative flex overflow-hidden group py-10">
        <div className={`flex items-center whitespace-nowrap ${lang === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="mx-8 md:mx-16 w-32 h-20 md:w-40 md:h-24 relative opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .animate-marquee-rtl {
          display: flex;
          animation: marquee-rtl 40s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(33.33%); }
        }

        .group:hover .animate-marquee,
        .group:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;