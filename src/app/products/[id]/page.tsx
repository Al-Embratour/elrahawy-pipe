"use client";
import React from 'react';
import { useParams } from 'next/navigation';

// استيراد المكونات
import UpvcDetails from './components/Upvc';
import PumpsDetails from './components/Pumps';
import SolarDetails from './components/Solar';
import SteelDetails from './components/Iron';
import IrrigationDetails from './components/Irrigation';
import IndianPipes from './components/Pipes';

const ProductPage = () => {
  const params = useParams();
  const id = params.id;

  const renderProductContent = () => {
    switch (id) {
      // حالة مواسير الـ UPVC
      case "upvc-pipes":
        return <UpvcDetails />;

      // حالة المواتير والطلمبات
      case "submersible-pumps":
        return <PumpsDetails />;

      // حالة أنظمة الطاقة الشمسية (الربط الجديد)
      case "solar-systems": // تأكد أن هذا الـ id هو المستخدم في رابط صفحة المنتجات الرئيسية
        return <SolarDetails />;

      case "iron-pipes":
        return <SteelDetails />;


      case "indian-pipes":
        return <IndianPipes />;


      case "irrigation-systems":
        return <IrrigationDetails />;


      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              المنتج قيد التحديث
            </h2>
            <p className="text-slate-500">
              نعمل حالياً على إضافة كامل التفاصيل لهذا المنتج، شكراً لصبركم.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen">
      {renderProductContent()}
    </main>
  );
};

export default ProductPage;