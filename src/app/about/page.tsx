import CommonBannerComponent from "@/components/ui-section/CommonBanner";

const About = () => {
  return (
    <>
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
            <img
              src="/home/img3.webp"
              alt="Rayzen Power solar solutions"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-[#f9fafb] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-black text-[40px] max-md:text-[28px] font-semibold mb-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            N-Type TOPCon Bifacial Solar Panel
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#585858] text-base xl:text-lg font-medium list-disc pl-5">
            <li>Higher efficiency and superior power output</li>
            <li>Bifacial generation from front and rear sides</li>
            <li>Lower annual degradation rate</li>
            <li>Excellent low-light and high-temperature performance</li>
            <li>Advanced N-Type TOPCon cell technology</li>
            <li>Improved resistance to micro-cracks and PID</li>
            <li>Longer lifespan with extended warranty</li>
            <li>Suitable for rooftop, ground-mounted & tracking systems</li>
            <li>Ideal for commercial & utility-scale projects</li>
            <li>Reliable in high-humidity & coastal regions</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
