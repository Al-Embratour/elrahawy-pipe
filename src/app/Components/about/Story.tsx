"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react"; // أيقونة أنيقة للقائمة
import { useLanguage } from "../../../context/LanguageContext";

const Story = () => {
  const { t } = useLanguage();
  const s = t.aboutStory;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب الأول: النصوص */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase">
                {s.badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                {s.title}
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
              <p>{s.description1}</p>
              <p>{s.description2}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">{s.listTitle}</h4>
              <ul className="grid gap-3">
                {s.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* الجانب الثاني: الصورة */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* برواز ديكوري خلف الصورة */}
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-blue-600 rounded-[3rem] z-0 hidden md:block"></div>
            
            <div className="relative z-10 h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/about/about.jpg" // حط صورتك هنا يا هندسة
                alt="Al-Rahawy Success Story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay خفيف فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
            </div>

            {/* بطاقة خبرة صغيرة فوق الصورة */}
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden xl:block border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-blue-600">35+</div>
                <div className="text-sm font-bold text-slate-600 leading-tight uppercase">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Story;