import BannerSlider from "@/components/ui-section/Banner";
import FaqAccordion from "@/components/ui-section/FaqSection";
import Service from "@/components/ui-section/Service";
import TestimonialSlider from "@/components/ui-section/Testimonal";
import WhyChooseUs from "@/components/ui-section/WhyChooseUs";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: {
    default: "Rayzen Power Private Limited",
    template: "%s | Rayzen Power Private Limited",
  },
  description:
    "Rayzen Power Private Limited is a leading manufacturer of high-quality power solutions in India.",
  keywords: [
    "Rayzen Power",
    "Solar Power",
    "Hybrid Systems",
    "Home Automation",
    "Energy Storage",
    "Lithium ESS",
    "Power Solutions India"
  ],
  icons: {
    icon: "/fav.png",
  },
  metadataBase: new URL("https://www.rayzenpower.com"),
  robots: "index, follow",
  openGraph: {
    title: "Rayzen Power Private Limited",
    description: "Rayzen Power Private Limited is a leading manufacturer of high-quality power solutions in India.",
    url: "https://www.rayzenpower.com",
    siteName: "Rayzen Power Private Limited",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayzen Power Private Limited",
    description: "Leading manufacturer of high-quality power solutions in India.",
    images: ["/fav.png"],
  },
};


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
            priority
            className="w-full h-full object-cover"
          />
       </section>

  <TestimonialSlider/>
   <Script
    id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Rayzen Power?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rayzen Power Private Limited is a leading manufacturer of high-quality power solutions in India."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide hybrid solar solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide solar, hybrid, and energy storage solutions for homes and businesses."
                }
              }
            ]
          })
        }}
      />
  </>
  );
}
