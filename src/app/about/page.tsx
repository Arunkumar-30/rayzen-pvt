import CommonBannerComponent from "@/components/ui-section/CommonBanner";
import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";


// SEO Metadata
export const metadata: Metadata = {
  title: "About Rayzen Power - Solar Energy Solutions in India",
  description:
    "Learn about Rayzen Power, a leading solar energy company in India. Discover our mission, vision, and innovative solar solutions for homes and businesses.",
  keywords:
    "Rayzen Power, solar energy, solar panels, lithium batteries, solar inverters, sustainable energy, renewable energy India",
  openGraph: {
    title: "About Rayzen Power - Solar Energy Solutions in India",
    description:
      "Learn about Rayzen Power, a leading solar energy company in India. Discover our mission, vision, and innovative solar solutions for homes and businesses.",
    siteName: "Rayzen Power",
    url: "https://rayzenpower.com/about",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rayzenpower.com/home/img3.webp",
        width: 1200,
        height: 630,
        alt: "Rayzen Power solar solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rayzen Power - Solar Energy Solutions in India",
    description:
      "Learn about Rayzen Power, a leading solar energy company in India. Discover our mission, vision, and innovative solar solutions for homes and businesses.",
    creator: "@RayzenPower",
    images: ["https://rayzenpower.com/home/img3.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
const About = () => {
  return (
    <>
    <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rayzen Power Private Limited",
            url: "https://www.rayzenpower.com",
            logo: "https://www.rayzenpower.com/fav.png",
            sameAs: [
              "https://www.facebook.com/RayzenPower",
              "https://www.linkedin.com/company/rayzen-power",
              "https://www.instagram.com/rayzenpower",
              "https://twitter.com/RayzenPower"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "Customer Service",
              areaServed: "IN"
            },
            description: "Rayzen Power is a leading solar energy company in India, providing solar panels, lithium batteries, and inverters for residential and commercial setups."
          }),
        }}
      />
      {/* Banner Section */}
      <CommonBannerComponent title="About Us" />

      {/* About Rayzen Power */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center gap-14">
          
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2
              className="text-black text-[44px] max-md:text-[30px] font-semibold leading-tight"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              About Rayzen Power
            </h2>

            <p
              className="text-[#585858] text-base xl:text-lg font-medium mt-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Rayzen Power is a modern solar energy company providing high-quality
              and efficient power solutions. We offer premium solar panels,
              advanced lithium batteries, and reliable inverters for homes and
              businesses.
              <br />
              <br />
              We handle everything from system design and installation to
              after-sales service, ensuring clear communication and trusted
              support at every step.
              <br />
              <br />
              Our products are built for maximum energy savings and long-lasting
              performance. Rayzen Power is committed to helping customers choose
              smart, clean, and sustainable energy solutions.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Our Mission
                </h3>
                <p
                  className="text-[#585858] text-base xl:text-lg font-medium leading-relaxed"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  To empower individuals and businesses with dependable solar
                  power solutions, driven by innovation and locally manufactured
                  inverters, supporting India’s journey toward a sustainable
                  energy future.
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl font-semibold text-black mb-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Our Vision
                </h3>
                <p
                  className="text-[#585858] text-base xl:text-lg font-medium leading-relaxed"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  To be India’s most trusted provider of advanced, high-performance
                  solar inverters, recognized for innovation, customer
                  excellence, and accelerating the nation’s shift to clean
                  energy.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="md:w-[45%] h-[420px] rounded-3xl overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              src="/home/vector.webp"
              alt="Rayzen Power solar solutions"
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              priority
      

            />
          </div>
        </div>
      </section>

  
    </>
  );
};

export default About;
