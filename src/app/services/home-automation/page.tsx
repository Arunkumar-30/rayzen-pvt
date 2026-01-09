import Image from "next/image";

export default function HomeAutomation() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Home Automation Solutions
          </h2>

          <button className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </button>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Transform your living space with smart home automation systems. Control lighting, security, climate, entertainment, and appliances seamlessly from a single interface for comfort, convenience, and energy efficiency.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/home-automation.jpg"} // replace with your image
              width={600}
              height={300}
              className="object-contain "
              alt="Home Automation System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose Home Automation
            </h3>
            <p className="text-lg text-gray-600">
              Enjoy a smarter, safer, and more energy-efficient home. Our home automation solutions offer remote control, scheduling, and automation features that make everyday tasks effortless while saving energy and enhancing security.
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
                    Seamless control of lights, climate, and appliances
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
                    Energy-efficient automation for reduced electricity bills
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
                    Enhanced home security with smart monitoring and alerts
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
            Why Choose Us for Home Automation?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Smart Lighting & Climate Control
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Remote Monitoring & Control
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Enhanced Security Systems
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Energy Efficiency & Savings
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Seamless Integration with Existing Devices
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Personalized Automation Schedules
              </p>
            </div>
          </div>
        </div>

        {/* Core Components / Implementation Process */}
        <div className="w-full mt-10 mb-10">
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Core Steps of Our Home Automation Program
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Consultation */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Consultation & Planning
              </h2>
              <p className="text-lg text-gray-600">
                Assess your home requirements and design a smart home automation plan tailored to your lifestyle.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Identify devices and systems for automation
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Determine energy-saving opportunities
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Plan secure and efficient system integration
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
                Set up smart devices, hubs, sensors, and controllers for seamless home automation.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Device configuration and integration
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Network setup and connectivity checks
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    System testing for smooth operation
                  </span>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Support & Optimization
              </h2>
              <p className="text-lg text-gray-600">
                Ensure your home automation system continues to function efficiently and adapt to your changing needs.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Regular software updates and troubleshooting
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Energy usage monitoring and optimization
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Personalized schedules and automation adjustments
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
