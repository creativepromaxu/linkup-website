import { Cairo } from "next/font/google";
import "./globals.css";

// استيراد المكونات الأساسية التي ستظهر في كل مكان
import Navbar from "./Components/Navbar"; 
import Footer from "./Components/Footer";

const cairo = Cairo({ 
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Link UP | Your Trust",
  description: "الموقع الرسمي لعلامة Link UP التجارية",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      {/* اكتفينا بكلاس الخط وتنعيم الحواف، وتركنا الألوان لملف globals.css */}
      <body className={`${cairo.className} antialiased`}>
        <Navbar />
        
        {/* المحتوى المتغير (الصفحة الرئيسية أو صفحات التصنيفات) سيظهر هنا */}
        {children} 
        
        <Footer />
      </body>
    </html>
  );
}