"use client";
import Link from "next/link";
import React from "react";

export default function ProjectsSection() {
  return (
      <section className="projects-section pb-60">
        <div className="bg-shape bg"><img src="/assets/images/icons/project1-bg1.png" alt=""/></div>
        <div className="shape1"><img src="/assets/images/icons/shape8.png" alt=""/></div>
        <div className="container">
          <div className="sec-title-box">
            <div className="sec-title mb-0">
              <div className="sub-title"><div className="icon-img animation__rotateX"><img src="/assets/images/icons/sub-title1.png" alt=""/></div>Our Projects</div>
              <h2 className="title">Crafting Brands That <br/>Shape The Future</h2>
            </div>
            <Link href="/page-service-details" className="btn-style-three"><img src="/assets/images/icons/arrow-icon2.png" alt=""/> View All Project</Link>
          </div>
          <div className="row">
            <div className="project-block col-lg-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <Link href="/page-project-details">
                      <img src="/assets/images/resource/project1-1.jpg" alt="Image" />
                      <img src="/assets/images/resource/project1-1.jpg" alt="Image" />
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="text">Marketing</div>
                  <h4 className="title"><Link href="/page-project-details">Busy-net Traffic Grow</Link></h4>
                </div>
              </div>
            </div>
            <div className="project-block col-xl-5 offset-xl-1 col-lg-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <Link href="/page-project-details">
                      <img src="/assets/images/resource/project1-2.jpg" alt="Image" />
                      <img src="/assets/images/resource/project1-2.jpg" alt="Image" />
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="text">branding</div>
                  <h4 className="title"><Link href="/page-project-details">Performance Builder</Link></h4>
                </div>
              </div>
            </div>
            <div className="project-block col-xl-5 col-lg-6">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <Link href="/page-project-details">
                      <img src="/assets/images/resource/project1-3.jpg" alt="Image" />
                      <img src="/assets/images/resource/project1-3.jpg" alt="Image" />
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="text">ui/ux design</div>
                  <h4 className="title"><Link href="/page-project-details">Organic Viewers Recorder</Link></h4>
                </div>
              </div>
            </div>
            <div className="project-block col-lg-6 offset-xl-1">
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <Link href="/page-project-details">
                      <img src="/assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="/assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="text">Marketing</div>
                  <h4 className="title"><Link href="/page-project-details">Marketing Asset Kakroll</Link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}