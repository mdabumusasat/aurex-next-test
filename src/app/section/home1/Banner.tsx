"use client";
import React from "react";


export default function BannerSection() {
  return (
    <section className="banner-section relative overflow-hidden">
      <div className="bg-shape bg">
        <img
          src="/assets/images/banner/banner1-bg1.png"
          alt="bg"
        />
      </div>
      <div className="shape-1 bounce-x">
        <img
          src="/assets/images/icons/shape2.png"
          alt="shape"
        />
      </div>
      <div className="shape-2">
        <img
          src="/assets/images/banner/banner1-2.jpg"
          alt="shape"
        />
      </div>
      <div className="shape-3">
        <img
          src="/assets/images/banner/banner1-3.jpg"
          alt="shape"
        />
      </div>
      <div className="shape-4 bounce-y">
        <img
          src="/assets/images/icons/shape4.png"
          alt="shape"
        />
      </div>
      <div className="shape-5 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape5.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="sec-title">
          <div className="sub-title">
            <span className="icon-img animation__rotateX">
              <img
                src="/assets/images/icons/sub-title1.png"
                alt="icon"
              />
            </span>
            Creative Agency
          </div>
          <h1 className="title">
            We Help to grow your startup
            <img
              src="/assets/images/icons/shape3.png"
              alt="shape"
              className="pl-25"
            />
          </h1>
        </div>
        <div className="banner-info-box">
          <div className="info">
            <div className="image-box">
              <img
                src="/assets/images/resource/info1.jpg"
                alt="img"
              />
              <img
                src="/assets/images/resource/info2.jpg"
                alt="img"
              />
              <img
                src="/assets/images/resource/info3.jpg"
                alt="img"
              />
              <i className="icon fa-solid fa-plus ml-2"></i>
            </div>
            <div className="counter-box">
              <h4 className="count-box">
                <span className="count-text">18</span>k+
              </h4>
              <div className="text2">Customers Word.</div>
            </div>
          </div>
          <div className="text">
            There are many variations of passages available the majority have
            suffered alteration in some form, by injected of text.
          </div>
        </div>
        <div className="style-text">
          <img
            src="/assets/images/icons/style-text1.png"
            alt="style"
          />
        </div>
        <div className="banner-image tm-gsap-img-parallax">
          <img
            src="/assets/images/banner/banner1-1.jpg"
            alt="banner"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}