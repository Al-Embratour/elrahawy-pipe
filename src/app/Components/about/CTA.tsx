"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ShoppingCart } from "lucide-react"; // استيراد أيقونة السلة للمنتجات
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";

const AboutCTA = () => {
  const { t, lang } = useLanguage();
  const cta = t.ctaAbout;

  return (
    <section className="py-20 container mx-auto px-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-blue-600 rounded-[3rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl shadow-blue-500/20"
      >
        {/* خلفية جمالية */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            {cta.title}
          </h2>
          <p className="text-blue-50 text-xl mb-12 opacity-90 leading-relaxed">
            {cta.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* زر التواصل الأساسي */}
            <Link
              href="/contact"
              className="flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <PhoneCall size={24} />
              {cta.buttonText}
            </Link>
            
            {/* زر استعراض المنتجات - التعديل هنا */}
            <Link
              href="/products"
              className="flex items-center gap-3 bg-blue-700 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all active:scale-95"
            >
              <ShoppingCart size={24} />
              {cta.secondaryButton}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;