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
  { id: 1, name: "مؤسسة الأفق للاتصالات", text_ar: "منتجات لينك أب سريعة الدوران في معارضنا، جودة الكيابل ممتازة جداً ونسبة المرتجعات معدومة.", text_en: "Link Up products sell fast in our stores. Cable quality is excellent with zero returns.", product_ar: "طلبيات الكيابل بالجملة", product_en: "Bulk Cable Orders", avatar: "أ" },
  { id: 2, name: "شركة النوافذ التقنية", text_ar: "تعامل احترافي وتوفير للكميات المطلوبة في وقت قياسي. الشنط الذكية حققت مبيعات رائعة لدينا.", text_en: "Professional dealing and fast fulfillment of large quantities. Smart bags achieved great sales.", product_ar: "توريد شنط وإكسسوارات", product_en: "Bags & Accessories Supply", avatar: "ن" },
  { id: 3, name: "معارض إلكترو بلس", text_ar: "هوامش الربح ممتازة والأسعار التنافسية تجعل لينك أب خيارنا الأول دائماً في التوريد واعتماد المنتجات.", text_en: "Excellent profit margins and competitive pricing make Link Up our top choice for supply.", product_ar: "شراكة توزيع استراتيجية", product_en: "Strategic Distribution", avatar: "إ" },
  { id: 4, name: "متاجر القمة الذكية", text_ar: "سماعات Pro Buds عليها طلب عالي من عملائنا، التغليف الفاخر والمواصفات العالية تسهل عملية البيع.", text_en: "High demand for Pro Buds from our customers. Premium packaging makes selling easy.", product_ar: "طلبيات الصوتيات بالجملة", product_en: "Wholesale Audio Orders", avatar: "ق" },
  { id: 5, name: "مؤسسة ريادة الأعمال", text_ar: "تنوع الباور بانك وأحجامه المختلفة يغطي كافة احتياجات السوق لدينا، شكراً لسرعة الإنجاز والترتيب.", text_en: "The variety of power banks covers all our market needs. Thanks for the quick processing.", product_ar: "توريد شواحن متنقلة", product_en: "Power Banks Supply", avatar: "ر" },
  { id: 6, name: "الوكيل المعتمد للتقنية", text_ar: "من أفضل الموردين في السوق، التزام بالمواعيد وجودة ترفع الرأس أمام عملائنا في قطاع التجزئة.", text_en: "One of the best suppliers in the market. Punctuality and quality we are proud of.", product_ar: "عقود توريد شاملة", product_en: "Comprehensive Contracts", avatar: "و" },
  { id: 7, name: "شركة المسار السريع", text_ar: "الكيابل المغناطيسية نفذت من فروعنا في أول أسبوع، منتجاتكم دائماً تواكب أحدث تطلعات السوق.", text_en: "Magnetic cables sold out in the first week. Your products always meet market trends.", product_ar: "توريد المنتجات الحديثة", product_en: "Trending Products Supply", avatar: "م" },
  { id: 8, name: "أسواق العاصمة الذكية", text_ar: "خدمة ما بعد البيع ودعم الموزعين من لينك أب لا يعلى عليه، نحن فخورون بهذه الشراكة الناجحة.", text_en: "After-sales service and distributor support are unmatched. A successful partnership.", product_ar: "دعم الموزعين المعتمدين", product_en: "Authorized Dealers Support", avatar: "ع" },
  { id: 9, name: "مؤسسة الإمداد الأول", text_ar: "تغليف الكراتين الممتاز وترتيب البضاعة يسهل علينا استلام الطلبيات الكبيرة وجردها وتوزيعها بسرعة.", text_en: "Carton packaging and goods arrangement make receiving and inventorying large orders easy.", product_ar: "الخدمات اللوجستية والتوريد", product_en: "Logistics & Supply", avatar: "م" },
  { id: 10, name: "معارض التكنولوجيا الحديثة", text_ar: "التوصيلات الكهربائية مطابقة بالكامل للمواصفات والمقاييس، وهذا يمنحنا ثقة وموثوقية في السوق.", text_en: "Power adapters meet all standards, giving us confidence and reliability in the market.", product_ar: "المنتجات المعتمدة محلياً", product_en: "Certified Products", avatar: "ت" },
];

export default function AppleStyleSlider() {
  const [index, setIndex] = useState(0);

  // تحريك السلايدر تلقائياً كل 3.5 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset: number) => {
    return (index + offset + testimonials.length) % testimonials.length;
  };

  const visibleIndices = [-1, 0, 1];

  return (
    <section className="py-24 bg-section-smart overflow-hidden relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-link-green mb-4">
          <span className="block lang-ar">ماذا يقول عملائنا عنّا ؟</span>
          <span className="hidden lang-en">What do our customers say about us?</span>
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
                    border flex flex-col justify-between
                    ${isCenter ? 'border-link-green' : 'border-black/5 dark:border-white/10'}
                  `}>
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      {/* إزالة الظل من الأيقونة */}
                      <div className="w-14 h-14 rounded-2xl bg-link-green text-white flex items-center justify-center text-2xl font-bold">
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
            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-link-green' : 'w-2 bg-muted-smart opacity-50'}`}
          />
        ))}
      </div>
    </section>
  );
}