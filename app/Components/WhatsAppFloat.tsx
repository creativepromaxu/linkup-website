"use client";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [currentLang, setCurrentLang] = useState("ar"); // حالة اللغة
  const whatsappNumber = "966500810464";

  useEffect(() => {
    // 1. دالة لتحديث اللغة بناءً على وسم html
    const updateLanguage = () => {
      const htmlLang = document.documentElement.lang || "ar";
      setCurrentLang(htmlLang);
    };

    // تحديث اللغة عند التحميل أول مرة
    updateLanguage();

    // 2. مراقبة التغييرات في وسم html (MutationObserver)
    // هذا الجزء هو المسؤول عن تغيير النص فوراً عند ضغط زر اللغة في الـ Navbar
    const observer = new MutationObserver(updateLanguage);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    // 3. منطق التوقيت للرسالة
    const initialTimeout = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 8000);
    }, 30000);

    return () => {
      observer.disconnect();
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`fixed bottom-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none ${currentLang === 'ar' ? 'right-6' : 'left-6'}`}>
      
      {/* فقاعة الرسالة */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="bg-white text-[#0D1B3E] px-4 py-2 rounded-2xl shadow-2xl border border-gray-100 pointer-events-auto relative mb-2"
          >
            {/* سهم الفقاعة - يتغير مكانه حسب اللغة */}
            <div className={`absolute -bottom-2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100 ${currentLang === 'ar' ? 'right-5' : 'left-5'}`}></div>
            
            <p className="text-sm font-bold whitespace-nowrap">
               {currentLang === "ar" ? "تواصل معنا الآن 👋" : "Contact us now 👋"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر الواتساب */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-transform pointer-events-auto group"
      >
        <FaWhatsapp size={32} className="group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}