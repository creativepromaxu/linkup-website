import HeroSlider from "./Components/HeroSlider";
import VisionMission from "./Components/VisionMission";
import StatsCounters from "./Components/StatsCounters";
import Categories from "./Components/Categories";
import Partners from "./Components/Partners";
import Clients from "./Components/Clients";
import Certificates from "./Components/Certificates";
import Features from "./Components/Features"; // استيراد قسم المميزات الجديد
import Map from "./Components/Map"; // استيراد قسم الخريطة الجديد
import ProductSpotlight from "./Components/ProductSpotlight"; // استيراد القسم الجديد

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <HeroSlider />
      <VisionMission />
      <StatsCounters />
      <ProductSpotlight />
      <Categories />
      <Partners /> 
      <Clients /> 
      <Certificates /> {/* قسم الشهادات المطور (Lightbox) */}
      <Features /> {/* إضافة قسم المميزات منفصلاً */}
      <Map /> {/* إضافة قسم الخريطة ونقاط التواجد منفصلاً */}
    </main>
  );
}