"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  text_ar: string;
  text_en: string;
  product_ar: string;
  product_en: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "عمر خالد", text_ar: "أفضل كيبل شحن جربته، جودة التصنيع خيالية ولا يسخن أبداً.", text_en: "Best charging cable ever, build quality is insane.", product_ar: "كيبل Ultra-Fast", product_en: "Ultra-Fast Cable", avatar: "OK" },
  { id: 2, name: "سارة محمود", text_ar: "شنطة الإكسسوارات من لينك أب صارت رفيقتي في كل سفرة، منظمة جداً.", text_en: "The Link Up tech bag is my travel companion.", product_ar: "شنطة التنظيم الذكية", product_en: "Smart Tech Bag", avatar: "SM" },
  { id: 3, name: "فهد العتيبي", text_ar: "توصيلة المنافذ 7 في 1 حلت لي كل مشاكل الماك بوك، أنصح بها بشدة.", text_en: "The 7-in-1 hub solved all my MacBook issues.", product_ar: "وصلة Multi-Hub", product_en: "Multi-Hub Adapter", avatar: "FA" },
  { id: 4, name: "لينا القاسم", text_ar: "السماعات عزلها بطل وصوتها نقي جداً مقارنة بسعرها.", text_en: "The noise cancellation is great and the sound is pure.", product_ar: "سماعات Pro Buds", product_en: "Pro Buds", avatar: "LQ" },
  { id: 5, name: "عبدالله محمد", text_ar: "الباور بانك نحيف جداً ويشحن الآيفون بسرعة البرق.", text_en: "Power bank is super slim and charges iPhone fast.", product_ar: "شاحن متنقل Slim", product_en: "Slim Power Bank", avatar: "AM" },
  { id: 6, name: "ريم علي", text_ar: "تصاميم المنتجات في لينك أب تنافس البراندات العالمية، فخامة!", text_en: "Link Up designs compete with global brands.", product_ar: "إكسسوارات منوعة", product_en: "General Accessories", avatar: "RA" },
  { id: 7, name: "يوسف إدريس", text_ar: "الكيبل المغناطيسي فكرة عبقرية، مريح جداً في السيارة.", text_en: "Magnetic cable is a genius idea, very convenient.", product_ar: "الكيبل المغناطيسي", product_en: "Magnetic Cable", avatar: "YI" },
  { id: 8, name: "نورة سليمان", text_ar: "جودة الشنط عندكم فوق الوصف، القماش فخم وشكلها أنيق.", text_en: "The bag quality is beyond words, premium fabric.", product_ar: "شنطة ظهر ذكية", product_en: "Smart Backpack", avatar: "NS" },
  { id: 9, name: "سلطان الحربي", text_ar: "سرعة التوصيل والتعامل الراقي تخليني زبون دائم.", text_en: "Fast delivery and professional service.", product_ar: "خدمة العملاء", product_en: "Customer Service", avatar: "SH" },
  { id: 10, name: "هند الناصر", text_ar: "وصلات الصوت نقية وما فيها أي تشويش، شكراً لينك أب.", text_en: "Audio adapters are crystal clear. Thanks Link Up.", product_ar: "وصلات الصوت", product_en: "Audio Adapters", avatar: "HN" },
];

export default function AppleStyleSlider() {
  const [index, setIndex] = useState(0);

  // تحريك السلايدر تلقائياً كل 3 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // وظيفة لجلب إندكس العناصر المجاورة (لخلق حلقة مستمرة)
  const getIndex = (offset: number) => {
    return (index + offset + testimonials.length) % testimonials.length;
  };

  const visibleIndices = [-1, 0, 1]; // يمثل العنصر السابق، الحالي، واللاحق

  return (
    <section className="py-24 bg-section-smart overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-link-green mb-4">
          <span className="block lang-ar">عائلة Link Up</span>
          <span className="hidden lang-en">The Link Up Family</span>
        </h2>
      </div>

      <div className="relative h-[450px] flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <AnimatePresence initial={false}>
            {visibleIndices.map((offset) => {
              const itemIndex = getIndex(offset);
              const item = testimonials[itemIndex];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${item.id}-${offset}`}
                  initial={{ opacity: 0, scale: 0.8, x: offset * 300 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.85,
                    x: offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 250 : 350),
                    filter: isCenter ? "blur(0px)" : "blur(4px)",
                    zIndex: isCenter ? 30 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: offset * -300 }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="absolute w-[300px] md:w-[400px] aspect-square"
                >
                  <div className={`
                    w-full h-full p-8 rounded-[3rem] 
                    bg-white dark:bg-white/[0.03] backdrop-blur-xl
                    border border-white/20 dark:border-white/10
                    shadow-2xl flex flex-col justify-between
                    ${isCenter ? 'ring-2 ring-link-green/20' : ''}
                  `}>
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 rounded-2xl bg-link-green text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-link-green/20">
                        {item.avatar}
                      </div>
                      <div className="flex text-yellow-500 text-sm">
                        {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow flex items-center py-6">
                      <p className="text-xl md:text-2xl font-medium leading-tight text-link-navy dark:text-white">
                        <span className="lang-ar">"{item.text_ar}"</span>
                        <span className="lang-en hidden">"{item.text_en}"</span>
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-black/5 dark:border-white/5 pt-4">
                      <h4 className="font-bold text-lg text-link-green">{item.name}</h4>
                      <p className="text-xs text-muted-smart font-bold uppercase tracking-tighter">
                        <span className="lang-ar">{item.product_ar}</span>
                        <span className="lang-en hidden">{item.product_en}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-link-green' : 'w-2 bg-link-green/20'}`}
          />
        ))}
      </div>
    </section>
  );
}