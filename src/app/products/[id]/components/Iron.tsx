"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, PhoneCall, Grid, X, ChevronLeft, ChevronRight, ArrowLeft, Construction, Settings, ShieldAlert } from 'lucide-react';
import { useLanguage } from "../../../../context/LanguageContext"; 

const SteelDetails = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // مصفوفة الصور (4 صور كما طلبت)
  const galleryImages = Array.from({ length: 4 }, (_, i) => `/product/steel/steel-${i + 1}.webp`);

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

  // نصوص الصفحة المترجمة بالكامل
  const content = {
    ar: {
      title: 'مواسير الحديد ومستلزماته – أساس القوة والمتانة في البنية التحتية',
      back: 'العودة للمنتجات',
      intro1: 'تُعد مواسير الحديد ومستلزماتها من الركائز الجوهرية في مشاريع البنية التحتية والإنشاءات، فهي ليست مجرد أنابيب لنقل السوائل، بل حلول هندسية تضمن القوة والاستدامة.',
      intro2: 'توفر شركة الرهاوي بايب مجموعة شاملة بجميع المقاسات والسمكات لتلبية احتياجات المشاريع الكبرى وفق أعلى المواصفات العالمية.',
      pipesTitle: 'أنواع مواسير الحديد',
      pipesItems: [
        { t: 'مواسير مجلفنة', d: 'مقاومة للصدأ والتآكل، مثالية لشبكات المياه والهواء.' },
        { t: 'مواسير ضغط عالي', d: 'مصممة لشبكات البترول والغاز والأنظمة الصناعية الثقيلة.' }
      ],
      fittingsTitle: 'مستلزمات المواسير',
      fittings: [
        'وصلات حديد (كوع – تي – جلب – بوش) بمقاسات متنوعة',
        'فلانشات حديد لضمان إحكام التشغيل في الأنظمة الكبيرة',
        'محابس وصمامات عالية الجودة للتحكم في التدفق',
        'حوامل وتثبيتات لحلول تركيب آمنة ودقيقة'
      ],
      appsTitle: 'تطبيقات مواسير الحديد',
      apps: ['شبكات المياه والصرف الصحي', 'خطوط البترول والغاز', 'المشروعات الصناعية الثقيلة', 'أنظمة التكييف والتدفئة', 'البنية التحتية للمباني والمنشآت'],
      galleryTitle: 'معرض منتجات الحديد',
      contactBtn: 'تواصل معنا الآن'
    },
    en: {
      title: 'Steel Pipes & Fittings – The Foundation of Strength in Infrastructure',
      back: 'Back to Products',
      intro1: 'Steel pipes and fittings are essential pillars in infrastructure and construction projects, providing integrated engineering solutions for strength and safety.',
      intro2: 'Al-Rahawy Pipe provides a comprehensive range of steel pipes in all sizes and thicknesses, meeting global specifications.',
      pipesTitle: 'Types of Steel Pipes',
      pipesItems: [
        { t: 'Galvanized Pipes', d: 'Rust and corrosion resistant, suitable for water and air networks.' },
        { t: 'High-Pressure Pipes', d: 'Used in oil, gas, and heavy industrial systems.' }
      ],
      fittingsTitle: 'Pipe Fittings',
      fittings: [
        'Steel fittings (Elbow - Tee - Socket - Bushing)',
        'Steel flanges for secure operation in large systems',
        'High-quality valves for flow control',
        'Supports and fixings for safe installation'
      ],
      appsTitle: 'Applications',
      apps: ['Water & Sewage Networks', 'Oil & Gas Pipelines', 'Heavy Industrial Projects', 'HVAC Systems', 'Building Infrastructure'],
      galleryTitle: 'Steel Products Gallery',
      contactBtn: 'Contact Us Now'
    }
  };

  const t = lang === 'ar' ? content.ar : content.en;

  return (
    <div className="bg-slate-900 min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}> 
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image src="/product/product4.webp" alt="Steel Pipes" fill className="object-cover grayscale-[30%] opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col items-center justify-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-white text-3xl md:text-6xl font-black text-center px-6 leading-tight drop-shadow-2xl max-w-5xl">
            {t.title}
          </motion.h1>

          <div className="absolute bottom-10 right-10 z-20" dir="ltr">
            <Link href="/products" className="group flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-full transition-all border border-white/20 backdrop-blur-md">
              <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-2" />
              <span className="font-black text-xl">{t.back}</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20">
        {/* 2. Intro Section */}
        <div className="max-w-5xl mb-20 border-s-8 border-orange-600 bg-white/5 p-10 rounded-e-[2rem]">
          <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-medium">{t.intro1}</p>
          <p className="mt-6 text-orange-500 font-bold text-lg italic">{t.intro2}</p>
        </div>

        {/* 3. Types Section */}
        <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
          <Construction className="text-orange-600" size={35} /> {t.pipesTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {t.pipesItems.map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 hover:border-orange-600/50 transition-all">
              <h3 className="text-orange-500 font-black text-2xl mb-4">{item.t}</h3>
              <p className="text-slate-300 text-lg leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        {/* 4. Fittings & Apps */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 border-b pb-4 flex items-center gap-3">
               <Settings className="text-orange-600" /> {t.fittingsTitle}
            </h2>
            <ul className="space-y-6">
              {t.fittings.map((fit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-bold">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                  <span>{fit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-600 p-10 rounded-[3rem] shadow-2xl text-white">
            <h2 className="text-2xl font-black mb-8 border-b border-white/20 pb-4 flex items-center gap-3">
              <ShieldAlert /> {t.appsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {t.apps.map((app, i) => (
                <div key={i} className="bg-black/10 p-4 rounded-2xl font-black flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Contact Button - قبل المعرض */}
        <div className="text-center mb-24">
          <Link href="/contact" className="inline-flex items-center gap-4 bg-orange-600 text-white px-16 py-7 rounded-2xl font-black text-3xl shadow-2xl hover:bg-orange-700 hover:scale-105 transition-all active:scale-95 group">
            <PhoneCall className="group-hover:rotate-12 transition-transform" size={32} /> {t.contactBtn}
          </Link>
        </div>

        {/* 6. Gallery Section */}
        <div className="bg-white pt-24 pb-24 rounded-t-[4rem] -mx-6 px-6">
          <h2 className="text-4xl font-black mb-16 text-center text-slate-900 flex items-center justify-center gap-4">
            <Grid className="text-orange-600" size={40} /> {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} onClick={() => setCurrentIndex(i)} className="relative h-72 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in border border-slate-100">
                <Image src={img} alt={`Steel Product ${i}`} fill className="object-cover" />
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
              <Image src={galleryImages[currentIndex]} alt="Steel Zoomed" fill className="object-contain" />
            </motion.div>
            <button onClick={nextImg} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full transition-all"><ChevronRight size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SteelDetails;