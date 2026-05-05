"use client";
import React from "react";
import Link from "next/link";

export default function BannerSectionTwo() {
  return (
    <section className="banner-section-two">
      <div className="shape-3">
        <img src="/assets/images/icons/shape19.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="content-column col-xxl-8">
            <div className="inner-column">
              <div className="sec-title">
                <div className="sub-title">
                  <div className="icon-img">
                    <img
                      src="/assets/images/icons/sub-title1.png"
                      alt="icon"
                    />
                  </div>
                  Digital Agency
                </div>
                <h1 className="title">
                  We Think & <br />
                  S
                  <img
                    src="/assets/images/icons/shape16.png"
                    alt="shape"
                  />
                  lve
                </h1>
              </div>
              <div className="bottom-box">
                <div className="text">
                  There are many variations of passages available the majority
                  have suffered alteration in some form, by injected of text.
                </div>
                <Link href="/page-contact" className="btn-style-one">
                  <span className="btn-title">Let’s Contact</span>
                  <span className="dot-box">
                    <span className="dot-item"></span>
                  </span>
                </Link>
              </div>
              <div className="shape-1 animation__rotateY">
                <img src="/assets/images/icons/shape18.png" alt="shape" />
              </div>
              <div className="shape-2 bounce-x">
                <img src="/assets/images/icons/shape17.png" alt="shape" />
              </div>
            </div>
          </div>
          <div className="info-column col-xxl-3 offset-xl-1">
            <div className="banner-info-box">
              <div className="counter-box">
                <h3 className="count-box">
                  <span className="count-text">18k</span>+
                </h3>
                <div className="text2">Customers Word.</div>
              </div>
              <div className="image-box">
                <img src="/assets/images/resource/info1.jpg" alt="info" />
                <img src="/assets/images/resource/info2.jpg" alt="info" />
                <img src="/assets/images/resource/info3.jpg" alt="info" />
                <i className="icon fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="image tm-gsap-img-parallax overflow-hidden">
              <img
                src="/assets/images/banner/banner2-1.jpg"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-image tm-gsap-img-parallax">
        <img
          src="/assets/images/banner/banner2-2.jpg"
          alt="banner"
        />
      </div>
    </section>
  );
}