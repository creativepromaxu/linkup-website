"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductSpotlight() {
  const [images, setImages] = useState<string[]>([]);
  const IMG_PATH = "/products/";

  useEffect(() => {
    fetch('/api/get-products')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          // نكرر قائمة الصور مرتين على الأقل لخلق تتابع لا نهائي
          setImages([...data, ...data]);
        }
      });
  }, []);

  return (
    <section className="py-16 overflow-hidden relative select-none">
      
      {/* حاوية السلايدر */}
      <div className="relative w-full flex items-center" dir="ltr">
        
        {/* التظليل الجانبي الأنيق لإخفاء دخول وخروج الصور */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

        {/* الشريط المتحرك تلقائياً */}
        <div className="flex w-max animate-spotlight">
          {/* نكرر عرض الصور مرتين داخل الشريط لضمان عدم انقطاع اللوب */}
          {[1, 2].map((iteration) => (
            <div key={iteration} className="flex gap-6 px-3">
              {images.map((img, index) => (
                <div
                  key={`${iteration}-${index}`}
                  className="w-[280px] md:w-[400px] aspect-[1080/1500] rounded-[30px] md:rounded-[40px] relative overflow-hidden flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-white/5 bg-card-smart group"
                >
                  <Image
                    src={`${IMG_PATH}${img}`}
                    alt={`Product Design ${index}`}
                    fill
                    draggable={false}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 400px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* كود الـ CSS المسؤول عن الحركة اللانهائية المنتظمة */}
      <style jsx global>{`
        @keyframes spotlight-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-spotlight {
          animation: spotlight-scroll 120s linear infinite; /* 60s هي السرعة، كبّر الرقم لتبطئ الحركة */
        }
        /* إيقاف الحركة عند وضع الماوس عليها للتأمل (اختياري، يمكنك حذفه إذا أردته أن لا يتوقف أبداً) */
        .animate-spotlight:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}