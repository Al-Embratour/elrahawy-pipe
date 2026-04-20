"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Drill, Users, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext"; // تأكد من المسار

const Features = () => {
  const { t, lang } = useLanguage(); // سحبنا lang كمان هنا

  // مصفوفة البيانات بتسحب دلوقتي من الـ context
  const featuresData = [
    {
      title: t.features.f1_title,
      desc: t.features.f1_desc,
      icon: <Award className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />,
    },
    {
      title: t.features.f2_title,
      desc: t.features.f2_desc,
      icon: <Drill className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />,
    },
    {
      title: t.features.f3_title,
      desc: t.features.f3_desc,
      icon: <ShieldCheck className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />,
    },
    {
      title: t.features.f4_title,
      desc: t.features.f4_desc,
      icon: <Users className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* عنوان السكشن - التعديل هنا لضبط اللغة والترتيب */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {lang === 'ar' ? (
              // الترتيب العربي
              <>
                {t.features.mainTitle} <span className="text-blue-600">{t.features.companyName}</span> ؟
              </>
            ) : (
              // الترتيب الإنجليزي
              <>
                {t.features.mainTitle} <span className="text-blue-600">{t.features.companyName}</span>?
              </>
            )}
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* الكروت - كما هي بدون أي تغيير في التصميم */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;