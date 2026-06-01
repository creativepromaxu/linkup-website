"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Categories() {
  const categories = [
    { id: "Headphones", nameAr: "سماعات", nameEn: "Headphones", icon: "🎧" },
    { id: "chargers", nameAr: "شواحن", nameEn: "Chargers", icon: "⚡" },
    { id: "powerstrips", nameAr: "الكيابل", nameEn: "Power Strips", icon: "🔋" },
    { id: "bags", nameAr: "شنط", nameEn: "Bags", icon: "🎒" },
    { id: "HoldersandStands", nameAr: "هولدرات واستندات", nameEn: "Stands", icon: "📱" },
    { id: "cases", nameAr: "حمايات وستيكرات", nameEn: "Cases", icon: "🛡️" },
  ];

  return (
    <section id="products" className="py-24 overflow-hidden bg-section-smart relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-link-green mb-3"
        >
          <span className="block lang-ar">تسوّق حسب الفئة</span>
          <span className="hidden lang-en">Shop by Category</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-smart dark:text-white"
        >
          <span className="block lang-ar">عالم من الملحقات الذكية بين يديك</span>
          <span className="hidden lang-en">A world of smart accessories at your fingertips</span>
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -12 }}
              className="relative group h-[350px]"
            >
              <div className="relative h-full flex flex-col items-center justify-center p-10 rounded-[2.5rem] bg-white/50 dark:bg-white/[0.03] backdrop-blur-md border border-white/20 dark:border-white/10 group-hover:border-link-green/40 transition-all duration-500 z-10">
                
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                
                <div className="text-center w-full">
                  {/* استخدمنا هنا text-muted-smart ليطابق نفس مبدأ النص الفرعي مع الاحتفاظ بتأثير الهوفر */}
                  <h3 className="relative inline-block overflow-hidden text-2xl font-black mb-6 text-muted-smart dark:text-white group-hover:text-link-green transition-colors">
                    <span className="block lang-ar">{cat.nameAr}</span>
                    <span className="hidden lang-en">{cat.nameEn}</span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent -translate-x-full opacity-0 group-hover:opacity-100 hover-shimmer mix-blend-overlay pointer-events-none"></span>
                  </h3>
                  
                  <Link href={`/products#${cat.id}`} className="block w-full max-w-[180px] mx-auto">
                    <button className="relative overflow-hidden w-full bg-link-green text-white text-base font-bold py-3 px-6 rounded-xl transition-all duration-300 active:scale-95">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full opacity-0 group-hover:opacity-100 hover-shimmer pointer-events-none"></span>
                      
                      <span className="relative z-10 lang-ar">تصفح الفئة</span>
                      <span className="relative z-10 lang-en hidden">Explore</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer-fast {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
        .group:hover .hover-shimmer {
          animation: shimmer-fast 1.5s infinite;
        }
      `}</style>
    </section>
  );
}