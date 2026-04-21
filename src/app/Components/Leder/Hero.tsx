"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext"; 
import Link from "next/link"; // استيراد Link للتنقل

const Hero = () => {
  const { lang, t } = useLanguage();
  const heroImage = "/hero-home.webp"; 

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* سكشن الصورة الخلفية - بدون تغيير */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={t.hero.welcome + t.hero.companyPart2}
          className="w-full h-full object-cover opacity-50" 
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/80"></div>
      </div>

      {/* المحتوى النصي - مرتبط باللغة */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-blue-400 text-xl md:text-2xl font-medium mb-4 tracking-wide">
          
            {t.hero.welcome}
          </p>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-lg">
            {/* هنا بنلون جزء من الاسم بناءً على اللغة */}
            {lang === 'ar' ? (
              <>
                 {t.hero.companyPart1}<span className="text-blue-600">  {t.hero.companyPart2}</span>
              </>
            ) : (
              <>
                <span className="text-blue-600">{t.hero.companyPart1} </span> {t.hero.companyPart2}
              </>
            )}
          </h1>
          
          {/* خط ديكور */}
          <div className="h-1.5 w-32 bg-blue-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-xl md:text-3xl text-gray-100 leading-relaxed font-light max-w-4xl mx-auto drop-shadow-md">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* زرار المنتجات */}
            <Link href="/products">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-900/20">
                {t.hero.btnPrimary}
              </button>
            </Link>

            {/* زرار التواصل */}
            <Link href="/contact">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all">
                {t.hero.btnSecondary}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;