"use client";
import React from "react";

const awards = [
  { year: "2012", title: "Design Excellence", org: "Awards" },
  { year: "2016", title: "Top Designer Award", org: "Envato" },
  { year: "2018", title: "Design of the Year", org: "CSS Winner" },
  { year: "2022", title: "Satisfaction Award", org: "Behance" },
  { year: "2023", title: "Excellence Award", org: "Excellence Award" },
  { year: "2024", title: "Brilliance Award", org: "LinkedIn" },
];

export default function AwardSection2() {
  return (
    <section className="award-section-2">
      <div className="container">
        <div className="outer-box">
          <div className="shape1 bounce-x">
            <img
              src="/assets/images/icons/shape24.png"
              alt="shape"
            />
          </div>
          <div className="sec-title-box">
            <div className="sec-title2">
              <h2 className="title">Award</h2>
              <div className="text2">(05 Award We’ve Won!)</div>
            </div>
            <div className="text">
              Winning or being nominated for these awards can showcase <br />
              an agency’s excellence and creativity.
            </div>
          </div>
          <div className="award-block-wrapper-2">
            {awards.map((item, index) => (
              <div key={index} className="award-block-item-2">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="award-text">{item.year}</div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h4 className="award-text">{item.title}</h4>
                  </div>
                  <div className="col-lg-5 col-md-3">
                    <div className="award-text">{item.org}</div>
                  </div>
                  <div className="col-md-1">
                    <div className="award-icon">
                      <img
                        src="/assets/images/icons/award-icon2.png"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="hover-image d-none d-lg-block">
                  <img
                    src="/assets/images/resource/award2-1.png"
                    alt="award"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}