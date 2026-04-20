"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, PhoneCall, Grid, X, ChevronLeft, ChevronRight, ArrowLeft, Globe, Award, Zap } from 'lucide-react';
import { useLanguage } from "../../../../context/LanguageContext"; 

const IndianPipes = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // مصفوفة الصور (10 صور كما طلبت)
  const galleryImages = Array.from({ length: 10 }, (_, i) => `/product/Pipes/pipe-${i + 1}.webp`);

  const nextImg = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % galleryImages.length);
  }, [currentIndex, galleryImages.length]);

  const prevImg = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex !== null) setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [currentIndex, galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") lang === 'ar' ? prevImg() : nextImg();
      if (e.key === "ArrowLeft") lang === 'ar' ? nextImg() : prevImg();
      if (e.key === "Escape") setCurrentIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, nextImg, prevImg, lang]);

  // الترجمة الكاملة
  const content = {
    ar: {
      title: 'المواسير البلاستيكية الهندية – قوة، مرونة، واعتمادية عالية',
      back: 'العودة للمنتجات',
      intro1: 'تُعد أنظمة المواسير البلاستيكية من الركائز الأساسية في قطاعات المياه، الصرف، والزراعة. فهي حلول استراتيجية تضمن انسيابية التدفق وتقليل تكاليف الصيانة.',
      intro2: 'نوفر لعملائنا مجموعة شاملة من المواسير البلاستيكية الهندية المعتمدة عالميًا لتلبية احتياجات المشاريع بأعلى درجات الجودة.',
      featuresTitle: 'المزايا الأساسية',
      features: [
        { t: 'جودة معتمدة', d: 'مصنوعة وفق المعايير العالمية (ISO – ASTM – DIN).' },
        { t: 'متانة عالية', d: 'مقاومة للتآكل والصدأ والكيماويات بشكل كامل.' },
        { t: 'مرونة التركيب', d: 'خفة الوزن وسهولة التوصيل توفر الوقت والجهد.' },
        { t: 'تكلفة اقتصادية', d: 'عمر افتراضي طويل يقلل من تكاليف الاستبدال.' }
      ],
      sectorsTitle: 'القطاعات التي تخدمها',
      sectors: [
        'شبكات المياه والصرف الصحي',
        'أنظمة الري الزراعي الحديثة',
        'مشروعات البنية التحتية والمدن',
        'المصانع والمنشآت الصناعية',
        'شبكات الحماية من الحرائق'
      ],
      whyTitle: 'لماذا اختيار المواسير الهندية؟',
      whyDesc: 'تنوع في المنتجات، أداء موثوق تحت الضغط العالي، وكفاءة مستدامة صديقة للبيئة مع خدمة دعم فني متميزة.',
      galleryTitle: 'معرض الصور (المنتجات الهندية)',
      contactBtn: 'تواصل معنا الآن'
    },
    en: {
      title: 'Indian Plastic Pipes – Strength, Flexibility & High Reliability',
      back: 'Back to Products',
      intro1: 'Plastic piping systems are essential pillars in water, sewage, and agriculture sectors, ensuring smooth flow and reducing maintenance costs.',
      intro2: 'We provide a comprehensive range of internationally certified Indian plastic pipes to meet project needs with the highest quality.',
      featuresTitle: 'Key Advantages',
      features: [
        { t: 'Certified Quality', d: 'Manufactured according to global standards (ISO – ASTM – DIN).' },
        { t: 'High Durability', d: 'Fully resistant to corrosion, rust, and chemicals.' },
        { t: 'Installation Flexibility', d: 'Lightweight and easy connection saves time and effort.' },
        { t: 'Cost-Effective', d: 'Long life span reduces replacement and maintenance costs.' }
      ],
      sectorsTitle: 'Sectors We Serve',
      sectors: [
        'Water & Sewage Networks',
        'Modern Agricultural Irrigation',
        'Infrastructure & Smart Cities',
        'Factories & Industrial Facilities',
        'Fire Protection & High Pressure'
      ],
      whyTitle: 'Why Choose Indian Pipes?',
      whyDesc: 'Product diversity, reliable performance under high pressure, and eco-friendly sustainable efficiency with excellent technical support.',
      galleryTitle: 'Indian Products Gallery',
      contactBtn: 'Contact Us Now'
    }
  };

  const t = lang === 'ar' ? content.ar : content.en;

  return (
    <div className="bg-[#0f172a] min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}> 
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image src="/product/product5.webp" alt="Indian Pipes" fill className="object-cover opacity-70" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/60 to-[#0f172a] flex flex-col items-center justify-center">
          <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-white text-3xl md:text-6xl font-black text-center px-6 leading-tight drop-shadow-2xl max-w-5xl">
            {t.title}
          </motion.h1>

          {/* زر الرجوع */}
          <div className="absolute bottom-10 right-10 z-20" dir="ltr">
            <Link href="/products" className="group flex items-center gap-3 bg-emerald-500/20 hover:bg-emerald-500 text-white px-8 py-4 rounded-full transition-all border border-emerald-400/30 backdrop-blur-md shadow-2xl">
              <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-2" />
              <span className="font-black text-xl">{t.back}</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20">
        {/* 2. Intro Section */}
        <div className="max-w-5xl mb-20">
          <div className="bg-emerald-900/20 border-r-4 border-emerald-500 p-8 rounded-l-3xl">
            <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed font-medium">{t.intro1}</p>
            <p className="mt-6 text-emerald-400 font-bold text-lg">{t.intro2}</p>
          </div>
        </div>

        {/* 3. Features Grid */}
        <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
          <Award className="text-emerald-500" size={35} /> {t.featuresTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {t.features.map((feat, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-emerald-500/10 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="text-emerald-500" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{feat.t}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feat.d}</p>
            </div>
          ))}
        </div>

        {/* 4. Sectors & Why Us */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 border-b pb-4 flex items-center gap-3">
               <Globe className="text-emerald-600" /> {t.sectorsTitle}
            </h2>
            <div className="space-y-4">
              {t.sectors.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl text-emerald-900 font-bold">
                  <Zap size={20} className="text-emerald-500" /> {s}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-600 p-10 rounded-[3rem] shadow-2xl text-white flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-6 italic">{t.whyTitle}</h2>
            <p className="text-emerald-50 text-xl leading-relaxed font-medium">
              {t.whyDesc}
            </p>
          </div>
        </div>

        {/* 5. Contact Button - قبل المعرض */}
        <div className="text-center mb-24">
          <Link href="/contact" className="inline-flex items-center gap-4 bg-emerald-500 text-white px-16 py-7 rounded-full font-black text-3xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:scale-105 transition-all active:scale-95 group">
            <PhoneCall className="group-hover:rotate-12 transition-transform" size={32} /> {t.contactBtn}
          </Link>
        </div>

        {/* 6. Gallery Section */}
        <div className="bg-white pt-24 pb-24 rounded-t-[4rem] -mx-6 px-6">
          <h2 className="text-4xl font-black mb-16 text-center text-slate-900 flex items-center justify-center gap-4">
            <Grid className="text-emerald-600" size={40} /> {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} onClick={() => setCurrentIndex(i)} className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-zoom-in border border-slate-100">
                <Image src={img} alt={`Indian Pipe ${i}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4">
            <button onClick={() => setCurrentIndex(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-[1001]"><X size={40} /></button>
            <button onClick={prevImg} className="absolute left-4 md:left-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full transition-all"><ChevronLeft size={40} /></button>
            <motion.div key={currentIndex} initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative w-full max-w-5xl h-[80vh]">
              <Image src={galleryImages[currentIndex]} alt="Indian Pipe Zoomed" fill className="object-contain" />
            </motion.div>
            <button onClick={nextImg} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full transition-all"><ChevronRight size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndianPipes;