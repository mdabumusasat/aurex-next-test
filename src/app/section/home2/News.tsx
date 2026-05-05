"use client";
import React from "react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    image: "/assets/images/resource/news2-1.jpg",
    category: "Branding",
    author: "rayan keller",
    title:
      "How agencies help brands stand out in competitive markets",
  },
  {
    id: 2,
    image: "/assets/images/resource/news2-1.jpg",
    category: "Branding",
    author: "rayan keller",
    title:
      "From concept to creation: inside a creative project",
  },
  {
    id: 3,
    image: "/assets/images/resource/news2-3.jpg",
    category: "Branding",
    author: "rayan keller",
    title:
      "Creative strategies to help brands stand out in 2025",
  },
  {
    id: 4,
    image: "/assets/images/resource/news2-4.jpg",
    category: "Branding",
    author: "rayan keller",
    title:
      "Design thinking: turning ideas into impactful solutions",
  },
];

export default function NewsSection() {
  return (
    <section className="news-section pt-120 pb-90">
      <div className="auto-container">
        <div className="row gx-4">

          {posts.map((post) => (
            <div key={post.id} className="col-xl-3 col-md-6">
              <div className="blog-post-style2">
                <div className="inner-block">
                  <div className="image-box">
                    <div className="image">
                      <Link href="/news-details">
                        <img
                          src={post.image}
                          alt={post.title}
                        />
                        <img
                          src={post.image}
                          alt={post.title}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="meta">
                      {post.category} // By {post.author}
                    </div>
                    <h4 className="title">
                      <Link href="/news-details">
                        {post.title}
                      </Link>
                    </h4>
                    <Link href="/news-details" className="read-more">
                      <i className="fas fa-long-arrow-right"></i> Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}