import Image from "next/image";

export default function LithiumESS() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Lithium ESS Solutions
          </h2>

          <button className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </button>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Store energy efficiently with our Lithium Energy Storage Systems (ESS). Ideal for homes, businesses, and industrial setups, our solutions ensure reliable backup power, optimized energy usage, and long-term sustainability.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/lithium-ess.jpg"} // replace with your Lithium ESS image
              width={600}
              height={300}
              className="object-contain"
              alt="Lithium Energy Storage System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Advantages of Lithium ESS
            </h3>
            <p className="text-lg text-gray-600">
              Our Lithium ESS provides safe, high-capacity energy storage that supports renewable integration, reduces peak energy costs, and guarantees backup power during outages.
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
                    High-capacity lithium batteries for long-lasting performance
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
                    Fast charging and discharging for peak efficiency
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
                    Safe, reliable, and eco-friendly energy storage
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
            Why Choose Us for Lithium ESS?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                High-Efficiency Lithium Batteries
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Reliable Backup Power
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Smart Energy Management
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Long Cycle Life & Durability
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Eco-Friendly & Safe
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Cost-Effective Energy Storage
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
            Core Steps of Our Lithium ESS Program
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Energy Assessment
              </h2>
              <p className="text-lg text-gray-600">
                Analyze your energy consumption and storage requirements to select the right Lithium ESS configuration.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Evaluate peak load and backup needs
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Determine battery capacity and inverter requirements
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Optimize for cost and energy efficiency
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
                Professional setup of lithium batteries, inverters, and monitoring systems for safe and efficient operation.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Safe placement and connection of all components
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Performance and safety checks
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    System calibration and user guidance
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
                Ensure maximum performance, safety, and longevity of your Lithium ESS.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Regular inspections and battery health checks
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Remote monitoring and performance reporting
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Technical support and troubleshooting
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
