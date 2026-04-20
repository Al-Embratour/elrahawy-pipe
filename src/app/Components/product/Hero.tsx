"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";

const ProductsHero = () => {
  const { t, lang } = useLanguage();
  const content = t.productsHero;

  return (

        <section className="relative w-full h-[80vh] md:h-[82vh] flex items-center justify-center overflow-hidden bg-[#000a1a]">
      
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/product/hero_product.webp" 
          alt="Al-Rahawy Products"
          fill
          priority
          className="object-cover opacity-50"
        />
        {/* تدريج سواد علوي يضمن وضوح الناف بار الشفاف */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#000a1a]/40 to-[#000a1a]"></div>
      </div>

      {/* المحتوى - رجعنا للتوسيط مع مسافات بسيطة عشان التوازن */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <br />  <br /> <br /> <br /> <br /> 
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-bold mb-6 tracking-widest uppercase"
        >
         {content.badge}
        </motion.span>

        {/* Title - النصوص الجديدة المختصرة */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl"
        >
          {content.title1} <br />
          <span className="text-blue-500">{content.title2}</span>
        </motion.h1>

        {/* Description - نص أصغر وأوضح */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium opacity-90"
        >
          {content.description}
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-blue-600 mx-auto mt-10 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        ></motion.div>
      </div>

      {/* تلاشي سفلي للربط مع السكاشن القادمة */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000a1a] to-transparent"></div>
    </section>
  );
};

export default ProductsHero;