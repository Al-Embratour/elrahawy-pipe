"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, PhoneCall, Grid, Zap, Activity, Cpu, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from "../../../../context/LanguageContext"; 

const PumpsDetails = () => {
  const { lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const galleryImages = Array.from({ length: 19 }, (_, i) => `/product/Pump/Pump-${i + 1}.webp`);

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

  return (
    <div className="bg-blue-900 min-h-screen" dir={lang === 'ar' ? 'rtl' : 'ltr'}> 
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image src="/product/product2.webp" alt="Pumps" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-black text-center px-6 leading-tight drop-shadow-2xl max-w-5xl">
            {lang === 'ar' ? 'المواتير والطلمبات ولوحات الكهرباء – حلول متكاملة' : 'Integrated Motors & Pumps Solutions'}
          </h1>

          {/* زر الرجوع - في أسفل الهيرو ناحية اليمين */}
          <div className="absolute bottom-10 right-10 z-20" dir="ltr">
            <Link 
              href="/products" 
              className="group flex items-center gap-3 bg-blue-600/30 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition-all border border-blue-400/30 backdrop-blur-md shadow-2xl"
            >
              <ArrowLeft size={24} className="transition-transform group-hover:-translate-x-1" />
              <span className="font-black text-xl">
                {lang === 'ar' ? 'العودة للمنتجات' : 'Back to Products'}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20">
        <div className="max-w-5xl mb-16 text-xl text-blue-100 font-medium leading-relaxed">
          {lang === 'ar' ? 'نوفر مجموعة شاملة من المواتير والطلمبات والكابلات المعتمدة عالميًا.' : 'Providing a comprehensive range of globally certified motors, pumps, and cables.'}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl">
            <h2 className="text-2xl font-black mb-8 text-blue-900 border-b pb-4 flex items-center gap-3">
              <Cpu className="text-blue-600" /> {lang === 'ar' ? 'المواتير المتاحة' : 'Available Motors'}
            </h2>
            <div className="space-y-4">
              {['KPS (التركي)', 'جينفك (GENVIK)', 'بلاتنيوم (Platinum)'].map(m => (
                <div key={m} className="bg-slate-50 p-4 rounded-xl border-blue-600 border-s-4 font-bold text-blue-800">{m}</div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-800/40 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 shadow-2xl text-white text-center">
             <h2 className="text-2xl font-black mb-8 flex items-center justify-center gap-3 border-b border-white/20 pb-4">
               <Activity className="text-blue-400" /> {lang === 'ar' ? 'أفضل الماركات' : 'Top Brands'}
             </h2>
             <div className="grid grid-cols-2 gap-4">
                {['KPS', 'Platinum', 'Smart', 'Duke', 'Gold'].map(b => (
                  <div key={b} className="p-3 bg-white/5 rounded-lg border border-white/10 font-bold">{b}</div>
                ))}
             </div>
          </div>
        </div>

        <div className="text-center mb-32">
          <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl active:scale-95">
            <PhoneCall /> {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </Link>
        </div>
      </div>

      <div className="bg-white pt-24 pb-24 rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center flex items-center justify-center gap-4 text-slate-900">
            <Grid className="text-blue-600" size={40} /> {lang === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} onClick={() => setCurrentIndex(i)} className="relative h-72 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in border border-gray-100">
                <Image src={img} alt={`Pump-${i}`} fill className="object-cover" />
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
            <motion.div key={currentIndex} initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="relative w-full max-w-5xl h-[80vh]">
              <Image src={galleryImages[currentIndex]} alt="Zoomed" fill className="object-contain" />
            </motion.div>
            <button onClick={nextImg} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[1001] bg-white/10 p-4 rounded-full transition-all"><ChevronRight size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PumpsDetails;