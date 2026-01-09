"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "What types of solar power systems do you provide?",
    answer:
      "We provide on-grid, off-grid, and hybrid solar power systems for residential, commercial, and industrial applications.",
  },
  {
    question: "What is a hybrid solar system and how does it work?",
    answer:
      "A hybrid solar system combines solar panels, batteries, and grid power to ensure uninterrupted electricity supply even during power outages.",
  },
  {
    question: "Do you offer Lithium Energy Storage Systems (ESS)?",
    answer:
      "Yes, we provide advanced lithium battery energy storage systems that deliver high efficiency, long life, fast charging, and reliable power backup.",
  },
  {
    question: "Do you install CCTV security camera systems?",
    answer:
      "We offer professional CCTV security solutions including IP cameras, HD surveillance, remote monitoring, and complete installation services.",
  },
  {
    question: "Do you provide installation, maintenance, and after-sales support?",
    answer:
      "Yes, we offer end-to-end services including site inspection, system installation, regular maintenance, and dedicated after-sales support.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Frequently Asked <span className="text-[#e91414]">Questions</span>
      </h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {faqData.map((item, idx) => (
          <Disclosure key={idx} data-aos="fade-up" data-aos-duration="2000">
            {({ open }) => (
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <Disclosure.Button className="flex justify-between items-center w-full px-5 py-4 text-left  font-medium text-xl text-black  hover:bg-gray-50 focus:outline-none">
                  <span>{item.question}</span>
                  <ChevronUpIcon
                    className={`h-6 w-6 text-gray-700 transform transition-transform ${
                      open ? "" : "rotate-180"
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-5 pb-5 text-[#585858] text-md xl:text-[16px]  font-[500]">
                  {item.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
