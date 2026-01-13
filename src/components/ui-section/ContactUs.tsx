"use client";

import React, { useState } from "react";
import CommonBannerComponent from "./CommonBanner";
import axios from "axios";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  console.log(loading);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Submitting form data:", formData);
      const res = await axios.post(
        "https://www.rayzenpower.com/contact.php",
        // "/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (err: unknown) {
      if (
        axios.isAxiosError(err) &&
        err.response?.data?.error &&
        Array.isArray(err.response.data.error)
      ) {
        alert("Error: " + err.response.data.error.join("\n"));
      } else {
        alert("Server error. Try again later.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CommonBannerComponent title="Contact Us" />
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20">
        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-[#d11a19]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-lg lg:text-xl xl:text-2xl font-[500] mb-1">
              Location
            </h3>
            <p className="text-[#585858] text-md xl:text-lg mt-1 font-[400]">
              K1/264, 567, Pollachi Main Rd, Raj Vijay Nagar, Eachanari, Coimbatore, Tamil Nadu - 641021
            </p>
          </div>
          <div
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-[#d11a19]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-lg lg:text-xl xl:text-2xl font-[500] mb-1">
              Phone
            </h3>
            <p className="text-[#585858] text-md xl:text-lg mt-1 font-[400]">
              +91 9840821382
            </p>
          </div>
          <div
            className="bg-white text-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-[#d11a19]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h3 className="text-lg lg:text-xl xl:text-2xl font-[500] mb-1">
              Email
            </h3>
            <p className="text-[#585858] text-md xl:text-lg mt-1 font-[400]">
              info@rayzenpower.com
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <h3
              className="text-primary text-lg font-medium mb-2 border-l-4 border-[#d11a19] pl-2"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Contact Us
            </h3>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Do you have any questions?
            </h2>
            <p
              className="text-[#585858] text-md xl:text-lg mt-1 font-[400] mb-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Click the link below for a free consultation with Rayzen Power
            </p>

            {/* <div
              className="flex items-center gap-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
               <Image
    src="/logo/Logo.jpg"
    alt="Rayzen Power Logo"
    width={96}
    height={96}
    priority
    className="rounded-full object-cover"
  />
              <div>
                <p
                  className="font-bold text-lg"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Rayzen Power Private Limited
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1"
                  >
                    🔗
                  </a>
                </p>
                <p
                  className="text-gray-500"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                 Expert Solar Installation, Lithium Storage & Smart Energy Solutions
                </p>
              </div>
            </div> */}
          </div>

          {/* Right Section - Form */}
          <form
            className="bg-[#f5f8fc] mt-8 p-6 rounded-lg shadow space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                data-aos="fade-up"
                data-aos-duration="2000"
                required
                className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d11a19]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                data-aos="fade-up"
                data-aos-duration="2000"
                required
                className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d11a19]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                data-aos="fade-up"
                data-aos-duration="2000"
                required
                className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d11a19]"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#d11a19]"
                data-aos="fade-up"
                data-aos-duration="2000"
                required
              >
                <option value="">Select a Service</option>
                <option value="solar-power-installation">Solar Power Installation</option>
                <option value="home-automation">Home Automation</option>
                <option value="hybrid-systems">Hybrid Systems</option>
                <option value="lithium-ess">Lithium ESS</option>
                <option value="cctv-security">CCTV Security Cameras</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              data-aos="fade-up"
              data-aos-duration="2000"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#d11a19]"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-[#d11a19] to-[#d11a19] text-white font-semibold hover:from-red-600 hover:to-red-700"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Submit
            </button>

            {/* {status && (
              <p className="text-sm text-center text-green-600 pt-2">
                {status}
              </p>
            )} */}
          </form>
        </div>
      </section>
      <section>
        <div data-aos="fade-up" data-aos-duration="2000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6255851206906!2d76.98786107408932!3d10.916033356605022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85ba3a8e1ff51%3A0x6d9c4a38882fae17!2sRayzen%20Power%20Private%20Limited!5e0!3m2!1sen!2sin!4v1767877145600!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            className="card"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
         
        </div>
      </section>
    </div>
  );
}
