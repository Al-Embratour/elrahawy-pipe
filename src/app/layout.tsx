import { Tajawal } from "next/font/google";
import { LanguageProvider } from '../context/LanguageContext';
import { Metadata } from 'next'; // استيراد Metadata

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700", "800", "900"] });

import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import "./globals.css";

// إضافة الـ SEO والكلمات المفتاحية
export const metadata: Metadata = {
  title: {
    default: "شركة الرهاوي بايب | مواسير بلاستيك وحفر آبار مياه جوفية",
    template: "%s | الرهاوي بايب"
  },
  description: "الرهاوي بايب: خبرة تمتد منذ السبعينات في توريد مواسير UPVC، حفر آبار المياه الجوفية، تركيب طلمبات الأعماق، وأنظمة الطاقة الشمسية في مصر.",
  keywords: [
    "الرهاوي بايب", 
    "مواسير بلاستيك مصر", 
    "مواسير UPVC", 
    "حفر آبار مياه جوفية", 
    "طلمبات أعماق", 
    "أنظمة طاقة شمسية للآبار", 
    "شركات حفر آبار في مصر", 
    "مواسير حديد", 
    "شبكات ري حديثة", 
    "Water well drilling Egypt", 
    "UPVC pipes supplier"
  ],
  authors: [{ name: "El Rahawy Pipe" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  
  // شكل الرابط عند المشاركة (واتساب، فيسبوك)
  openGraph: {
    title: "شركة الرهاوي بايب - ريادة في عالم الآبار والمواسير",
    description: "نقدم حلولاً متكاملة لاستخراج المياه الجوفية وشبكات الري بأحدث التقنيات الهندسية.",
    url: "https://el-rahawy-pipe.vercel.app", // غيره بالدومين الحقيقي لما ترفعه
    siteName: "الرهاوي بايب",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <head>
        {/* أي أكواد إضافية للـ Head مثل Favicon تضعها هنا */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={tajawal.className}>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}