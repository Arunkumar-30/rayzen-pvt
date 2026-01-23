"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import CommonBannerComponent from "./CommonBanner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await axios.post("https://web.rayzenpower.com/contact.php", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ fullname: "", email: "", phone: "", service: "", message: "" });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<{ error?: string[] }>;
        if (error.response?.data?.error && Array.isArray(error.response.data.error)) {
          setStatus({ type: "error", message: error.response.data.error.join(", ") });
        } else {
          setStatus({ type: "error", message: "Server error. Please try again later." });
        }
      } else {
        setStatus({ type: "error", message: "Unexpected error occurred." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <CommonBannerComponent title="Contact Us" />
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="bg-[#f5f8fc] p-6 rounded-lg shadow space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-md border focus:ring-2 focus:ring-[#d11a19]"
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
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#d11a19] hover:bg-red-700"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status.message && (
              <p
                className={`text-sm text-center pt-2 ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
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
