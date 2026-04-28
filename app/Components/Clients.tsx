import fs from "fs";
import path from "path";
import Image from "next/image";

export default function Clients() {
  // جلب الصور تلقائياً من مجلد العملاء
  const clientsDir = path.join(process.cwd(), "public", "clients");
  let logos: string[] = [];

  try {
    logos = fs.readdirSync(clientsDir).filter(file => 
      file.match(/\.(png|jpe?g|svg|webp)$/i)
    );
  } catch (error) {
    console.error("مجلد clients غير موجود");
  }

  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-20">
        
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-black text-link-green mb-3 drop-shadow-md">
            <span className="block lang-ar">شبكة عملائنا</span>
            <span className="hidden lang-en">Our Client Network</span>
          </h2>
          <p className="text-xl text-muted-smart">
            <span className="block lang-ar">نفخر بثقة نخبة من أكبر موزعي الاتصالات في المملكة</span>
            <span className="hidden lang-en">Trusted by leading telecom distributors in the Kingdom</span>
          </p>
        </div>
      </div>

      {logos.length > 0 ? (
        <div className="container mx-auto px-6">
          {/* شبكة الكروت التفاعلية ثلاثية الأبعاد */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className={`group relative h-40 md:h-48 rounded-[30px] p-6 flex items-center justify-center border border-white/5 bg-card-smart backdrop-blur-sm transition-all duration-500 ease-out hover:border-link-green/40 hover:scale-105 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(39,127,74,0.3)] cursor-pointer
                  ${index % 2 === 0 ? 'lg:translate-y-6' : ''} /* إضافة تأثير هندسي غير منتظم */
                `}
              >
                {/* تأثير الإضاءة الخلفية بلون الشعار عند التمرير */}
                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-link-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* الشعار */}
                <div className="relative z-10 w-full h-full grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <Image
                    src={`/clients/${logo}`}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 140px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // رسالة تظهر لك كمطور لتذكيرك بوضع الصور
        <div className="container mx-auto px-6">
          <div className="p-10 border-2 border-dashed border-link-navy/30 rounded-3xl text-muted-smart text-center">
            <p>يرجى وضع شعارات العملاء (الحازمي، المتصل، إلخ) في مجلد: public/clients</p>
          </div>
        </div>
      )}
    </section>
  );
}