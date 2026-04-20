"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, PhoneCall, Grid, Sun, Battery, ShieldCheck, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from "../../../../context/LanguageContext"; 

const SolarDetails = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const galleryImages = Array.from({ length: 7 }, (_, i) => `/product/solar/solar-${i + 1}.webp`);

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

  // نصوص الصفحة المترجمة
  const content = {
    ar: {
      title: 'أنظمة الطاقة الشمسية – الحل المستدام لمستقبل الطاقة',
      back: 'العودة للمنتجات',
      intro1: 'أصبحت أنظمة الطاقة الشمسية اليوم من الركائز الأساسية للتحول نحو الطاقة النظيفة والمستدامة. فهي ليست مجرد بديل عن مصادر الطاقة التقليدية، بل استراتيجية متكاملة لتقليل الاعتماد على الوقود الأحفوري، وخفض التكاليف التشغيلية، وتحقيق أعلى مستويات الكفاءة والاعتمادية.',
      intro2: 'في هذا الإطار، تقدم شركة الرهاوي بايب حلولًا شاملة ومتميزة تجمع بين أحدث التقنيات العالمية والخبرة العملية.',
      whyTitle: 'لماذا الطاقة الشمسية مهمة؟',
      whyItems: [
        { t: 'تقليل التكاليف', d: 'استثمار طويل الأمد يساعد على خفض فواتير الكهرباء بشكل ملحوظ.' },
        { t: 'الاستدامة', d: 'الاعتماد على مصدر متجدد وصديق للبيئة يقلل من الانبعاثات الضارة.' },
        { t: 'الاستقلالية', d: 'تمنح القدرة على الاعتماد الذاتي دون التأثر بانقطاعات الشبكة.' },
        { t: 'مرونة الاستخدام', d: 'تناسب المنازل، المزارع، والمنشآت الصناعية بمختلف الأحجام.' },
      ],
      servicesTitle: 'خدماتنا في الطاقة الشمسية',
      services: [
        'تصميم وتنفيذ الأنظمة الشمسية المتكاملة',
        'توريد وتركيب الألواح من أفضل الماركات العالمية',
        'توفير محولات (Inverters) وأنظمة تخزين الطاقة',
        'خدمات الصيانة والدعم الفني الدوري',
        'حلول مزارع الطاقة الشمسية الكبرى'
      ],
      sectorsTitle: 'القطاعات التي نخدمها',
      sectors: ['المنازل والفلل السكنية', 'المشروعات التجارية والمولات', 'المصانع والمنشآت الصناعية', 'المزارع والمشروعات الزراعية', 'الهيئات الحكومية والمجتمعية'],
      qualityTitle: 'الجودة والاعتمادات',
      qualityDesc: 'تلتزم الرهاوي بايب بأعلى معايير الجودة والأمان، وتعتمد على مواصفات IEC و ISO العالمية لضمان تنفيذ المشاريع باحترافية.',
      galleryTitle: 'معرض مشروعات الطاقة الشمسية',
      contactBtn: 'تواصل معنا الآن'
    },
    en: {
      title: 'Solar Systems – Sustainable Energy Solutions',
      back: 'Back to Products',
      intro1: 'Solar energy systems have become essential pillars for the transition towards clean energy. They are not just an alternative to traditional sources, but an integrated strategy to reduce fossil fuel dependence and operational costs.',
      intro2: 'In this context, Al-Rahawy Pipe offers comprehensive solutions combining world-class technology with practical expertise.',
      whyTitle: 'Why Solar Energy?',
      whyItems: [
        { t: 'Cost Reduction', d: 'Long-term investment that significantly reduces electricity bills.' },
        { t: 'Sustainability', d: 'Reliable renewable source that reduces harmful emissions.' },
        { t: 'Independence', d: 'Self-reliance in providing power without grid interruptions.' },
        { t: 'Flexibility', d: 'Suitable for homes, farms, and industrial facilities of all sizes.' },
      ],
      servicesTitle: 'Our Solar Services',
      services: [
        'Integrated Solar System Design & Execution',
        'Supply & Installation from Top Global Brands',
        'Inverters & Energy Storage Solutions',
        'Regular Maintenance & Technical Support',
        'Large-scale Solar Farm Solutions'
      ],
      sectorsTitle: 'Sectors We Serve',
      sectors: ['Residential Homes & Villas', 'Commercial Projects & Malls', 'Factories & Industrial Facilities', 'Farms & Agricultural Projects', 'Governmental Entities'],
      qualityTitle: 'Quality & Certifications',
      qualityDesc: 'Al-Rahawy Pipe is committed to the highest quality standards, following IEC and ISO international specifications.',
      galleryTitle: 'Solar Projects Gallery',
      contactBtn: 'Contact Us Now'
    }
  };

  const t = lang === 'ar' ? content.ar : content.en;

  return (
    <div className="bg-[#001529] min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}> 
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image src="/product/product3.webp" alt="Solar Energy" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#001529] flex flex-col items-center justify-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-white text-4xl md:text-6xl font-black text-center px-6 leading-tight drop-shadow-2xl max-w-5xl">
            {t.title}
          </motion.h1>

          <div className="absolute bottom-10 right-10 z-20" dir="ltr">
            <Link href="/products" className="group flex items-center gap-3 bg-yellow-500/20 hover:bg-yellow-500 text-white px-8 py-4 rounded-full transition-all border border-yellow-400/30 backdrop-blur-md shadow-2xl">
              <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-2" />
              <span className="font-black text-xl">{t.back}</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20">
        {/* 2. Intro Section */}
        <div className="max-w-5xl mb-20 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
          <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-medium">{t.intro1}</p>
          <p className="mt-6 text-yellow-400 font-bold text-lg">{t.intro2}</p>
        </div>

        {/* 3. Why Solar? */}
        <h2 className="text-3xl font-black text-white mb-10 flex items-center gap-4">
          <Sun className="text-yellow-500" size={35} /> {t.whyTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {t.whyItems.map((item, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-3xl border border-white/5 hover:bg-white/20 transition-all">
              <div className="mb-4">
                {i === 0 ? <Battery className="text-yellow-500" /> : i === 1 ? <Sun className="text-yellow-500" /> : i === 2 ? <ShieldCheck className="text-yellow-500" /> : <Grid className="text-yellow-500" />}
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{item.t}</h3>
              <p className="text-blue-100/80 text-sm">{item.d}</p>
            </div>
          ))}
        </div>

        {/* 4. Services & Sectors */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
            <h2 className="text-2xl font-black text-blue-900 mb-8 border-b pb-4">{t.servicesTitle}</h2>
            <ul className="space-y-6">
              {t.services.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-bold">
                  <CheckCircle className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-500 p-10 rounded-[3rem] shadow-2xl text-blue-950">
            <h2 className="text-2xl font-black mb-8 border-b border-blue-950/20 pb-4">{t.sectorsTitle}</h2>
            <div className="grid grid-cols-1 gap-4">
              {t.sectors.map((sector, i) => (
                <div key={i} className="bg-white/20 p-4 rounded-2xl font-black flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-950 rounded-full" />
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Quality Standards */}
        <div className="bg-blue-600/20 border border-blue-400/20 p-8 rounded-3xl mb-24 text-center">
            <h2 className="text-2xl font-black text-white mb-4 italic">{t.qualityTitle}</h2>
            <p className="text-blue-100 max-w-4xl mx-auto font-medium">{t.qualityDesc}</p>
        </div>

        {/* الزرار الجديد - قبل معرض الصور مباشرة */}
        <div className="text-center mb-24">
          <Link href="/contact" className="inline-flex items-center gap-4 bg-yellow-500 text-blue-950 px-16 py-7 rounded-[2rem] font-black text-3xl shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:scale-105 transition-all active:scale-95 group">
            <PhoneCall className="group-hover:rotate-12 transition-transform" size={32} /> {t.contactBtn}
          </Link>
        </div>

        {/* 6. Gallery Section */}
        <div className="bg-white pt-24 pb-24 rounded-t-[4rem] -mx-6 px-6">
          <h2 className="text-4xl font-black mb-16 text-center text-slate-900 flex items-center justify-center gap-4">
            <Grid className="text-yellow-600" size={40} /> {t.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} onClick={() => setCurrentIndex(i)} className="relative h-72 rounded-[2rem] overflow-hidden shadow-2xl cursor-zoom-in border border-gray-100">
                <Image src={img} alt={`Solar Project ${i}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all" />
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
              <Image src={galleryImages[currentIndex]} alt="Solar Zoomed" fill className="object-contain" />
            </motion.div>
            <button onClick={nextImg} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full transition-all"><ChevronRight size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SolarDetails;