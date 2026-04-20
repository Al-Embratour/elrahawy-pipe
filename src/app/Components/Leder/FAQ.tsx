"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from "../../../context/LanguageContext";

const FAQ = () => {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!t.faq) return null;

  return (
    <section 
      className="py-24 bg-[#000a1a]" // تم تغيير اللون هنا ليكون نفس سكشن الخدمات
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6">
        {/* العناوين - تغيير نصوص العنوان للأبيض */}
        <div className="text-center mb-16">
          <h2 className="text-white font-black text-3xl md:text-5xl mb-4">
            {t.faq.title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* قائمة الأسئلة */}
        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.questions.map((item: any, index: number) => (
            <div 
              key={index}
              className={`border-2 transition-all duration-300 rounded-2xl overflow-hidden ${
                activeIndex === index 
                ? "border-sky-500 bg-[#001229] shadow-xl shadow-sky-500/10" 
                : "border-white/10 bg-[#001229]/50 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 font-bold text-white transition-colors"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className={`w-6 h-6 flex-shrink-0 ${activeIndex === index ? "text-sky-400" : "text-gray-500"}`} />
                  <span className={`md:text-lg ${lang === 'en' ? 'text-left' : 'text-right'}`}>
                    {item.q}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? "rotate-180 text-sky-400" : "text-gray-500"
                  }`} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;