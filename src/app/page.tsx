import BannerSlider from "@/components/ui-section/Banner";
import FaqAccordion from "@/components/ui-section/FaqSection";
import Service from "@/components/ui-section/Service";
import WhyChooseUs from "@/components/ui-section/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <BannerSlider/>
  <WhyChooseUs/>
  <Service/>
         {/* Full-width section image */}
       <section className=" w-full h-full">
          <img 
            src="/home/img2.png" 
            alt="brand logos" 
            className="w-full h-full object-cover"
          />
       </section>

  <FaqAccordion/>
  </>
  );
}
