"use client";
import { motion } from "framer-motion";

export default function Map() {
  const citiesAr = ["الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة", "بريدة", "خميس مشيط"];
  const citiesEn = ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah", "Buraydah", "Khamis Mushait"];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-section-smart border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* قسم الخريطة ونقاط التواجد */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-link-green mb-6 drop-shadow-md">
              <span className="block lang-ar">نقاط تواجدنا</span>
              <span className="hidden lang-en">Our Presence Points</span>
            </h2>
            <p className="text-xl text-muted-smart mb-10 leading-relaxed">
              <span className="block lang-ar">تغطية واسعة تشمل المدن الرئيسية في المملكة العربية السعودية لضمان الوصول السريع لشركائنا.</span>
              <span className="hidden lang-en">Wide coverage including major cities in KSA to ensure quick access for our partners.</span>
            </p>
            
            {/* قائمة المدن بشكل شبكة صغيرة */}
            <div className="grid grid-cols-2 gap-4">
              {citiesAr.map((city, index) => (
                <div key={index} className="bg-card-smart p-4 rounded-xl border border-white/5 flex items-center gap-3">
                  <span className="text-link-green text-2xl">📍</span>
                  <span className="text-lg font-bold">
                    <span className="block lang-ar">{city}</span>
                    <span className="hidden lang-en">{citiesEn[index]}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* مساحة تفاعلية للخريطة - Apple Style Placeholder */}
          <div className="aspect-square bg-card-smart rounded-[40px] border border-white/10 relative overflow-hidden shadow-xl flex items-center justify-center p-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-link-green/20 to-transparent blur-3xl opacity-60"></div>
            <div className="relative z-10 text-center text-muted-smart border-2 border-dashed border-white/10 rounded-[30px] p-8">
              <span className="text-8xl mb-6 block">🗺️</span>
              <p className="text-lg">هنا سيتم وضع الخريطة التفاعلية (Google Maps / Mapbox)</p>
              <p className="text-sm opacity-60">(Placeholder - Apple Map Style)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}