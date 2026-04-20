"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Settings, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";

const ServicesPreview = () => {
  const { t, lang } = useLanguage();
  const s = t.servicesContent;

  return (
    <section className="py-16 bg-slate-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* رأس القسم */}
        <div className="mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/40">
                <Settings size={24} className="animate-spin-slow" />
              </div>
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase">
                {s.title}
              </h2>
            </div>
            <p className={`text-gray-400 text-lg max-w-xl ${lang === 'ar' ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-blue-600`}>
              {s.description}
            </p>
          </div>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {s.items.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="relative h-70 rounded-[2.5rem] bg-slate-800 border border-white/5 overflow-hidden shadow-2xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10"></div>
                <div className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} w-12 h-12 rounded-2xl bg-blue-600/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 z-20`}>
                  {lang === 'ar' ? <ArrowLeft size={24} className="text-white" /> : <ArrowRight size={24} className="text-white" />}
                </div>
              </div>

              <div className="px-4 space-y-4">
                <h3 className="text-2xl font-black text-white group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زرار استكشف - تعديل المحاذاة هنا */}
        <div className={`flex w-full ${lang === 'ar' ? 'justify-end' : 'justify-end'}`}>
           {/* ملحوظة: بما أن الصفحة تقلب dir بالكامل، فاستخدام justify-end في العربي (RTL) سيجعله أقصى اليسار */}
           {/* وإذا أردت التحكم اليدوي المطلق بعيداً عن اتجاه الصفحة، نستخدم justify-start مع العربي */}
          <Link 
            href="/products" 
            className={`group flex items-center gap-3 bg-white/5 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl border border-white/10 transition-all duration-300 shadow-2xl`}
          >
            <span className="font-bold">{s.btnAll}</span>
            {lang === 'ar' ? (
              <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
            ) : (
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            )}
          </Link>
        </div>

      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

export default ServicesPreview;