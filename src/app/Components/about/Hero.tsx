"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // استيراد مكون الصور
import { useLanguage } from "../../../context/LanguageContext"; 

const AboutHero = () => {
  const { t } = useLanguage();
  const h = t.aboutHero; 

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 1. الخلفية - صورة مع تأثيرات ضوئية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/about-hero.webp" // تأكد من وجود الصورة بهذا الاسم في فولدر public/about/
          alt="Al-Rahawy Pipe Hero"
          fill
          priority
          className="object-cover opacity-60" // تقليل الشفافية قليلاً لإبراز الكلام
        />
        
        {/* طبقة سواد متدرجة لضمان وضوح النص (The Emperor Glow) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-white"></div>
        
        {/* توهج أزرق خافت في الأركان */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* عنوان السكشن */}
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {h.title} <span className="text-blue-600">{h.companyName}</span>
          </h1>

          {/* خط فاصل أنيق */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-blue-600 shadow-[0_0_10px_#2563eb]"></div>
            <div className="w-3 h-3 rotate-45 border-2 border-blue-600 shadow-[0_0_10px_#2563eb]"></div>
            <div className="h-[2px] w-12 bg-blue-600 shadow-[0_0_10px_#2563eb]"></div>
          </div>

          {/* الوصف المترجم */}
          <p className="text-slate-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
            {h.description}
          </p>
        </motion.div>
      </div>

      {/* الربط مع السكشن التالي */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AboutHero;