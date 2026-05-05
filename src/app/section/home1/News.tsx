"use client";
import React from "react";
import Link from "next/link";

const blogColumns = [
  [
    {
      date: "May 06, 2026",
      title: "Creative Strategies to help Brands stand out.",
    },
    {
      date: "May 06, 2026",
      title: "From Concept to Creation: A Creative Project",
    },
  ],
  [
    {
      date: "May 06, 2026",
      title: "Designing for the on the go user",
    },
    {
      date: "May 06, 2026",
      title: "How Agencies Help Brands stand out markets.",
    },
  ],
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <div className="icon-img animation__rotateX">
              <img
                src="/assets/images/icons/sub-title1.png"
                alt="icon"
              />
            </div>
            Our News & blogs
          </div>
          <h2 className="title">
            Our Space to share stories that <br />
            makes branding work
          </h2>
        </div>
        <div className="row">
          {blogColumns.map((column, columnIndex) => (
            <div
              className="col-xxl-3 col-xl-4 col-lg-6"
              key={columnIndex}>
              {column.map((blog, index) => (
                <div className="blog-block" key={index}>
                  <div className="inner-block">
                    <div className="icon">
                      <i className="fa-regular fa-arrow-right"></i>
                    </div>
                    <div className="date">({blog.date})</div>
                    <h4 className="title">
                      <Link href="/news-details">{blog.title}</Link>
                    </h4>
                    <Link
                      href="/news-details"
                      className="theme-btn blog-theme-btn">
                      <img
                        src="/assets/images/icons/arrow-icon1.png"
                        alt="arrow"
                      />
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className="col-xxl-6 col-xl-4">
            <div className="image overflow-hidden">
              <img
                src="/assets/images/resource/blog1-1.jpg"
                alt="blog"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}