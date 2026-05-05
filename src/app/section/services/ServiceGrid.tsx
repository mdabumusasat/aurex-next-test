"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServiceSection() {
  const services = [
    {
      id: "01",
      title: "UI/UX Designer",
      image: "/assets/images/resource/service1-1.jpg",
      heading: "Crucial aspect of a digital services",
      text: "This includes writing HTML, CSS, and JavaScript code to create responsive layouts, navigation menus, forms, animations, and other user interface components.",
    },
    {
      id: "02",
      title: "Development",
      image: "/assets/images/resource/service1-1.jpg",
      heading: "Crucial aspect of a digital services",
      text: "This includes writing HTML, CSS, and JavaScript code to create responsive layouts, navigation menus, forms, animations, and other user interface components.",
    },
    {
      id: "03",
      title: "Marketing",
      image: "/assets/images/resource/service1-1.jpg",
      heading: "Crucial aspect of a digital services",
      text: "This includes writing HTML, CSS, and JavaScript code to create responsive layouts, navigation menus, forms, animations, and other user interface components.",
    },
    {
      id: "04",
      title: "SEO Services",
      image: "/assets/images/resource/service1-1.jpg",
      heading: "Crucial aspect of a digital services",
      text: "This includes writing HTML, CSS, and JavaScript code to create responsive layouts, navigation menus, forms, animations, and other user interface components.",
    },
    {
      id: "05",
      title: "Video Production",
      image: "/assets/images/resource/service1-1.jpg",
      heading: "Crucial aspect of a digital services",
      text: "This includes writing HTML, CSS, and JavaScript code to create responsive layouts, navigation menus, forms, animations, and other user interface components.",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="service-section">
      <div className="container">

        {services.map((item) => {
          const isActive = activeService.id === item.id;

          return (
            <div
              className={`service-block ${isActive ? "active" : ""}`}
              key={item.id}
            >
              {/* CLICK AREA */}
              <div
                className="inner-block"
                onClick={() => setActiveService(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="title-box">
                  <div className="left">
                    <div className="number">{item.id}</div>
                    <div className="title">{item.title}</div>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>

              {/* ACTIVE CONTENT */}
              {isActive && (
                <div className="content-box">
                  <div className="row align-items-center">
                    <div className="image-column col-xl-7 col-lg-6">
                      <div className="inner-column">
                        <figure className="image mb-0 overflow-hidden">
                          <Link href="/page-service-details">
                            <img
                              src={item.image}
                              alt={item.title}
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                    <div className="content-column col-lg-5">
                      <div className="inner-column">
                        <h2 className="title">{item.heading}</h2>
                        <div className="text">{item.text}</div>
                        <Link
                          href="/page-service-details"
                          className="theme-btn service-theme-btn"
                        >
                          <i className="fa-solid fa-arrow-right"></i> Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}