"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Wallet, PhoneCall } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext"; // تأكد من المسار

const Team = () => {
  const { t, lang } = useLanguage();
  const teamData = t.teamSection;

  const renderMember = (member: any, icon: any, delay: number) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-200 p-6 rounded-4xl flex flex-col items-center text-center group hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
    >
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { 
          className: "text-slate-400 group-hover:text-white transition-colors" 
        })}
      </div>
      <h4 className="text-slate-900 font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">
        {member.name}
      </h4>
      <p className="text-slate-500 text-sm font-medium uppercase tracking-tighter">
        {member.role}
      </p>
    </motion.div>
  );

  return (
    <section className="py-24 bg-slate-50 relative" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* العناوين */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            {teamData.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900">
            {teamData.title} <span className="text-blue-600">{teamData.titleHighlight}</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>

        {/* قسم الإدارة المالية */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-600/10 rounded-xl">
               <Wallet className="text-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{teamData.departments.finance}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.members.finance.map((m: any, i: number) => 
              renderMember(m, <User size={35} />, i)
            )}
          </div>
        </div>

        {/* قسم المبيعات والكهرباء */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-cyan-600/10 rounded-xl">
               <PhoneCall className="text-cyan-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">{teamData.departments.sales}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.members.sales.map((m: any, i: number) => 
              renderMember(m, <User size={35} />, i)
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;