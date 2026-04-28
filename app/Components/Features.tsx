"use client";
import { motion, Variants } from "framer-motion";

export default function Features() {
  const features = [
    { id: 1, icon: "🇸🇦", titleAr: "علامة سعودية 100%", titleEn: "100% Saudi Brand", descAr: "فخورون بهويتنا وبتقديم جودة تليق بسوقنا المحلي.", descEn: "Proud of our identity and delivering quality fit for our local market." },
    { id: 2, icon: "🛡️", titleAr: "ضمان الجودة الحقيقي", titleEn: "Real Quality Warranty", descAr: "منتجاتنا مصممة لتدوم، ونضمن أداءها بثقة.", descEn: "Our products are built to last, and we confidently guarantee their performance." },
    { id: 3, icon: "🚀", titleAr: "توصيل سريع وفعال", titleEn: "Fast & Efficient Delivery", descAr: "نلتزم بتوصيل طلباتك بأسرع وقت ممكن لكافة المناطق.", descEn: "We commit to delivering your orders as quickly as possible to all regions." },
    { id: 4, icon: "💳", titleAr: "تسهيلات ائتمانية للموزعين", titleEn: "Credit Facilities for Dealers", descAr: "ندعم شركاءنا بنظم دفع وائتمان مرنة للنمو معاً.", descEn: "We support our partners with flexible payment and credit systems to grow together." },
    { id: 5, icon: "🌐", titleAr: "انتشار واسع", titleEn: "Wide Distribution Network", descAr: "نقاط تواجدنا تغطي المدن الرئيسية لسهولة الوصول.", descEn: "Our presence points cover major cities for easy access." },
    { id: 6, icon: "⚡", titleAr: "توافق ذكي وشحن آمن", titleEn: "Smart Sync & Safe Charge", descAr: "تقنيات متطورة تضمن أعلى درجات التوافق والأمان لأجهزتك.", descEn: "Advanced tech ensuring seamless compatibility and safety for your devices." },
  ];

  // تم إضافة "as const" هنا لحل مشكلة الـ TypeScript في الـ build
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  } as const;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" // الآن TypeScript سيعرف أنها قيمة مدعومة
      } 
    }
  } as const;

  return (
    <section className="py-24 relative overflow-hidden bg-section-smart border-t border-white/5">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-link-green mb-4 drop-shadow-md"
        >
          <span className="block lang-ar">ما يميز Link UP</span>
          <span className="hidden lang-en">Why Choose Link UP</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-muted-smart"
        >
          <span className="block lang-ar">نصنع الفرق في كل تفصيل تقني</span>
          <span className="hidden lang-en">We make a difference in every tech detail</span>
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.3 }
              }}
              className={`p-10 rounded-[2.5rem] border ${feat.id === 1 ? 'border-link-green/40' : 'border-white/10'} bg-white/[0.02] backdrop-blur-xl flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:shadow-link-green/5 transition-all cursor-default`}
            >
              <div className="text-6xl mb-8 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-link-green">
                <span className="block lang-ar">{feat.titleAr}</span>
                <span className="hidden lang-en">{feat.titleEn}</span>
              </h3>
              <p className="text-lg text-muted-smart leading-relaxed opacity-80">
                <span className="block lang-ar">{feat.descAr}</span>
                <span className="hidden lang-en">{feat.descEn}</span>
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}