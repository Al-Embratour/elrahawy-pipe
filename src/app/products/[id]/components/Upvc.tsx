"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, PhoneCall, Grid, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from "../../../../context/LanguageContext"; 

const UpvcDetails = () => {
  const { t, lang } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
  const d = t?.upvcPage || { title: "مواسير UPVC", intro: "تحميل...", features: [], apps: [], specs: [] };
  const galleryImages = Array.from({ length: 16 }, (_, i) => `/product/upvc/img-${i + 1}.webp`);

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
    <div className="bg-blue-900 min-h-screen"> 
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image src="/product/product1.webp" alt="UPVC Pipes" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-7xl font-black text-center px-6 leading-tight drop-shadow-2xl">
            {d.title}
          </h1>

          {/* زر الرجوع - في أسفل الهيرو ناحية اليمين */}
          <div className="absolute bottom-10 right-10 z-20">
            <Link 
              href="/products" 
              className="group flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-blue-900 px-8 py-4 rounded-full transition-all border border-white/20 backdrop-blur-md shadow-2xl"
              dir="ltr" // لضمان ترتيب السهم ثم النص
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
        <div className="max-w-4xl mb-16 text-xl text-blue-100 leading-relaxed font-medium">
          {d.intro}
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 mb-20 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl">
            <h2 className="text-2xl font-black mb-8 text-slate-900 flex items-center gap-3 border-b pb-4">
              <CheckCircle className="text-blue-600" /> {d.featuresTitle}
            </h2>
            <div className="grid gap-6">
              {d.features?.map((feat: any, i: number) => (
                <div key={i} className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="font-bold text-blue-700 text-lg">{feat.t}</span>
                  <span className="text-gray-600 text-sm">{feat.d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-black mb-8 text-white">{d.appsTitle}</h2>
              <ul className="space-y-4">
                {d.apps?.map((app: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 p-4 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-medium text-blue-50">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-32">
          <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-blue-100 shadow-2xl active:scale-95">
            <PhoneCall /> {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </Link>
        </div>
      </div>

      <div className="bg-white pt-24 pb-24 rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center flex items-center justify-center gap-4 text-slate-900">
            <Grid className="text-blue-600" size={40} /> {lang === 'ar' ? 'معرض صور المنتج' : 'Product Gallery'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i} whileHover={{ scale: 1.05 }} onClick={() => setCurrentIndex(i)} 
                className="relative h-72 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in border border-gray-100"
              >
                <Image src={img} alt={`UPVC ${i}`} fill className="object-cover" />
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

export default UpvcDetails;