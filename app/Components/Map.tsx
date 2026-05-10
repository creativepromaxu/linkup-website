"use client";
import Image from "next/image";

export default function Map() {
  const citiesAr = ["الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة", "بريدة", "خميس مشيط"];
  const citiesEn = ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah", "Buraydah", "Khamis Mushait"];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-section-smart border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* قسم النصوص والمدن */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-link-green mb-6">
              <span className="block lang-ar">نقاط تواجدنا</span>
              <span className="hidden lang-en">Our Presence Points</span>
            </h2>
            <p className="text-xl text-muted-smart mb-10 leading-relaxed">
              <span className="block lang-ar">تغطية واسعة تشمل المدن الرئيسية في المملكة العربية السعودية لضمان الوصول السريع لشركائنا.</span>
              <span className="hidden lang-en">Wide coverage including major cities in KSA to ensure quick access for our partners.</span>
            </p>
            
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

          {/* حاوية الصورة الشفافة */}
          {/* جعلنا الحاوية شفافة تماماً وبمقاس نسبي (aspect-square) */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <Image 
              src="/map1.png"
              alt="Map"
              fill
              className="object-contain" // تضمن ظهور الخريطة كاملة دون قص وبشفافيتها
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}