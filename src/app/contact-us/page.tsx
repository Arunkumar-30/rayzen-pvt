import ContactUsComponent from "@/components/ui-section/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Rayzen Power Private Limited", // Unique page title
  description:
    "Get in touch with Rayzen Pvt Ltd for inquiries, support, or consultation. We are here to assist you with your solar, hybrid, and home automation solutions.",
  keywords: ["Contact Rayzen", "Rayzen Support", "Contact Us", "Solar", "Hybrid Systems", "Home Automation"],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - Rayzen Power Private Limited",
    description:
      "Reach out to Rayzen Power Private Limited for inquiries, support, or consultation regarding our solar, hybrid, and home automation services.",
    url: "https://www.rayzenpower.com/contact-us", // Use your real URL
    siteName: "Rayzen Power Private Limited",
    type: "website",
  },
};
const ContactUs = () => {
  return (
    <>
      <ContactUsComponent />
    </>
  );
};
export default ContactUs;
