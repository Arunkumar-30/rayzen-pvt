import BannerSlider from "@/components/ui-section/Banner";
import FaqAccordion from "@/components/ui-section/FaqSection";
import Service from "@/components/ui-section/Service";
import TestimonialSlider from "@/components/ui-section/Testimonal";
import WhyChooseUs from "@/components/ui-section/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <BannerSlider/>
  <WhyChooseUs/>
  <Service/>
  <FaqAccordion/>
         {/* Full-width section image */}
       <section className=" w-full h-full">
          <Image 
            src="/home/img2.webp" 
            alt="brand logos" 
            width={1920} 
            height={300}
            className="w-full h-full object-cover"
          />
       </section>

  <TestimonialSlider/>
  </>
  );
}
