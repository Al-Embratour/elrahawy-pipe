"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle, Droplets, Construction, Globe, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLanguage } from "../../context/LanguageContext"; 

const ContactPage = () => {
  const { lang } = useLanguage();
  
  // نصوص الصفحة
  const content = {
    ar: {
      hero: "تواصل مع الرهاوي بايب",
      subHero: "نحن هنا لتقديم الدعم الفني وتلبية احتياجات مشاريعكم بأعلى كفاءة",
      infoTitle: "بيانات التواصل",
      mainOffice: "المقر الرئيسي",
      mainAddr: "الرهاوي، منشأة القناطر، جيزة، مصر",
      miniaOffice: "فرع المنيا (الرهاوي بايب)",
      miniaAddr: "الطريق الغربي - نزلة كوبري ملوي - المنيا",
      pipesDept: "قسم المواسير والدعم الفني",
      pumpsDept: "قسم الطلمبات والغطاسات",
      formTitle: "طلب استفسار أو اقتباس سعر",
      formSubTitle: "املأ البيانات وسيقوم القسم المختص بالرد عليك خلال 24 ساعة.",
      formNameLabel: "الاسم",
      formNamePlaceholder: "الاسم بالكامل",
      formEmail: "البريد الإلكتروني",
      formPhone: "رقم الهاتف",
      formSubject: "الخدمة المطلوبة",
      formMsg: "رسالتك (تفاصيل المشروع)",
      formBtn: "إرسال البيانات",
      mapsTitle: "مواقعنا اللوجستية",
      services: ["حفر الآبار", "مواسير بلاستيك PVC", "طلمبات أعماق", "شبكات ري حديثة", "طاقة شمسية"],
      branch1Name: "المقر الرئيسي - الرهاوي بايب للمقاولات",
      branch2Name: "فرع المنيا - الرهاوي بايب"
    },
    en: {
      hero: "Contact Al-Rahawy Pipe",
      subHero: "We are here to provide technical support for your engineering projects",
      infoTitle: "Contact Details",
      mainOffice: "Headquarters",
      mainAddr: "El-Rahawy, Manshiet Al-Kanater, Giza, Egypt",
      miniaOffice: "Minia Branch",
      miniaAddr: "Western Road - Mallawi Bridge Exit - Minia",
      pipesDept: "Pipes & Technical Support",
      pumpsDept: "Pumps & Submersibles",
      formTitle: "Inquiry or Quote Request",
      formSubTitle: "Fill in the details and our specialized department will respond within 24 hours.",
      formNameLabel: "Name",
      formNamePlaceholder: "Full Name",
      formEmail: "Email Address",
      formPhone: "Phone Number",
      formSubject: "Requested Service",
      formMsg: "Your Message (Project Details)",
      formBtn: "Send Information",
      mapsTitle: "Our Strategic Locations",
      services: ["Well Drilling", "PVC Plastic Pipes", "Deep Well Pumps", "Modern Irrigation", "Solar Energy"],
      branch1Name: "Headquarters - Al-Rahawy Pipe Contracting",
      branch2Name: "Minia Branch - Al-Rahawy Pipe"
    }
  };

  const t = lang === 'ar' ? content.ar : content.en;

  return (
    <div className="bg-slate-50 min-h-screen pb-20" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* 1. Hero Section - مع إضافة صورة الخلفية */}
      <section className="relative pt-32 pb-44 px-6 overflow-hidden min-h-[400px] flex items-center justify-center">
        {/* صورة الهيرو - ضع المسار الخاص بك هنا */}
        <img 
          src="/contact/hero-contact.png" 
          alt="Contact Al-Rahawy" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* طبقة شفافة لتوضيح الخط */}
        <div className="absolute inset-0 bg-[#001529]/75 z-0"></div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-7xl font-black mb-6"
          >
            {t.hero}
          </motion.h1>
          <p className="text-blue-200 text-lg md:text-2xl max-w-3xl mx-auto font-medium opacity-90">
            {t.subHero}
          </p>
        </div>
      </section>

      {/* 2. Main Grid (Info & Form) */}
      <div className="container mx-auto px-6 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* الجانب الأيسر: المعلومات */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ x: lang === 'ar' ? 50 : -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border border-blue-50"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Globe size={20} />
                </span>
                {t.infoTitle}
              </h2>

              <div className="space-y-10">
                {/* المقر الرئيسي */}
                <div className="group">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-lg mb-1">{t.mainOffice}</h3>
                      <p className="text-slate-500 leading-relaxed">{t.mainAddr}</p>
                    </div>
                  </div>
                </div>

                {/* فرع المنيا */}
                <div className="group">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-lg mb-1">{t.miniaOffice}</h3>
                      <p className="text-slate-500 leading-relaxed">{t.miniaAddr}</p>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* أرقام الهواتف المقسمة */}
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-6 rounded-3xl flex items-center justify-between border border-blue-100 group hover:bg-blue-600 transition-all">
                    <div className="flex items-center gap-4 text-blue-900 group-hover:text-white">
                      <Construction size={28} />
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">{t.pipesDept}</p>
                        <p className="text-xl font-black" dir="ltr">01126800344</p>
                      </div>
                    </div>
                    <a href="tel:01126800344" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-3xl flex items-center justify-between border border-emerald-100 group hover:bg-emerald-600 transition-all">
                    <div className="flex items-center gap-4 text-emerald-900 group-hover:text-white">
                      <Droplets size={28} />
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">{t.pumpsDept}</p>
                        <p className="text-xl font-black" dir="ltr">01030306559</p>
                      </div>
                    </div>
                    <a href="tel:01030306559" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-md">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                {/* الإيميل */}
                <div className="flex items-center gap-4 p-5 bg-slate-900 rounded-[2rem] text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs opacity-50 uppercase font-bold tracking-tighter italic">Official Support</p>
                    <p className="font-bold text-lg select-all">info@elrahawypipe.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* الجانب الأيمن: الفورم */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ x: lang === 'ar' ? -50 : 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100"
            >
              <h2 className="text-3xl font-black text-slate-900 mb-4">{t.formTitle}</h2>
              <p className="text-slate-500 mb-10 font-medium">{t.formSubTitle}</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-800 mr-2">{t.formNameLabel}</label>
                    <input required type="text" placeholder={t.formNamePlaceholder} className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-blue-600 focus:bg-white outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-800 mr-2">{t.formEmail}</label>
                    <input required type="email" placeholder="example@mail.com" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-blue-600 focus:bg-white outline-none transition-all" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black text-slate-800 mr-2">{t.formPhone}</label>
                    <input required type="tel" placeholder="01XXXXXXXXX" className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-blue-600 focus:bg-white outline-none transition-all" />
                  </div>
                  {/* قسم الخدمة مع السهم */}
                  <div className="space-y-2 relative">
                    <label className="text-sm font-black text-slate-800 mr-2">{t.formSubject}</label>
                    <div className="relative">
                        <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl p-4 focus:border-blue-600 focus:bg-white outline-none cursor-pointer appearance-none">
                            {t.services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className={`absolute ${lang === 'ar' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none`} size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-800 mr-2">{t.formMsg}</label>
                  <textarea rows={5} placeholder="..." className="w-full bg-slate-50 border-2 border-slate-50 rounded-3xl p-5 focus:border-blue-600 focus:bg-white outline-none transition-all resize-none"></textarea>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-[2rem] text-xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-4 group">
                  <Send size={24} className="group-hover:translate-x-2 transition-transform" />
                  {t.formBtn}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 3. الخرائط المزدوجة */}
      <section className="container mx-auto px-6 mt-24">
        <h2 className="text-4xl font-black text-center text-slate-900 mb-16">{t.mapsTitle}</h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* خريطة الرهاوي */}
          <div className="space-y-4">
             <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
               <p className="font-black text-slate-700">{t.branch1Name}</p>
             </div>
             <div className="h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13797.108500203099!2d31.034509!3d30.1721087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458597405232d3b%3A0xc3911f9301659779!2z2KfZhNix2YfYp9mI2Yog2KjYp9mK2Kgg2YTZhNmF2YLYp9mI2YTYp9iq!5e0!3m2!1sar!2seg!4v1714560000000" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
             </div>
          </div>

          {/* خريطة المنيا */}
          <div className="space-y-4">
             <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100 flex items-center gap-3">
               <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
               <p className="font-black text-slate-700">{t.branch2Name}</p>
             </div>
             <div className="h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0000000000!2d30.840000!3d27.730000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b23XXXXXX!2z2YXYp9mI2YjZiiAtINin2YTZhdmG2YrYpw!5e0!3m2!1sar!2seg!4v1714560000000" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;