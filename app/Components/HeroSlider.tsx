"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    titleAr: "عالم من الحلول الذكية بين يديك",
    titleEn: "Smart Solutions in Your Hands",
    descAr: "نقدم لك أفضل ملحقات الهواتف الذكية بجودة عالمية وضمان حقيقي.",
    descEn: "Providing top-tier mobile accessories with global quality and real warranty.",
    image: "/hero1.png", // الصورة الأولى
  },
  {
    id: 2,
    titleAr: "قوة الاتصال، ثقة الأداء",
    titleEn: "Power of Connection, Performance Trust",
    descAr: "شواحن وكيابل مصممة لتدوم طويلاً وتمنحك السرعة التي تستحقها.",
    descEn: "Cables and chargers built to last and give you the speed you deserve.",
    image: "/hero2.png", // الصورة الثانية
  },
  {
    id: 3,
    titleAr: "عش التجربة الصوتية النقيّة",
    titleEn: "Experience Pure Sound",
    descAr: "سماعات عالية الدقة تعزلك عن الضجيج وتضعك في قلب الحدث.",
    descEn: "High-fidelity audio gear that isolates noise and puts you in the action.",
    image: "/hero3.png", // الصورة الثالثة
  },
  {
    id: 4,
    titleAr: "حماية فائقة لأجهزتك",
    titleEn: "Ultimate Protection",
    descAr: "كفرات وشاشات حماية توفر الأمان التام لهاتفك بأناقة لا مثيل لها.",
    descEn: "Premium cases and screen protectors for total security with unmatched style.",
    image: "/hero4.png", // الصورة الرابعة
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [lang, setLang] = useState("ar");

  // مراقبة تغيير لغة الموقع لتغيير اتجاه البنر
  useEffect(() => {
    const updateLang = () => setLang(document.documentElement.lang || "ar");
    updateLang();
    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);

  // تشغيل السلايدر التلقائي كل 5 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center pt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full"
        >
          {/* قسم النصوص */}
          <div className={`order-2 ${lang === "ar" ? "md:order-1 text-right" : "md:order-2 text-left"} z-10`}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg"
            >
              {lang === "ar" ? slides[current].titleAr : slides[current].titleEn}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 dark:text-gray-300 mb-8 max-w-2xl"
            >
              {lang === "ar" ? slides[current].descAr : slides[current].descEn}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-link-green text-white px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(39,127,74,0.5)] hover:shadow-[0_0_30px_rgba(39,127,74,0.8)] transition-all cursor-pointer"
            >
              {lang === "ar" ? "استكشف المنتجات" : "Explore Products"}
            </motion.button>
          </div>

          {/* قسم الصورة */}
          <div className={`order-1 ${lang === "ar" ? "md:order-2" : "md:order-1"} flex justify-center items-center relative h-full max-h-[600px]`}>
            {/* تأثير الإضاءة الخلفية المعدل ليدعم الفاتح والغامق */}
            <div className="absolute inset-0 bg-gradient-to-tr from-link-green/40 dark:from-link-green/60 to-transparent rounded-full blur-[100px] opacity-80 dark:opacity-100 transition-opacity duration-500"></div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full h-full flex justify-center items-center z-10 drop-shadow-2xl"
            >
              <Image 
                src={slides[current].image}
                alt={lang === "ar" ? slides[current].titleAr : slides[current].titleEn}
                width={600}
                height={600}
                className="object-contain"
                priority={current === 0} 
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* مؤشرات التبديل السفلية */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${current === index ? "w-12 bg-link-green" : "w-3 bg-gray-400/50 dark:bg-white/30 hover:bg-gray-600/50 dark:hover:bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}