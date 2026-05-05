"use client";

import React, { useEffect, useState } from "react";

const skills = [
  { title: "Sketch", icon: "wa-sketch.png", percent: "90%" },
  { title: "Photoshop", icon: "wa-photoshop.png", percent: "80%" },
  { title: "Figma", icon: "wa-figma.png", percent: "90%" },
  { title: "Invision", icon: "wa-invision.png", percent: "90%" },
  { title: "XD", icon: "wa-xd.png", percent: "85%" },
  { title: "Illustration", icon: "wa-Illustration.png", percent: "75%" },
];

export default function WorkSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState("Figma");

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        once: true,
        duration: 1000,
      });
    });
  }, []);

  return (
    <section className="work-section pt-0 pb-80">
      <div className="outer-box">
        <div className="row gx-50">
          {skills.map((skill, index) => {
            const isHovered = hoveredSkill === skill.title;
            const isActive = activeSkill === skill.title && !hoveredSkill;

            return (
              <div
                key={skill.title}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
              >
                <div
                  className="work-block"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                  onMouseEnter={() => setHoveredSkill(skill.title)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setActiveSkill(skill.title)}
                >
                  <div className="inner-block">
                    <div
                      className={`inner-box ${
                        isHovered || isActive ? "active" : ""
                      }`}
                    >
                      <span className="icon">
                        {/* ✅ FIXED (skill instead of item) */}
                        <img
                          src={`/assets/images/resource/${skill.icon}`}
                          alt={skill.title}
                        />
                      </span>

                      <span className="count">{skill.percent}</span>
                      <div className="text">{skill.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}