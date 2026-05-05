"use client";
import Link from "next/link";
import React from "react";
import CounterUp from '../../components/elements/CounterUp';

const counters = [
  { value: 25 },  
];

export default function AboutSection() {
  return (
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-xl-8">
              <div className="inner-column">
                <div className="sec-title">
                  <h2 className="title">Our approach is straightforward Prioritizing functionality, speed, and clarity for solutions</h2>
                  <div className="bottom-box">
                    <div className="text">The point of using is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making readable English.</div>
                    <Link href="/page-contact" className="btn-style-one">
                      <span className="btn-title">Contact us</span>
                      <span className="dot-box"><span className="dot-item"></span></span>
                    </Link>
                  </div>
                </div>
                <div className="image tm-gsap-img-parallax"><img src="/assets/images/resource/about1-1.jpg" alt=""/></div>
                <div className="image2"><img src="/assets/images/resource/about1-2.jpg" alt=""/></div>
              </div>
            </div>
            <div className="about-column col-xxl-3 col-xl-4 col-lg-6">
              <div className="inner-column">
                <div className="circle-container">
                  <div className="logo"><img src="/assets/images/icons/logo.png" alt=""/></div>
                  <svg id="rotatingText" className="animation__rotateX" viewBox="0 0 188 188" width="188" height="188">
                    <defs>
                      <path id="circle" d="M 94, 94 m -69, 0 a 69,69 0 1,0 138,0 a 69,69 0 1,0 -138,0"/>
                    </defs>
                    <text>
                      <textPath alignmentBaseline="hanging" xlinkHref="#circle" className="text" textLength="433" startOffset="0">
                        About Us . aurex . About Us . aurex . About Us . aurex .
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="about-counter-info">
                  <div className="count-box"><span className="count-text"><CounterUp end={counters[0].value} /></span>+</div>
                  <h5 className="title">Years of experience</h5>
                  <div className="text">Explore how we transform ideas into extraordinary digital experiences</div>
                  <div className="image-box">
                    <img src="/assets/images/resource/info4.jpg" alt=""/>
                    <img src="/assets/images/resource/info5.jpg" alt=""/>
                    <img src="/assets/images/resource/info6.jpg" alt=""/>
                    <img src="/assets/images/resource/info7.jpg" alt=""/>
                  </div>
                  <h5 className="mb-0">1200+ happy users review</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-1 bounce-y"><img src="/assets/images/icons/shape6.png" alt=""/></div>
        <div className="shape-2 tm-gsap-img-parallax"><img src="/assets/images/icons/shape7.png" alt=""/></div>
      </section>
  );
}