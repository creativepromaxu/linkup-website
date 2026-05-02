"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const productSections = [
    { id: "miscellaneous", titleAr: "منوعات", titleEn: "Miscellaneous", count: 10 }, // القسم الجديد تمت إضافته هنا
    { id: "Headphones", titleAr: "السماعات", titleEn: "Headphones", count: 4 },
    { id: "chargers", titleAr: "الشواحن", titleEn: "Chargers", count: 6 },
    { id: "power-strips", titleAr: "التوصيلات", titleEn: "Power Strips", count: 3 },
    { id: "bags", titleAr: "الشنط", titleEn: "Bags", count: 4 },
    { id: "stands", titleAr: "الستاندات", titleEn: "Stands", count: 2 },
    { id: "cases", titleAr: "الكفرات", titleEn: "Cases", count: 8 },
  ];

  const CATALOG_PATH = "/catalog/";

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* عنوان الصفحة الرئيسي */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-link-green mb-4 drop-shadow-md"
          >
            <span className="block lang-ar">كتالوج المنتجات</span>
            <span className="hidden lang-en">Products Catalog</span>
          </motion.h1>
          <p className="text-xl text-muted-smart">
            <span className="block lang-ar">تصفح كافة منتجاتنا المبتكرة</span>
            <span className="hidden lang-en">Explore all our innovative products</span>
          </p>
        </div>

        {/* عرض الأقسام */}
        {productSections.map((section) => (
          <section 
            key={section.id} 
            id={section.id} 
            className="mb-24 scroll-mt-32 border-b border-white/5 pb-16 last:border-0"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-10 text-heading-smart flex items-center gap-4"
            >
              <span className="w-2 h-10 bg-link-green rounded-full block"></span>
              <span className="lang-ar">{section.titleAr}</span>
              <span className="hidden lang-en">{section.titleEn}</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {[...Array(section.count)].map((_, i) => {
                const imagePath = `${CATALOG_PATH}${section.id}/${i + 1}.png`;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedImage(imagePath)}
                    className="aspect-square relative overflow-hidden group shadow-lg border border-white/10 bg-card-smart cursor-zoom-in transition-all duration-500 hover:shadow-[0_0_35px_rgba(39,127,74,0.4)] hover:border-link-green/50 hover:z-10"
                  >
                    <Image
                      src={imagePath} 
                      alt={`${section.titleEn} ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* نافذة التكبير (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged Product"
                width={1200}
                height={1200}
                className="object-contain max-h-[90vh] w-auto shadow-2xl border-4 border-white/10"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-link-green transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}