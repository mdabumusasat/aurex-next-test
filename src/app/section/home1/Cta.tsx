"use client";
import React from "react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section pt-0">
      <div className="shape1 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape13.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <div className="icon-img animation__rotateX">
              <img
                src="/assets/images/icons/sub-title1.png"
                alt="icon"
              />
            </div>
            Contact Us
          </div>
          <h2 className="title">
            Great Brands start with <br />
            great conversations
          </h2>
          <div className="text">
            If you’re to build something meaningful, we’d love to hear your
            story and <br />
            explore what’s next together
          </div>
          <div className="bottom-box">
            <Link href="/page-contact" className="btn-style-one">
              <span className="btn-title">Let’s Contact</span>
              <span className="dot-box">
                <span className="dot-item"></span>
              </span>
            </Link>
            <Link href="/page-contact" className="btn-style-four">
              <span className="btn-title">Email Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}