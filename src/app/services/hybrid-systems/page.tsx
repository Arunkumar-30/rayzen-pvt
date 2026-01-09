import Image from "next/image";

export default function HybridSystems() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Hybrid Systems Solutions
          </h2>

          <button className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </button>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Combine the benefits of solar power and conventional energy systems with our Hybrid Systems solutions. Achieve reliable, uninterrupted power supply while optimizing energy costs and efficiency for homes and businesses.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/hybrid-systems.jpg"} // replace with your hybrid system image
              width={600}
              height={300}
              className="object-contain "
              alt="Hybrid Energy System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose Hybrid Systems
            </h3>
            <p className="text-lg text-gray-600">
              Our hybrid energy solutions combine solar power with grid or backup generators to ensure constant power availability. Reduce dependency on a single energy source, cut costs, and enjoy uninterrupted operations in any situation.
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
                    Seamless integration of solar and conventional power
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
                    Reliable power supply even during outages
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
                    Optimized energy management for cost efficiency
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
            Why Choose Us for Hybrid Systems?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Seamless Solar + Grid Integration
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Uninterrupted Power Supply
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Cost Optimization & Energy Efficiency
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Smart Monitoring & Control
              </p>
            </div>

            <div className="bg-[#FFFBE6] border border-yellow-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Scalable Solutions for Future Expansion
              </p>
            </div>

            <div className="bg-[#EDEFFE] border border-blue-600 p-6 rounded shadow flex items-center justify-center text-center" data-aos="zoom-in">
              <p className="text-lg font-medium text-gray-700">
                Expert Installation & Maintenance
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
            Core Steps of Our Hybrid Systems Program
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Energy Assessment
              </h2>
              <p className="text-lg text-gray-600">
                Analyze your energy needs and design a hybrid system that balances solar, grid, and backup sources efficiently.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Evaluate solar potential and existing grid supply
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Determine optimal battery storage requirements
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Identify opportunities to minimize energy costs
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
                Integrate solar panels, inverters, batteries, and grid connections for a seamless hybrid system setup.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Safe and accurate installation of all components
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    System calibration and efficiency testing
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    User training for monitoring and maintenance
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
                Ensure continuous performance and maximize the lifetime of your hybrid system.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Regular system check-ups and battery maintenance
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Performance monitoring via smart apps
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Technical support and optimization tips
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
