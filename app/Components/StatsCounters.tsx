"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

export default function StatsCounters() {
  const stats = [
    { num: 2015, titleAr: "سنة التأسيس", titleEn: "Established", plus: false },
    { num: 500, titleAr: "عميل نثق به", titleEn: "Trusted Clients", plus: true },
    { num: 25, titleAr: "مدينة مغطاة", titleEn: "Cities Covered", plus: true },
    { num: 120, titleAr: "موزع معتمد", titleEn: "Authorized Dealers", plus: true },
  ];

  return (
    // هنا وضعنا الخلفية الذكية التي تتغير حسب الوضع
    <section className="py-20 relative bg-section-smart">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="flex flex-col items-center justify-center p-6 rounded-3xl hover:scale-105 transition-transform cursor-default"
            >
              <h2 className="text-5xl md:text-6xl font-black text-link-green mb-4 flex items-center drop-shadow-md">
                {stat.plus && <span className="text-3xl mr-1">+</span>}
                <AnimatedCounter value={stat.num} />
              </h2>
              {/* هنا النص الذكي الذي يغمق بالفاتح ويفتح بالداكن */}
              <p className="text-xl font-bold text-muted-smart">
                <span className="block lang-ar">{stat.titleAr}</span>
                <span className="hidden lang-en">{stat.titleEn}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}