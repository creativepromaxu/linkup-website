import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Partners() {
  const partnersDir = path.join(process.cwd(), "public", "partners");
  let logos: string[] = [];

  try {
    logos = fs.readdirSync(partnersDir).filter(file => 
      file.match(/\.(png|jpe?g|svg|webp)$/i)
    );
  } catch (error) {
    console.error("مجلد partners غير موجود");
  }

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]; 
  const reverseLogos = [...logos].reverse();
  const duplicatedReverse = [...reverseLogos, ...reverseLogos, ...reverseLogos, ...reverseLogos, ...reverseLogos, ...reverseLogos];

  return (
    <section className="py-24 overflow-hidden bg-section-smart relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-link-green mb-3 drop-shadow-md">
          <span className="block lang-ar">شركاء النجاح</span>
          <span className="hidden lang-en">Our Partners</span>
        </h2>
        <p className="text-xl text-muted-smart">
          <span className="block lang-ar">علامات تجارية عالمية نثق بها وتثق بنا</span>
          <span className="hidden lang-en">Global brands we trust and trust us</span>
        </p>
      </div>

      {logos.length > 0 ? (
        <div className="relative flex flex-col gap-10 w-full" dir="ltr">
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

          {/* الشريط الأول - تمت إزالة التدرج الرمادي والشفافية */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee hover-pause gap-16 px-8">
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="w-32 h-16 md:w-40 md:h-20 relative hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0">
                  <Image src={`/partners/${logo}`} alt={`Partner ${index}`} fill className="object-contain" sizes="(max-width: 768px) 128px, 160px" />
                </div>
              ))}
            </div>
          </div>

          {/* الشريط الثاني - تمت إزالة التدرج الرمادي والشفافية */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-reverse hover-pause gap-16 px-8">
              {duplicatedReverse.map((logo, index) => (
                <div key={index} className="w-32 h-16 md:w-40 md:h-20 relative hover:scale-110 transition-transform duration-300 cursor-pointer flex-shrink-0">
                  <Image src={`/partners/${logo}`} alt={`Partner Reverse ${index}`} fill className="object-contain" sizes="(max-width: 768px) 128px, 160px" />
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        <div className="container mx-auto px-6">
          <div className="p-10 border-2 border-dashed border-link-navy/30 rounded-3xl text-muted-smart text-center">
            <p>يرجى وضع شعارات الشركاء في مجلد: public/partners</p>
          </div>
        </div>
      )}
    </section>
  );
}