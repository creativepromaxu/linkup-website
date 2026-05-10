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
          {/* تمت إزالة drop-shadow-md من العنوان */}
          <h2 className="text-4xl md:text-5xl font-black text-link-green mb-3">
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
          {/* شبكة الكروت بتصميم مسطح */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                // تمت إزالة الظلال والتوهج، وإبقاء حركة الارتفاع للأعلى فقط (-translate-y-3)
                className={`group relative h-40 md:h-48 rounded-[30px] p-6 flex items-center justify-center border border-black/5 dark:border-white/5 bg-card-smart transition-transform duration-300 ease-out hover:-translate-y-3 cursor-pointer
                  ${index % 2 === 0 ? 'lg:translate-y-6' : ''} 
                `}
              >
                {/* تمت إزالة ديف الإضاءة الخلفية الملونة بالكامل من هنا */}
                
                {/* الشعار: ملون دائماً وبدون شفافية، مع حركة تكبير بسيطة عند تمرير الماوس */}
                <div className="relative z-10 w-full h-full transition-transform duration-300 scale-95 group-hover:scale-105">
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
        <div className="container mx-auto px-6">
          <div className="p-10 border-2 border-dashed border-link-navy/30 rounded-3xl text-muted-smart text-center">
            <p>يرجى وضع شعارات العملاء (الحازمي، المتصل، إلخ) في مجلد: public/clients</p>
          </div>
        </div>
      )}
    </section>
  );
}