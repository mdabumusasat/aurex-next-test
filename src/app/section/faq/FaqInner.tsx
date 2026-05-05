"use client";

import React, { useState } from "react";

const faqLeft = [
  {
    q: "What services does your digital agency offer?",
    a: "I cannot say enough good things about the team at Company Name. They took our vision and turned it into a stunning website that perfectly captures our brand.",
  },
  {
    q: "How long have you been in business?",
    a: "We have been in business for several years delivering high-quality digital solutions for clients worldwide.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We specialize in tech, e-commerce, healthcare, and creative industries with tailored solutions.",
  },
  {
    q: "Do you design custom websites?",
    a: "Yes, every website we build is fully custom, responsive, and optimized for performance.",
  },
];

const faqRight = [...faqLeft]; // same content as your layout

export default function FaqSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(0);
  const [openRight, setOpenRight] = useState<number | null>(0);

  return (
    <section className="faqs-section pt-120 pb-120">
      <div className="md-container">
        <div className="row">

          {/* LEFT COLUMN */}
          <div className="faq-column col-lg-6">
            <div className="inner-column pt-0">
              <ul className="accordion-box mb-5 mb-lg-0">

                {faqLeft.map((item, index) => {
                  const isOpen = openLeft === index;

                  return (
                    <li
                      key={index}
                      className={`accordion block ${isOpen ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${isOpen ? "active" : ""}`}
                        onClick={() =>
                          setOpenLeft(isOpen ? null : index)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {item.q}
                        <div className="icon far fa-angle-down"></div>
                      </div>

                      {isOpen && (
                        <div className="acc-content current">
                          <div className="content">
                            <div className="text">{item.a}</div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}

              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="faq-column col-lg-6">
            <div className="inner-column pt-0">
              <ul className="accordion-box">

                {faqRight.map((item, index) => {
                  const isOpen = openRight === index;

                  return (
                    <li
                      key={index}
                      className={`accordion block ${isOpen ? "active-block" : ""}`}
                    >
                      <div
                        className={`acc-btn ${isOpen ? "active" : ""}`}
                        onClick={() =>
                          setOpenRight(isOpen ? null : index)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {item.q}
                        <div className="icon far fa-angle-down"></div>
                      </div>

                      {isOpen && (
                        <div className="acc-content current">
                          <div className="content">
                            <div className="text">{item.a}</div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}

              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}