"use client";
import React from "react";

export default function ContactSectionLayout2() {
  return (
    <section className="contact-section-layout2">
      <div className="shape1">
        <img
          src="/assets/images/icons/shape25.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="content-column col-xxl-7 col-xl-6">
            <div className="inner-column">
              <div className="shape2 bounce-x">
                <img
                  src="/assets/images/icons/shape20.png"
                  alt="shape"
                />
              </div>
              <div className="shape3 animation__rotateY">
                <img
                  src="/assets/images/icons/shape26.png"
                  alt="shape"
                />
              </div>
              <div className="sec-title">
                <div className="sub-title">
                  <div className="icon-img">
                    <img
                      src="/assets/images/icons/sub-title1.png"
                      alt="icon"
                    />
                  </div>
                  Contact us
                </div>
                <h2 className="title">
                  Have A project <br />
                  in mind? let’s get <br />
                  in touch
                </h2>
              </div>
              <div className="circle-container">
                <div className="logo">
                  <img
                    src="/assets/images/icons/logo3.png"
                    alt="logo"
                  />
                </div>
                <svg
                  viewBox="0 0 188 188"
                  width="188"
                  height="188"
                  className="animation__rotateX">
                  <defs>
                    <path
                      id="circle"
                      d="M 94,94 m -69,0 a 69,69 0 1,0 138,0 a 69,69 0 1,0 -138,0"
                    />
                  </defs>
                    <text>
                      <textPath alignmentBaseline="hanging" xlinkHref="#circle" className="text" textLength="433" startOffset="0">
                        Contact Us. Contact Us. Contact Us. Contact Us.
                      </textPath>
                    </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="contact-column col-xxl-5 col-xl-6">
            <div className="inner-column">
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                />
                <textarea
                  name="message"
                  placeholder="Comment*"
                />
                <button className="btn-style-one" type="submit">
                  <span className="btn-title">Let’s Contact</span>
                  <span className="dot-box">
                    <span className="dot-item"></span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}