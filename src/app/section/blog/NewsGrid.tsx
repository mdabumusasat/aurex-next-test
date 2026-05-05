"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    date: "December 14, 2025",
    title: "Creative Strategies to help Brands stand out.",
  },
  {
    id: 2,
    date: "December 08, 2025",
    title: "From Concept to Creation: A Creative Project",
  },
  {
    id: 3,
    date: "December 02, 2025",
    title: "Designing for the on the go user",
  },
  {
    id: 4,
    date: "December 22, 2025",
    title: "How Agencies Help Brands stand out markets.",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section pt-120 pb-90">
      <div className="auto-container">
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-xl-3 col-sm-6">
              <div className="blog-block">
                <div className="inner-block">
                  <div className="icon">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                  <div className="date">({blog.date})</div>
                  <h4 className="title">
                    <Link href="/news-details">
                      {blog.title}
                    </Link>
                  </h4>
                  <Link href="/news-details" className="theme-btn blog-theme-btn">
                    <img
                      src="/assets/images/icons/arrow-icon1.png"
                      alt="arrow" className="mr-10"
                    />
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}