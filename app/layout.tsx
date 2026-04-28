import type { Metadata } from "next"; 
import { Cairo } from "next/font/google";
import "./globals.css";

// استيراد المكونات الأساسية - مع استخدام حرف C كبير للمجلد
import Navbar from "./Components/Navbar"; 
import Footer from "./Components/Footer";

const cairo = Cairo({ 
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Link UP | نربطك بالمستقبل",
  description: "علامة سعودية رائدة تقدم حلول وملحقات الهواتف الذكية بجودة عالمية.",
  
  // إعدادات الأيقونات (Favicon)
  icons: {
    icon: "/favicon.ico",       
    shortcut: "/icon.png",      
    apple: "/apple-icon.png",   
  },

  // إعدادات ظهور الرابط عند المشاركة (Open Graph)
  openGraph: {
    title: "Link UP | نربطك بالمستقبل",
    description: "علامة سعودية رائدة لملحقات الهواتف الذكية بجودة عالمية.",
    url: "https://linkup.sa", 
    siteName: "Link UP",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Link UP Brand Identity",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  // إعدادات منصة X
  twitter: {
    card: "summary_large_image",
    title: "Link UP | نربطك بالمستقبل",
    description: "حلول وملحقات الهواتف الذكية بجودة سعودية عالمية.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        <Navbar />
        
        <main>
          {children} 
        </main>
        
        <Footer />
      </body>
    </html>
  );
}