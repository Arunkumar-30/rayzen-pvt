import Image from "next/image";

export default function CCTVSecurity() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            CCTV Security Camera Solutions
          </h2>

          <button className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </button>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Protect your property and assets with our advanced CCTV security camera systems. Monitor real-time activity, deter intrusions, and ensure peace of mind for homes, offices, and industrial setups.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/cctv-camera.jpg"} 
              width={600}
              height={300}
              className="object-contain "
              alt="CCTV Security Cameras"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Benefits of CCTV Security Systems
            </h3>
            <p className="text-lg text-gray-600">
              Our CCTV systems provide continuous surveillance, evidence recording, and remote monitoring, helping to prevent theft, vandalism, and unauthorized access.
            </p>
            <ul className="space-y-4" data-aos="fade-up">
              <li className="flex items-start bg-[#afcb2045] p-5">
                <span className="text-blue-500 mr-4">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                </span>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Real-time monitoring and alerts for enhanced security
                  </span>
                </div>
              </li>
              <li className="flex items-start bg-[#afcb2045] p-5">
                <span className="text-blue-500 mr-4">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                </span>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Deterrence of unauthorized access and intrusions
                  </span>
                </div>
              </li>
              <li className="flex items-start bg-[#afcb2045] p-5">
                <span className="text-blue-500 mr-4">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                </span>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Evidence recording for accountability and investigation
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Why Choose Our CCTV Systems?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                High-Resolution Cameras
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Night Vision & Motion Detection
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Remote Access & Mobile Monitoring
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Easy Integration with Security Systems
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Scalable for Homes & Enterprises
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Reliable and Cost-Effective Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Core Steps / Installation Process */}
        <div className="w-full mt-10 mb-10">
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Core Steps of Our CCTV Installation
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Site Assessment
              </h2>
              <p className="text-lg text-gray-600">
                Determine camera placement, coverage areas, and security needs.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Identify high-risk areas and entry points
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Evaluate lighting and visibility conditions
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Plan optimal camera angles and coverage
                  </span>
                </li>
              </ul>
            </div>

            {/* Installation */}
            <div className="space-y-6 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Installation
              </h2>
              <p className="text-lg text-gray-600">
                Professional installation of cameras, wiring, and recording systems.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Secure mounting and cabling
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    DVR/NVR setup and testing
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Integration with monitoring apps
                  </span>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Monitoring & Maintenance
              </h2>
              <p className="text-lg text-gray-600">
                Ensure your CCTV system remains reliable and fully operational.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Regular system checks and firmware updates
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Troubleshooting and remote support
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Optimized recording and storage management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
