"use client";
import React from "react";

export default function AboutSectionLayout2() {
  return (
    <section className="about-section-layout2">
      <div className="shape-1 bounce-x">
        <img
          src="/assets/images/icons/shape20.png"
          alt="shape"
        />
      </div>
      <div className="shape-2 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape21.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="about-column col-xl-4">
            <div className="inner-column">
              <div className="circle-container">
                <div className="logo">
                  <img
                    src="/assets/images/icons/logo2.png"
                    alt="logo"
                  />
                </div>
                <svg
                  id="rotatingText"
                  className="animation__rotateX"
                  viewBox="0 0 188 188"
                  width="188"
                  height="188">
                  <defs>
                    <path
                      id="circle"
                      d="M 94,94 m -69,0 a 69,69 0 1,0 138,0 a 69,69 0 1,0 -138,0"
                    />
                  </defs>
                  <text>
                    <textPath
                      href="#circle"
                      className="text"
                      textLength="433"
                      startOffset="0">
                      About Us . aurex . About Us . aurex . About Us . aurex .
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-column col-xl-8">
            <div className="inner-column">
              <h2 className="title">
                Share screenshots with technical data, record looms with already
                generated tasks, push bug reports to your task manager, talk
                with the AI which knows all the context
              </h2>
              <div className="text">
                _ This is just a small portion, Join the waitlist.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}