"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // استيراد الهوك الجديد
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();
  const pathname = usePathname(); // تعريف المسار الحالي

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-999 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/90 backdrop-blur-md py-4 shadow-lg" 
          : "bg-transparent py-7" 
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* اللوجو */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo1.webp" 
            alt="El Rahawy Logo" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <span className="text-white font-bold text-xl tracking-tight whitespace-nowrap">
            {lang === "ar" ? "الرهاوي بايب" : "EL RAHAWY PIPE"}
          </span>
        </Link>

        {/* الروابط */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            // التحقق إذا كان هذا اللينك هو الصفحة الحالية
            const isActive = pathname === link.href;

            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`relative font-bold transition-all text-sm uppercase tracking-widest whitespace-nowrap group ${
                  isActive ? "text-blue-400" : "text-white hover:text-blue-400"
                }`}
              >
                {link.name}
                {/* الخط السفلي: يظهر كاملاً إذا كانت الصفحة نشطة، أو يتمدد عند الهوفر فقط */}
                <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            );
          })}
          
          {/* زرار اللغة */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/20 transition-all text-sm font-bold backdrop-blur-sm"
          >
            <Globe size={16} />
            <span className="border-l border-white/30 pl-2">
              {lang === "ar" ? "EN" : "عربي"}
            </span>
          </button>
        </div>

        {/* زرار الموبايل */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* قائمة الموبايل */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-slate-950 transition-all duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-2xl font-bold transition-colors ${
                pathname === link.href ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => { toggleLanguage(); setIsOpen(false); }}
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-lg"
          >
            <Globe size={20} />
            {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;