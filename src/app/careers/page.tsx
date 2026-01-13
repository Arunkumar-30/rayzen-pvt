
import { Metadata } from "next";

import CommonBannerComponent from "@/components/ui-section/CommonBanner";

// SEO Metadata
export const metadata: Metadata = {
  title: "Careers - Rayzen Power Private Limited",
  description:
    "Explore career opportunities at Rayzen Power Private Limited. Join our team in solar, CCTV, GPS, and home automation solutions.",
  keywords: [
    "Careers at Rayzen Power",
    "Sales Manager Jobs",
    "Field Engineer Jobs",
    "HR Executive Jobs",
    "Solar Careers",
    "CCTV Jobs",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Careers - Rayzen Power Private Limited",
    description:
      "Join Rayzen Power Private Limited and grow your career in solar, CCTV, GPS, and automation solutions.",
    url: "https://www.rayzenpower.com/careers",
    siteName: "Rayzen Power Private Limited",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <main>
      <CommonBannerComponent title="Careers" />

      <section className="my-20 max-w-7xl mx-auto px-5 space-y-8">
        {/* Job Card */}
        <JobCard
          title="Sales Manager"
          location="Field Work"
          type="Full Time"
          salary="₹1.5 LPA – ₹3.5 LPA  (Based on experience & performance) "
          description="We are seeking an energetic and target-oriented Field Sales Executive (B2C) to 
promote and sell our products/services directly to customers in assigned 
territories. The role involves field work, customer acquisition, and achieving 
sales targets. "
          responsibilities={[
            "Visit customers in assigned areas to promote products/services ",
            "Generate new leads and close sales through field visits ",
            "Achieve daily, weekly, and monthly sales targets ",
            "Build and maintain strong relationships with customers ",
            "Conduct product demonstrations and explain benefits clearly ",
            "Collect customer feedback and report market trends ",
            "Ensure timely payment collection, if applicable ",
            "Maintain daily activity reports and sales records "
          ]}
          qualifications={[
            "1 to 5 years of experience in B2C field sales ",
            "Strong communication and convincing skills ",
            "Ability to work on targets and in the field ",
            "Good negotiation and interpersonal skills ",
            "Basic knowledge of smartphones, MS Office, or sales apps "
          ]}
        />

        <JobCard
          title="Field Engineer"
          location="Tiruchengode"
          type="Full Time"
          salary="As per industry standards"
          description="Surya GPS is hiring energetic and dedicated GPS / CCTV Field Engineers to handle 
installation, maintenance, and support of GPS tracking systems and CCTV cameras. 
Freshers are welcome, and full training will be provided. "
          responsibilities={[
           "Installation and configuration of GPS devices and CCTV cameras", 
" Field service, maintenance, and troubleshooting", 
" On-site customer support", 
" Ensure proper cabling, mounting, and system performance ",
" Coordinate with the technical team ",
" Maintain basic service and installation records ",
          ]}
          qualifications={[
            "BE / Diploma / ITI (Electrical / Electronics preferred)",
            "Freshers can apply",
            "Willingness to work in the field",
            "Team player with a positive attitude ",
            "Basic technical knowledge",
          ]}
          benefits={[
            "Free accommodation",
            "Free food",
            "Training & career growth",
          ]}
        />

        <JobCard
          title="HR Executive"
          location="Office"
          type="Full Time"
          salary="As per industry standards"
          description="We are looking for an HR Executive to manage recruitment, employee relations, and HR operations."
          responsibilities={[
            "End-to-end recruitment process",
            "Employee onboarding & documentation",
            "Maintain HR records and attendance",
            "Handle employee queries & coordination",
            "Support management with HR operations",
          ]}
          qualifications={[
            "Graduate / MBA in HR preferred",
            "Good communication skills",
            "Basic knowledge of HR processes",
            "MS Office proficiency",
          ]}
        />
      </section>
    </main>
  );
}

/* ---------------- Job Card Component ---------------- */

function JobCard({
  title,
  location,
  type,
  salary,
  description,
  responsibilities,
  qualifications,
  benefits,

}: {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits?: string[];

}) {
  const mailtoLink = `mailto:swathi@rayzenpower.com
?subject=Job Application - ${encodeURIComponent(title)}
&body=Dear HR Team,%0D%0A%0D%0AI would like to apply for the position of ${encodeURIComponent(
    title
  )} at Rayzen Power Private Limited.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Name]%0D%0A[Your Phone Number]`;

  return (
    <article className="border rounded-lg p-6 shadow-sm hover:shadow-md transition space-y-4">
      <header>
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">
          📍 {location} | 🕒 {type} | 💰 {salary}
        </p>
      </header>

      <p className="text-gray-700">{description}</p>

      <div>
        <h3 className="font-semibold text-gray-800">Key Responsibilities</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">Qualifications</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {qualifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {benefits && (
        <div>
          <h3 className="font-semibold text-gray-800">Benefits</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-4 pt-4">
        {/* Apply via Email */}
        <a
          href={mailtoLink}
          className="px-6 py-2 bg-[#d11a19] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition"
        >
          Apply via Email
        </a>

      
      </div>
    </article>
  );
}

