"use client";
import React from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Busy-net Traffic Grow",
    category: "Marketing",
    image: "/assets/images/resource/project2-1.jpg",
    className: "col-xxl-4 col-xl-6 col-lg-6 offset-xxl-1",
  },
  {
    id: 2,
    title: "Behind Creta UX",
    category: "Marketing",
    image: "/assets/images/resource/project2-2.jpg",
    className: "col-lg-6 offset-xxl-1",
  },
  {
    id: 3,
    title: "Product Advertisement",
    category: "Marketing",
    image: "/assets/images/resource/project2-3.jpg",
    className: "col-lg-6",
  },
  {
    id: 4,
    title: "Digital Branding",
    category: "Marketing",
    image: "/assets/images/resource/project2-4.jpg",
    className: "col-xxl-4 col-xl-6 col-lg-6 offset-xxl-1",
  },
];

export default function ProjectsSectionLayout2() {
  return (
      <section className="projects-section-layout2 pt-100 pb-90">
        <div className="container">
          <div className="sec-title text-center">
            <h1 className="title">Featured <br/>Work</h1>
            <div className="sec-icon"><Link href="/page-projects"><i className="fa-solid fa-arrow-down"></i></Link></div>
            <div className="text">We create innovative and purposeful designs that not only capture attention <br/>but also drive meaningful results.</div>
          </div>
          <div className="outer-box">
            <div className="row align-items-center">
              <div className="project-block-layout2 col-xxl-4 col-xl-6 col-lg-6 offset-xxl-1">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link href="/page-project-details">
                        <img src="/assets/images/resource/project2-1.jpg" alt="Image" />
                        <img src="/assets/images/resource/project2-1.jpg" alt="Image" />
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="text">Marketing</div>
                    <h4 className="title"><Link href="/page-project-details">Busy-net Traffic Grow</Link></h4>
                  </div>
                </div>
              </div>
              <div className="project-block-layout2 col-lg-6 offset-xxl-1">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link href="/page-project-details">
                        <img src="/assets/images/resource/project2-2.jpg" alt="Image" />
                        <img src="/assets/images/resource/project2-2.jpg" alt="Image" />
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="text">Marketing</div>
                    <h4 className="title"><Link href="/page-project-details">Behind Creta UX</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="outer-box2">
            <div className="row align-items-center">
              <div className="project-block-layout2 col-lg-6">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link href="/page-project-details">
                        <img src="/assets/images/resource/project2-3.jpg" alt="Image" />
                        <img src="/assets/images/resource/project2-3.jpg" alt="Image" />
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="text">Marketing</div>
                    <h4 className="title"><Link href="/page-project-details">Product Advertisement</Link></h4>
                  </div>
                </div>
              </div>
              <div className="project-block-layout2 col-xxl-4 col-xl-6 col-lg-6 offset-xxl-1">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <Link href="/page-project-details">
                        <img src="/assets/images/resource/project2-4.jpg" alt="Image" />
                        <img src="/assets/images/resource/project2-4.jpg" alt="Image" />
                      </Link>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="text">Marketing</div>
                    <h4 className="title"><Link href="/page-project-details">Digital Branding</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
