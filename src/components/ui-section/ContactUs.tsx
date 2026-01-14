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
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

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
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post(
        "https://www.rayzenpower.com/contact.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });

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
        setStatus({
          type: "error",
          message: err.response.data.error.join(", "),
        });
      } else {
        setStatus({
          type: "error",
          message: "Server error. Please try again later.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CommonBannerComponent title="Contact Us" />

      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20">
        {/* Contact Info */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#d11a19]">
            <h3 className="text-xl font-medium">Location</h3>
            <p className="text-gray-600 mt-1">
              K1/264, 567, Pollachi Main Rd, Eachanari, Coimbatore, Tamil Nadu - 641021
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#d11a19]">
            <h3 className="text-xl font-medium">Phone</h3>
            <p className="text-gray-600 mt-1">+91 9840821382</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#d11a19]">
            <h3 className="text-xl font-medium">Email</h3>
            <p className="text-gray-600 mt-1">info@rayzenpower.com</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Left Content */}
          <div>
            <h3 className="text-lg font-medium border-l-4 border-[#d11a19] pl-2 mb-2">
              Contact Us
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Do you have any questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Click the form to get a free consultation with Rayzen Power.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#f5f8fc] p-6 rounded-lg shadow space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="px-4 py-3  rounded-md border focus:ring-2 focus:ring-[#d11a19]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#d11a19]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#d11a19]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#d11a19]"
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
              required
              className="w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#d11a19]"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md text-white font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#d11a19] hover:bg-red-700"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status.message && (
              <p
                className={`text-sm text-center pt-2 ${
                  status.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
