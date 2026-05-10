"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    titleAr: "قوة شحن أكبر بتقنية GaN المتقدمة",
    titleEn: "Greater Charging Power with Advanced GaN",
    descAr: "شاحن Link Up يوفر سرعة وكفاءة عالية لشحن أجهزتك اليومية بأداء ثابت وتصميم احترافي وحجم مدمج.",
    descEn: "Link Up GaN charger delivers high speed and efficiency for your daily devices with stable performance and compact design.",
    image: "/hero1.png",
  },
  {
    id: 2,
    titleAr: "اتصال يدوم وكفاءة عالية لنمط حياتك",
    titleEn: "Enduring Connection and High Efficiency",
    descAr: "كيبل Link Up بتصميم متين وشحن سريع يمنحك أداء مستقراً ونقلاً موثوقاً للطاقة بكل جودة ليتحمل الاستخدام اليومي.",
    descEn: "Durable Link Up cable with fast charging gives you stable performance and reliable power transfer built for daily use.",
    image: "/hero2.png",
  },
  {
    id: 3,
    titleAr: "طاقة جاهزة دائماً أينما كنت",
    titleEn: "Always Ready Power, Wherever You Are",
    descAr: "باور بانك Link Up بتصميم مدمج وكابلات مدمجة يمنحك شحناً سريعاً وموثوقاً، مع شاشة رقمية لمتابعة الطاقة بدقة.",
    descEn: "Compact Link Up power bank with built-in cables offers fast, reliable charging and a digital display for precise power tracking.",
    image: "/hero3.png",
  },
  {
    id: 4,
    titleAr: "استمع بثقة وأداء صوتي متوازن",
    titleEn: "Listen with Confidence and Balanced Audio",
    descAr: "سماعات Link Up تمنحك تجربة صوت واضحة واتصالاً مستقراً بتقنية لاسلكية متطورة وتصميم أنيق يناسب استخدامك اليومي.",
    descEn: "Link Up earphones deliver clear sound and stable connection with advanced wireless technology and a stylish professional design.",
    image: "/hero4.png",
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [lang, setLang] = useState("ar");

  useEffect(() => {
    const updateLang = () => setLang(document.documentElement.lang || "ar");
    updateLang();
    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // استخدام bg-section-smart لتغيير خلفية القسم بناءً على الوضع
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-24 pb-12 md:pt-10 md:pb-0 bg-section-smart">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center"
        >
          {/* قسم النصوص */}
          <div className={`order-2 ${lang === "ar" ? "md:order-1 text-right" : "md:order-2 text-left"} z-10`}>
            {/* أزلنا الألوان الثابتة ليأخذ لون الخط الافتراضي حسب الوضع الداكن/الفاتح في مشروعك */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-6xl font-black mb-4 md:mb-6 leading-tight"
            >
              {lang === "ar" ? slides[current].titleAr : slides[current].titleEn}
            </motion.h1>
            
            {/* استخدام text-muted-smart للنص الثانوي كما في مثالك */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl font-bold text-muted-smart mb-8 max-w-2xl"
            >
              {lang === "ar" ? slides[current].descAr : slides[current].descEn}
            </motion.p>
            
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-link-green text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg cursor-pointer transition-all"
              >
                {lang === "ar" ? "استكشف المنتجات" : "Explore Products"}
              </motion.button>
            </Link>
          </div>

          {/* قسم الصورة */}
          <div className={`order-1 ${lang === "ar" ? "md:order-2" : "md:order-1"} flex justify-center items-center relative h-[350px] md:h-full max-h-[550px] md:max-h-[750px]`}>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full h-full flex justify-center items-center z-10"
            >
              <Image 
                src={slides[current].image}
                alt="Product Image"
                width={700}
                height={700}
                className="object-contain max-h-full"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* مؤشرات التبديل السفلية */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            // تم استخدام bg-muted-smart للمؤشرات غير النشطة لتعمل مع الوضع الداكن
            className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${current === index ? "w-8 md:w-12 bg-link-green" : "w-2 md:w-3 bg-muted-smart opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}