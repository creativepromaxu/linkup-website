"use client";
import { motion } from "framer-motion";

export default function VisionMission() {
  const data = [
    {
      titleAr: "رؤيتنا",
      titleEn: "Our Vision",
      descAr: "أن نكون الخيار الأول والملهم في عالم حلول الهواتف الذكية على مستوى المملكة والمنطقة.",
      descEn: "To be the first and inspiring choice in the world of smart mobile solutions locally and regionally.",
      icon: "🎯",
    },
    {
      titleAr: "رسالتنا",
      titleEn: "Our Mission",
      descAr: "تقديم منتجات تجمع بين الأناقة والقوة، مع ضمان تجربة مستخدم استثنائية تفوق التوقعات.",
      descEn: "Providing products that combine elegance and power, ensuring an exceptional user experience that exceeds expectations.",
      icon: "🚀",
    },
    {
      titleAr: "ما يميزنا",
      titleEn: "Our Edge",
      descAr: "نجمع بين التكنولوجيا المبتكرة، التصميم العصري، والضمان الحقيقي الذي يمنحك راحة البال.",
      descEn: "We combine innovative technology, modern design, and a real warranty that gives you peace of mind.",
      icon: "💎",
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-link-green">
                <span className="block lang-ar">{item.titleAr}</span>
                <span className="hidden lang-en">{item.titleEn}</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                <span className="block lang-ar">{item.descAr}</span>
                <span className="hidden lang-en">{item.descEn}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}