"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext"; 

const ProductGrid = () => {
  const { t, lang } = useLanguage();
  const content = t.productCards;

  return (
    // الخلفية بقت رمادي فاتح جداً (Slate 50)
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content.items.map((product: any, index: number) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              // الكارت بقى أبيض والحدود رمادي خفيف جداً
              className="group bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden flex flex-col hover:border-blue-500/40 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              {/* صورة المنتج */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* الأوفرلاي بقى أخف عشان يناسب الثيم الفاتح */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* محتوى الكارت */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="absolute -top-10 right-8 bg-blue-600 p-4 rounded-2xl shadow-xl shadow-blue-200 text-white">
                  <CheckCircle2 size={24} />
                </div>

                {/* النص بقى كحلي غامق بدل الأبيض */}
                <h3 className="text-2xl font-black text-slate-800 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>

                <ul className="space-y-4 mb-8 flex-grow">
                  {product.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm md:text-base leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* زرار عرض التفاصيل - ألوان فاتحة متناسقة */}
                <Link
                  href={`/products/${product.id}`}
                  className="group/btn relative overflow-hidden w-full bg-slate-100 border border-slate-200 text-slate-800 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  <Eye size={22} className="group-hover/btn:scale-110 transition-transform" />
                  {content.btnText}
                  {lang === 'ar' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;