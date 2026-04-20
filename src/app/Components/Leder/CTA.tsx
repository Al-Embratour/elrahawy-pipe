"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext"; // تأكد من المسار عندك

const CTA = () => {
  const { t } = useLanguage();
  const c = t.ctaContent; // اختصار للداتا

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* ديكور خلفية خفيف */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            {c.heading1} 
            <span className="text-blue-500  m-2 py-2"><br />{c.companyName}</span>
            {c.heading2}
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            {c.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl shadow-blue-600/20"
            >
              {c.btnPrimary}
            </Link>
            <Link 
              href="/products" 
              className="bg-transparent border-2 border-white/20 hover:border-white text-white px-10 py-4 rounded-full font-bold text-xl transition-all"
            >
              {c.btnSecondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;