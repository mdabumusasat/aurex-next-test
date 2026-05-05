"use client";
import React from "react";

const awards = [
  {
    company: "Ewebot",
    award: "Awwwards",
    title: "Site of The Day",
    year: "2020",
  },
  {
    company: "Juris",
    award: "Web Awards",
    title: "Developer Award",
    year: "2022",
  },
  {
    company: "SoulHeal",
    award: "Awwwards",
    title: "Best Innovation",
    year: "2023",
  },
  {
    company: "Utah",
    award: "Web Awards",
    title: "Best Innovation",
    year: "2025",
  },
];

export default function AwardSection() {
  return (
    <section className="award-section">
      <div className="bg-shape bounce-x">
        <img
          src="/assets/images/icons/shape12.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="sec-title2 mb-0">
          <div className="sub-title">
            <div className="icon-img animation__rotateX">
              <img
                src="/assets/images/icons/sub-title1.png"
                alt="icon"
              />
            </div>
            achievement & award
          </div>
          <h2 className="title">awards</h2>
        </div>
        <div className="award-activity-wrapper">
          {awards.map((item, index) => (
            <div className="award-activity-items" key={index}>
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-3">
                  <h4 className="award-text">{item.company}</h4>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3">
                  <h3 className="award-text">{item.award}</h3>
                </div>
                <div className="col-xl-3 offset-xl-2 col-lg-3 col-md-4">
                  <h4 className="award-text">{item.title}</h4>
                </div>
                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-2">
                  <h4 className="award-text text-right">{item.year}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}