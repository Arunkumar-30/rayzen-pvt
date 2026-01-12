import { Metadata } from "next";
import CommonBannerComponent from "@/components/ui-section/CommonBanner";


// SEO Metadata for Careers page
export const metadata: Metadata = {
  title: "Careers - Rayzen Power Private Limited",
  description:
    "Explore career opportunities at Rayzen Power Private Limited. Join our team of professionals in solar, hybrid, and home automation solutions to make an impact in sustainable energy.",
  keywords: [
    "Careers at Rayzen Power",
    "Jobs at Rayzen Power",
    "Solar Jobs",
    "Hybrid Systems Careers",
    "Home Automation Jobs",
    "Rayzen Power Careers",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Careers - Rayzen Power Private Limited",
    description:
      "Join Rayzen Power Private Limited and be part of our expert team working on solar, hybrid, and home automation solutions.",
    url: "https://www.rayzenpower.com/careers", // Actual page URL
    siteName: "Rayzen Power Private Limited",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <CommonBannerComponent title="Careers" />

      <div className="my-20 max-w-7xl mx-auto px-5">
        <div className="border rounded">
          <div className="p-5">Currently There is No Openings.</div>
        </div>
      </div>
    </div>
  );
};

export default page;
