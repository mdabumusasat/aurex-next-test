"use client";
import React from "react";
import Link from "next/link";

const plans = [
  {
    price: 399,
    title: "Starter Plan",
    monthly: "Monthly",
    recommended: false,
    features: [
      "Business Consultation",
      "Up to 10 Support Hours/Month",
      "Network Monitoring",
      "Email & Software Setup",
      "Monthly Health Reports",
    ],
    delay: ".3s",
  },
  {
    price: 660,
    title: "Professional Plan",
    monthly: "Monthly",
    recommended: true,
    features: [
      "Business Consultation",
      "Up to 10 Support Hours/Month",
      "Network Monitoring",
      "Email & Software Setup",
      "Monthly Health Reports",
    ],
    delay: ".5s",
  },
  {
    price: 990,
    title: "Enterprise Plan",
    monthly: "Monthly",
    recommended: false,
    features: [
      "Business Consultation",
      "Up to 10 Support Hours/Month",
      "Network Monitoring",
      "Email & Software Setup",
      "Monthly Health Reports",
    ],
    delay: ".7s",
  },
];

export default function PricingSection() {
  return (
    <section className="pricing-section pt-120 pb-120">
      <div className="md-container">
        <div className="row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={plan.delay}>
              <div
                className={`pricing-block ${
                  plan.recommended ? "style-2" : ""
                }`}>
                <div className="inner-box">
                  {plan.recommended && (
                    <div className="recommend">Recommended</div>
                  )}
                  <div className="price">
                    <sup>$</sup>
                    <span>{plan.price}</span> / {plan.monthly}
                  </div>
                  <div className="tag">{plan.title}</div>
                  <ul className="list">
                    {plan.features.map((item, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/page-contact" className="btn-style-one">
                    <span className="btn-title">Get Started</span>
                    <span className="dot-box">
                      <span className="dot-item"></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}