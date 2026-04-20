"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, PhoneCall, Grid, X, ChevronLeft, ChevronRight, ArrowLeft, Droplets, Sprout, Settings2, Cpu } from 'lucide-react';
import { useLanguage } from "../../../../context/LanguageContext"; 

const IrrigationDetails = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // مصفوفة الصور (6 صور كما طلبت)
  const galleryImages = Array.from({ length: 6 }, (_, i) => `/product/irrigation/irrigation-${i + 1}.webp`);

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

  // الترجمة الكاملة للمحتوى
  const content = {
    ar: {
      title: 'أنظمة شبكات الري – حلول متكاملة لإدارة المياه بكفاءة',
      back: 'العودة للمنتجات',
      intro1: 'تُعد أنظمة شبكات الري من الركائز الأساسية في الزراعة الحديثة. فهي حلول استراتيجية تهدف إلى الاستخدام الأمثل للموارد المائية، رفع الإنتاجية، وخفض التكاليف التشغيلية.',
      intro2: 'توفر شركة الرهاوي بايب لعملائها مجموعة شاملة من أنظمة الري المصممة وفق أحدث المعايير العالمية لتناسب مختلف أنواع الأراضي والمحاصيل.',
      systemsTitle: 'أنظمة شبكات الري المتوفرة',
      systems: [
        { t: 'الري بالتنقيط', d: 'يضمن وصول الماء مباشرة إلى جذور النباتات بدقة وكفاءة عالية.' },
        { t: 'الري بالرش', d: 'توزيع متجانس للمياه على مساحات واسعة مناسب للحقول الكبيرة.' },
        { t: 'الري المحوري (Pivot)', d: 'حلول مبتكرة للمزارع الكبيرة تضمن إدارة فعالة للاستهلاك.' },
        { t: 'شبكات الري الذكية', d: 'أنظمة متصلة بتقنيات (IoT) للتحكم والجدولة عن بُعد.' }
      ],
      componentsTitle: 'مكونات الشبكة الأساسية',
      components: ['أنابيب الري بجميع المقاسات (PVC، PE، HDPE)', 'المرشات والنقاطات عالية الجودة', 'الفلاتر ومحطات الترشيح المتطورة', 'المحابس وصمامات التحكم الدقيق', 'وحدات التحكم الآلي والذكية'],
      whyTitle: 'الرهاوي بايب – شريكك في التنمية الزراعية',
      whyDesc: 'بخبرتنا الطويلة، نسعى لنكون الشريك الاستراتيجي من خلال توفير أنظمة تحقق أعلى إنتاجية مع الاستخدام الأمثل لكل قطرة مياه.',
      galleryTitle: 'معرض صور أنظمة الري',
      contactBtn: 'تواصل معنا الآن'
    },
    en: {
      title: 'Irrigation Systems – Integrated Efficient Water Solutions',
      back: 'Back to Products',
      intro1: 'Irrigation systems are essential pillars of modern agriculture. They are strategic solutions aimed at optimal water resource management and productivity.',
      intro2: 'Al-Rahawy Pipe provides a comprehensive range of irrigation systems designed to suit various soil types and crops globally.',
      systemsTitle: 'Available Irrigation Systems',
      systems: [
        { t: 'Drip Irrigation', d: 'Ensures water reaches plant roots directly with high precision.' },
        { t: 'Sprinkler Irrigation', d: 'Uniform water distribution over wide areas for large fields.' },
        { t: 'Pivot Irrigation', d: 'Innovative solutions for large farms ensuring efficient consumption.' },
        { t: 'Smart Irrigation', d: 'IoT-connected systems for remote control and scheduling.' }
      ],
      componentsTitle: 'Main Components',
      components: ['Irrigation pipes of all sizes (PVC, PE, HDPE)', 'High-quality Sprinklers & Drippers', 'Advanced filtration stations', 'Precision flow control valves', 'Smart automated control units'],
      whyTitle: 'Al-Rahawy Pipe – Your Agricultural Partner',
      whyDesc: 'With our expertise, we aim to be your strategic partner by providing systems that achieve max productivity with optimal water use.',
      galleryTitle: 'Irrigation Projects Gallery',
      contactBtn: 'Contact Us Now'
    }
  };

  const t = lang === 'ar' ? content.ar : content.en;

  return (
    <div className="bg-[#052c24] min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}> 
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image src="/product/product6.webp" alt="Irrigation Systems" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#052c24] flex flex-col items-center justify-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-white text-3xl md:text-6xl font-black text-center px-6 drop-shadow-2xl max-w-5xl">
            {t.title}
          </motion.h1>

          {/* زر الرجوع - أسفل اليمين والسهم بيبص لبره */}
          <div className="absolute bottom-10 right-10 z-20" dir="ltr">
            <Link href="/products" className="group flex items-center gap-3 bg-teal-500/20 hover:bg-teal-500 text-white px-8 py-4 rounded-full transition-all border border-teal-400/30 backdrop-blur-md shadow-2xl">
              <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-2" />
              <span className="font-black text-xl">{t.back}</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20">
        {/* 2. Intro Card */}
        <div className="max-w-5xl mb-24 bg-gradient-to-br from-teal-900/40 to-emerald-900/40 p-10 rounded-[3rem] border border-teal-500/20 backdrop-blur-md">
          <p className="text-xl md:text-2xl text-teal-50 leading-relaxed font-medium">{t.intro1}</p>
          <div className="mt-8 flex items-center gap-4 text-emerald-400">
             <Sprout size={30} />
             <p className="font-bold text-lg">{t.intro2}</p>
          </div>
        </div>

        {/* 3. Systems Grid */}
        <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
          <Settings2 className="text-teal-400" size={35} /> {t.systemsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {t.systems.map((sys, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-teal-500 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    {i === 3 ? <Cpu size={24} /> : <Droplets size={24} />}
                 </div>
                 <h3 className="text-white font-black text-2xl">{sys.t}</h3>
              </div>
              <p className="text-teal-100/70 text-lg">{sys.d}</p>
            </div>
          ))}
        </div>

        {/* 4. Components & Why Us */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 border-b pb-4 flex items-center gap-3">
               <Grid className="text-teal-600" /> {t.componentsTitle}
            </h2>
            <ul className="space-y-6">
              {t.components.map((comp, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-bold">
                  <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal-600 p-10 rounded-[3rem] shadow-2xl text-white flex flex-col justify-center text-center">
            <Sprout size={60} className="mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-black mb-6">{t.whyTitle}</h2>
            <p className="text-teal-50 text-xl leading-relaxed italic">{t.whyDesc}</p>
          </div>
        </div>

        {/* 5. Contact Button - قبل المعرض مباشرة */}
        <div className="text-center mb-24">
          <Link href="/contact" className="inline-flex items-center gap-4 bg-emerald-500 text-white px-16 py-7 rounded-2xl font-black text-3xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:scale-105 transition-all active:scale-95 group">
            <PhoneCall className="group-hover:rotate-12 transition-transform" size={32} /> {t.contactBtn}
          </Link>
        </div>

        {/* 6. Gallery Section */}
        <div className="bg-white pt-24 pb-24 rounded-t-[4rem] -mx-6 px-6">
          <h2 className="text-4xl font-black mb-16 text-center text-slate-900 flex items-center justify-center gap-4">
            <Grid className="text-teal-600" size={40} /> {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} onClick={() => setCurrentIndex(i)} className="relative h-72 rounded-[2rem] overflow-hidden shadow-2xl cursor-zoom-in border border-slate-100">
                <Image src={img} alt={`Irrigation ${i}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox التقليب */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4">
            <button onClick={() => setCurrentIndex(null)} className="absolute top-8 right-8 text-white/70 hover:text-white z-[1001]"><X size={40} /></button>
            <button onClick={prevImg} className="absolute left-4 md:left-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full"><ChevronLeft size={40} /></button>
            <motion.div key={currentIndex} initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative w-full max-w-5xl h-[80vh]">
              <Image src={galleryImages[currentIndex]} alt="Irrigation Zoomed" fill className="object-contain" />
            </motion.div>
            <button onClick={nextImg} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full"><ChevronRight size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IrrigationDetails;