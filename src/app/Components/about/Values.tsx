"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Target, ShieldCheck, Zap, HeartHandshake, Microscope } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext"; // تأكد من مسار الكونتكست عندك

const Values = () => {
  const { t, lang } = useLanguage();
  const vData = t.valuesSection; // الوصول لنصوص القيم من الترجـمة

  // الأيقونات والتنسيقات ثابتة لا تتغير بتغير اللغة
  const icons = [
    { icon: <Award size={32} />, grad: "from-blue-500/10" },
    { icon: <Microscope size={32} />, grad: "from-cyan-500/10" },
    { icon: <ShieldCheck size={32} />, grad: "from-emerald-500/10" },
    { icon: <Zap size={32} />, grad: "from-amber-500/10" },
    { icon: <HeartHandshake size={32} />, grad: "from-red-500/10" },
    { icon: <Target size={32} />, grad: "from-indigo-500/10" },
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* خلفية جمالية */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
            {vData.badge}
          </motion.span>
          <motion.h2 className="text-3xl md:text-5xl font-black mt-4 text-white">
            {vData.title} <span className="text-blue-600">{vData.titleHighlight}</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vData.items.map((item: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${icons[i].grad} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:text-white">
                  {icons[i].icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;