"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CtaSectionLayout2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 50;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cta-section-layout2 pt-0">
      <div className="container">
        <div className="outer-box">
          <div className="bg-image bg tm-gsap-img-parallax">
            <img
              src="/assets/images/resource/cta2-1.jpg"
              alt="cta"
            />
          </div>
          <div className="cta-info-box">
            <div className="text">
              Serving happy customers worldwide with trusted excellence
            </div>
            <div className="counter-box">
              <h3 className="count-box">
                {count}K+
              </h3>
              <div className="text2">Users</div>
            </div>
            <div className="image-box">
              <img src="/assets/images/resource/info1.jpg" alt="info" />
              <img src="/assets/images/resource/info2.jpg" alt="info" />
              <img src="/assets/images/resource/info3.jpg" alt="info" />
              <i className="icon fa-solid fa-plus"></i>
            </div>
            <Link href="/page-contact" className="btn-style-two">
              <span className="btn-title">Book a Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}