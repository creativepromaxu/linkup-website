"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  FaTiktok, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialHandle = "linkup.ksa";
  const whatsappNumber = "+966500810464";
  const bulkOrderNumber = "+966500810464"; // تم وضع نفس الرقم بناءً على طلب العميل

  return (
    <footer className="bg-[#0D1B3E] text-white border-t border-white/10 py-16 transition-colors">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* عمود الشعار مع التأثير الزجاجي */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            {/* الحاوية الزجاجية خلف اللوجو */}
            <div className="bg-white/100 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
              <Image 
                src="/logo.png" 
                alt="Link UP Logo" 
                width={140} 
                height={48} 
                style={{ width: '140px', height: 'auto' }}
                className="object-contain filter drop-shadow-sm"
              />
            </div>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            <span className="block lang-ar">علامة سعودية رائدة نثق في تقديم حلول وملحقات الهواتف الذكية بجودة عالمية. نربطك بالمستقبل بثقة وأداء.</span>
            <span className="hidden lang-en">Leading Saudi brand providing mobile solutions & accessories with global quality. Connecting you to the future with trust & performance.</span>
          </p>
        </div>

        {/* عمود التواصل - معلومات الاتصال */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold mb-2 text-[#22C55E]">
             <span className="block lang-ar">تواصل معنا</span>
             <span className="hidden lang-en">Contact Us</span>
          </h4>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#22C55E]" />
              <p className="text-sm">الرياض، المملكة العربية السعودية</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#22C55E]" />
              <p className="text-sm">info@linkup.sa</p>
            </div>
            {/* قسم طلب الكميات بتباين عالي */}
            <div className="mt-4 p-3 bg-white/5 border-r-4 border-[#22C55E] rounded-l-lg">
               <div className="flex items-center gap-2 mb-1">
                  <FaPhoneAlt className="text-[#22C55E] text-xs" />
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">طلب الكميات / Bulk Orders</p>
               </div>
               <p className="text-lg font-black text-white">{bulkOrderNumber}</p>
            </div>
          </div>
        </div>

        {/* عمود وسائل التواصل الاجتماعي (تيك توك - انستجرام - يوتيوب) */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-[#22C55E]">
             <span className="block lang-ar">تابعنا</span>
             <span className="hidden lang-en">Follow Us</span>
          </h4>
          <div className="flex gap-4">
            <a href={`https://tiktok.com/@${socialHandle}`} target="_blank" className="bg-white/10 p-3 rounded-xl hover:bg-black hover:text-white transition-all border border-white/5 shadow-lg">
              <FaTiktok size={22} />
            </a>
            <a href={`https://instagram.com/${socialHandle}`} target="_blank" className="bg-white/10 p-3 rounded-xl hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white transition-all border border-white/5 shadow-lg">
              <FaInstagram size={22} />
            </a>
            <a href={`https://youtube.com/@${socialHandle}`} target="_blank" className="bg-white/10 p-3 rounded-xl hover:bg-[#FF0000] hover:text-white transition-all border border-white/5 shadow-lg">
              <FaYoutube size={22} />
            </a>
          </div>
          <p className="mt-4 text-[#22C55E] text-sm font-bold">@{socialHandle}</p>
        </div>

        {/* عمود الواتساب - زر سريع */}
        <div className="flex flex-col items-start md:items-center justify-center">
            <a 
              href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
              target="_blank"
              className="group flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-7 py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
            >
              <FaWhatsapp size={32} className="animate-bounce-slow" />
              <div className="text-right">
                <p className="text-[10px] font-bold opacity-90 leading-none mb-1">تواصل عبر الواتساب</p>
                <p className="text-md font-black">{whatsappNumber}</p>
              </div>
            </a>
        </div>

      </div>

      {/* شريط الحقوق الختامي */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>
           <span className="lang-ar">كافة الحقوق محفوظة &copy; {currentYear} Link UP. صنع بفخر في المملكة العربية السعودية.</span>
           <span className="lang-en">All Rights Reserved &copy; {currentYear} Link UP. Proudly made in KSA.</span>
        </p>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </footer>
  );
}