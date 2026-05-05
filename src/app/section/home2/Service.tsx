"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Branding Design",
    icon: "/assets/images/icons/service-icon1.png",
    desc: "Branding is more than just a logo — it’s the foundation of your startup’s identity, growth, and credibility.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: "/assets/images/icons/service-icon2.png",
    desc: "We build scalable, high-performance websites tailored to your business goals and user needs.",
  },
  {
    id: 3,
    title: "UI UX Design",
    icon: "/assets/images/icons/service-icon3.png",
    desc: "Crafting intuitive and engaging experiences that connect users with your product seamlessly.",
  },
];

export default function ServiceSectionLayout2() {
  return (
    <section className="service-section-layout2">
      <div className="shape1 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape22.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="sec-outer">

          <div className="shape2 animation__rotateY">
            <img
              src="/assets/images/icons/shape23.png"
              alt="shape"
            />
          </div>
          <div className="sec-title">
            <div className="row">
              <div className="col-xl-4">
                <div className="sub-title">
                  <div className="icon-img">
                    <img
                      src="/assets/images/icons/sub-title1.png"
                      alt="icon"
                    />
                  </div>
                  Our Smart Services
                </div>
              </div>

              <div className="col-xl-8">
                <h2 className="title">
                  From branding to funding, we provide the tools & strategies
                  start-ups need to succeed in a competitive market.
                </h2>
              </div>
            </div>
          </div>
          <Link href="/page-services" className="btn-style-three">
            <img
              src="/assets/images/icons/arrow-icon3.png"
              alt="arrow"
            />
            View All Services
          </Link>
        </div>
        <div className="outer-box">
          <div className="row g-24">
            {services.map((service) => (
              <div
                key={service.id}
                className="col-xxl-4 col-xl-6 col-lg-6">
                <div className="service-block-layout2">
                  <div className="inner-block">
                    <div className="icon">
                      <img
                        src={service.icon}
                        alt={service.title}
                      />
                    </div>
                    <h3 className="title">
                      <Link href="/page-service-details">
                        {service.title}
                      </Link>
                    </h3>
                    <div className="text-box">
                      <div className="text">{service.desc}</div>
                    </div>
                    <div className="button-box">
                      <Link
                        href="/page-service-details"
                        className="theme-btn service-theme-btn">
                        <img
                          src="/assets/images/icons/arrow-icon3.png"
                          alt="arrow"
                        />
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}