"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    category: "Marketing",
    title: "Busy-net Traffic Grow",
    image: "/assets/images/resource/project1-1.jpg",
    col: "col-lg-6",
    offset: "",
  },
  {
    category: "Branding",
    title: "Performance Builder",
    image: "/assets/images/resource/project1-2.jpg",
    col: "col-xl-5 col-lg-6",
    offset: "offset-xl-1",
  },
  {
    category: "UI/UX Design",
    title: "Organic Viewers Recorder",
    image: "/assets/images/resource/project1-3.jpg",
    col: "col-xl-5 col-lg-6",
    offset: "",
  },
  {
    category: "Marketing",
    title: "Marketing Asset Kakroll",
    image: "/assets/images/resource/project1-4.jpg",
    col: "col-lg-6",
    offset: "offset-xl-1",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section pb-60">
      <div className="bg-shape bg">
        <img src="/assets/images/icons/project1-bg1.png" alt="shape" />
      </div>
      <div className="shape1">
        <img src="/assets/images/icons/shape8.png" alt="shape" />
      </div>
      <div className="md-container">
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-block ${project.col} ${project.offset}`}>
              <div className="inner-box">
                <div className="image-box">
                  <div className="image">
                    <Link href="/page-project-details">
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="text">{project.category}</div>
                  <h4 className="title">
                    <Link href="/page-project-details">
                      {project.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}