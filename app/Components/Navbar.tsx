"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("AR");
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // رقم الواتساب الخاص بكم
  const whatsappNumber = "966500810464";

  useEffect(() => {
    // التحقق فقط مما إذا كان المستخدم قد اختار الوضع الداكن بنفسه مسبقاً وحفظه
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // يفتح الوضع الفاتح تلقائياً كخيار افتراضي دائمًا
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLang = () => {
    const newLang = lang === "AR" ? "EN" : "AR";
    setLang(newLang);
    document.documentElement.dir = newLang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = newLang === "AR" ? "ar" : "en";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto rounded-2xl px-6 py-2 flex items-center justify-between glass-nav border-b border-white/5">
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Link UP Logo" 
            width={150} 
            height={50} 
            priority
            style={{ width: '150px', height: 'auto' }}
            className="object-contain py-1"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[17px] font-bold">
          <Link href="#products" className="text-link-navy hover:text-link-green transition-colors">
            {lang === "AR" ? "منتجاتنا" : "Products"}
          </Link>
          <Link href="#about" className="text-link-navy hover:text-link-green transition-colors">
            {lang === "AR" ? "من نحن" : "About"}
          </Link>
          
          {/* تم تعديل هذا الرابط ليفتح الواتساب */}
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-link-navy hover:text-link-green transition-colors cursor-pointer"
          >
            {lang === "AR" ? "كن نقطة بيع" : "Become a Seller"}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLang}
            className="text-sm font-black border-2 border-link-navy/20 px-3 py-1 rounded-lg text-link-navy hover:bg-link-navy hover:text-white transition-all cursor-pointer"
          >
            {lang === "AR" ? "EN" : "عربي"}
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-black/5 rounded-full transition-all text-xl cursor-pointer"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <Link href="#contact" className="bg-link-green hover:bg-[#1e6339] text-white px-6 py-2.5 rounded-full text-base font-black transition-all">
            {lang === "AR" ? "تواصل معنا" : "Contact Us"}
          </Link>
        </div>

      </div>
    </nav>
  );
}