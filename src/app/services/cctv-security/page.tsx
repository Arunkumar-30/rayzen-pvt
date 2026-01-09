import Image from "next/image";
import Link from "next/link";

export default function CCTVSecurityCameras() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            CCTV Security Camera Systems
          </h2>

          <Link href="/contact-us" className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </Link>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Protect your property with advanced CCTV security camera systems designed
          for real-time monitoring, crime prevention, and complete peace of mind
          for homes, businesses, and industrial premises.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/cctv-camera.webp"}
              width={600}
              height={300}
              className="object-contain"
              alt="CCTV Security Camera System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose CCTV Security Cameras
            </h3>
            <p className="text-lg text-gray-600">
              CCTV surveillance systems provide continuous monitoring, evidence
              recording, and remote access to enhance security. Our solutions
              ensure clear video quality, reliable performance, and intelligent
              monitoring features.
            </p>
            <ul className="space-y-4" data-aos="fade-up">
              {[
                "24/7 surveillance and real-time monitoring",
                "High-definition video recording with night vision",
                "Remote viewing through mobile and desktop devices",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start bg-[#FDE8E9] p-5"
                >
                  <span className="mr-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#E91414] text-white">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                  </span>

                  <span className="text-gray-800 font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Why Choose Us for CCTV Security Systems?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
            {[
              "High-Resolution IP & Analog Cameras",
              "Expert Camera Placement & Installation",
              "Night Vision & Motion Detection",
              "Remote Monitoring via Mobile App",
              "Secure Data Storage & Playback",
              "Reliable After-Sales Support",
            ].map((text, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-[#FDE8E8] border border-[#E91414] p-6 shadow-sm flex items-center justify-center text-center hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-[#8A0E0E]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Process */}
        <div className="w-full mt-10 mb-10">
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Core Steps of Our CCTV Installation Process
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Site Survey & Planning
              </h2>
              <p className="text-lg text-gray-600">
                Evaluate the premises to determine optimal camera placement and
                security coverage.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Entry and exit point analysis</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Blind spot identification</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Camera type selection</span></li>
              </ul>
            </div>

            {/* Installation */}
            <div className="space-y-6 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Camera Installation
              </h2>
              <p className="text-lg text-gray-600">
                Professional installation of cameras, DVR/NVR systems, and secure
                cabling.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Indoor & outdoor camera mounting</span></li>
                <li><span className="text-lg font-semibold text-gray-700">DVR/NVR configuration</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Live feed and recording setup</span></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Monitoring & Maintenance
              </h2>
              <p className="text-lg text-gray-600">
                Continuous system support to ensure reliable security and optimal
                camera performance.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">System health checks</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Storage and playback support</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Upgrades & troubleshooting</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
