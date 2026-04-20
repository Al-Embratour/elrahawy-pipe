"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MapPin, Phone, User, MessageSquare, Mail, X, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext"; 

const Footer = () => {
  const { lang, t } = useLanguage();
  const [selectedManager, setSelectedManager] = useState<any>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const managers = useMemo(() => [
    { 
      id: 1, 
      name: lang === 'ar' ? "م / سامي عبدالنبي" : "Eng. Samy Abdelnaby", 
      phones: ["01006565474", "01225451000"], 
      image: "/maneger/Samy.jpg" 
    },
    { 
      id: 2, 
      name: lang === 'ar' ? "أ / أيمن عبدالنبي" : "Mr. Ayman Abdelnaby", 
      phones: ["01224048111", "01110764444"], 
      image: "/maneger/Ayman.jpg" 
    },
    { 
      id: 3, 
      name: lang === 'ar' ? "م / محمود عبدالنبي" : "Eng. Mahmoud Abdelnaby", 
      phones: ["01091111129"], 
      image: "/maneger/Mahmoud.jpg" 
    },
  ], [lang]);

  // قائمة الخدمات (يفضل إضافتها في ملف الترجمة ولكن وضعتها هنا كاحتياط)
  const servicesList = lang === 'ar' 
    ? ["مواسير UPVC", "طلمبات أعماق", "حفر آبار ميكانيكي", "أنظمة طاقة شمسية", "توريد مستلزمات ري"]
    : ["UPVC Pipes", "Submersible Pumps", "Mechanical Well Drilling", "Solar Systems", "Irrigation Supplies"];

  const googleMapsLinks = {
    main: `https://maps.google.com/?q=${encodeURIComponent("شركة الرهاوي بايب للمقاولات")}`,
    second: `https://maps.google.com/?q=${encodeURIComponent("الرهاوي بايب المنيا")}`
  };

  const companyEmail = "info@elrahawypipe.com";

  if (!t || !t.footer) return null;

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-6 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* تغيير الـ Grid ليصبح 5 أعمدة في الشاشات الكبيرة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* العمود الأول: عن الشركة */}
          <div className="space-y-6 lg:col-span-1">
            <div className="relative w-40 h-12">
               <Image src="/logo1.webp" alt="Al-Rahawy" fill className="object-contain brightness-110" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.about}
            </p>
          </div>

          {/* العمود الجديد: خدماتنا */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-blue-500">
              {lang === 'ar' ? "خدماتنا" : "Our Services"}
            </h3>
            <ul className="space-y-4 text-gray-400">
              {servicesList.map((service, index) => (
                <li key={index} className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors text-sm">
                  {lang === 'ar' ? (
                    <ChevronLeft size={14} className="text-blue-500 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ChevronRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                  )}
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الفروع */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-blue-500">{t.footer.locations}</h3>
            <ul className="space-y-6 text-gray-300">
              <li className="group">
                <a href={googleMapsLinks.main} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white transition-colors">
                  <MapPin className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-sm">
                    <b className="block text-white mb-1 group-hover:text-blue-400">{t.footer.mainBranch}</b>
                    {t.footer.mainAddress}
                  </span>
                </a>
              </li>
              <li className="group">
                <a href={googleMapsLinks.second} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white transition-colors">
                  <MapPin className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-sm">
                    <b className="block text-white mb-1 group-hover:text-blue-400">{t.footer.secondBranch}</b>
                    {t.footer.secondAddress}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: اتصل بنا */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-blue-500">{t.footer.contactUs}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={20} />
                </div>
                <div className="text-sm">
                  <p className="text-xs text-gray-500">{t.footer.pipesDept}</p>
                  <a href="tel:01224048111" dir="ltr" className="font-medium hover:text-blue-400 transition-colors">01126800344</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500/20 transition-colors">
                  <Phone size={20} />
                </div>
                <div className="text-sm">
                  <p className="text-xs text-gray-500">{t.footer.pumpsDept}</p>
                  <a href="tel:01006565474" dir="ltr" className="font-medium hover:text-cyan-400 transition-colors">01030306559</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-300 border-t border-white/5 pt-4 group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div className="text-sm overflow-hidden">
                  <p className="text-xs text-gray-500">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                  <a href={`mailto:${companyEmail}`} className="font-medium hover:text-purple-400 transition-colors truncate block text-[13px]">
                    {companyEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الخامس: مجلس الإدارة */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-blue-500">{t.footer.board}</h3>
            <div className="grid gap-3">
              {managers.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedManager(m)}
                  className="flex items-center gap-3 p-2 rounded-xl bg-white/5 w-full transition-all hover:bg-white/10 border border-transparent hover:border-blue-500/30 group text-right"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500 transition-all relative shrink-0">
                    <Image src={m.image} alt={m.name} fill className="object-cover" />
                  </div>
                  <span className="text-[13px] font-bold text-gray-300 group-hover:text-white truncate">{m.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} {lang === 'ar' ? 'الرهاوي بايب. جميع الحقوق محفوظة.' : 'Al-Rahawy Pipe. All Rights Reserved.'}</p>
        </div>
      </div>

      {/* مودالات المدير والتكبير (بدون تغيير) */}
      <AnimatePresence>
        {selectedManager && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedManager(null)} className="absolute inset-0 bg-black/85 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-slate-900 border border-blue-500/30 p-8 rounded-[2.5rem] max-w-md w-full z-10 shadow-2xl overflow-y-auto max-h-[90vh]">
              <button onClick={() => setSelectedManager(null)} className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} text-gray-500 hover:text-white transition-colors`}><X size={24} /></button>
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-blue-600 mb-4 cursor-pointer group shadow-lg" onClick={() => setEnlargedImage(selectedManager.image)}>
                  <Image src={selectedManager.image} alt={selectedManager.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><Plus className="text-white" size={28} /></div>
                </div>
                <h2 className="text-2xl font-bold text-white text-center">{selectedManager.name}</h2>
                <p className="text-blue-500 text-sm font-bold text-center uppercase tracking-wider">{t.footer.role}</p>
              </div>
              <div className="space-y-5">
                {selectedManager.phones.map((p: string, i: number) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all shadow-inner text-center">
                    <p dir="ltr" className="font-bold text-2xl mb-5 text-blue-400 tracking-widest">{p}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <a href={`tel:${p}`} className="flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white rounded-xl text-sm font-bold transition-all hover:bg-blue-500 active:scale-95 shadow-md"><Phone size={16} /> {t.footer.call}</a>
                      <a href={`https://wa.me/20${p.substring(1)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white rounded-xl text-sm font-bold transition-all hover:bg-green-500 active:scale-95 shadow-md"><MessageSquare size={16} /> {t.footer.whatsapp}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {enlargedImage && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setEnlargedImage(null)} className="absolute inset-0 bg-black/95 cursor-pointer" />
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="relative max-w-4xl max-h-[90vh] z-10 shadow-2xl">
              <button onClick={() => setEnlargedImage(null)} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2"><X size={28} /></button>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10">
                <img src={enlargedImage} alt="Enlarged Profile" className="w-full h-auto max-h-[90vh] object-contain" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;