"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext"; // تأكد من المسار عندك

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {t.stats.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-4xl md:text-6xl font-black text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-blue-100 text-lg md:text-xl font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;