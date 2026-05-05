"use client";

import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "James David",
    role: "CEO & Founder",
    image: "/assets/images/resource/team2-4.jpg",
  },
  {
    id: 2,
    name: "Brenda C. Janet",
    role: "CEO & Founder",
    image: "/assets/images/resource/team2-1.jpg",
  },
  {
    id: 3,
    name: "Martin Carlos",
    role: "Lead Designer",
    image: "/assets/images/resource/team2-3.jpg",
  },
  {
    id: 4,
    name: "Garry J. Coburn",
    role: "Project Manager",
    image: "/assets/images/resource/team2-2.jpg",
  },
];

export default function TeamSectionLayout2() {
  return (
    <section className="teams-section-layout2">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <div className="icon-img">
              <img
                src="/assets/images/icons/sub-title1.png"
                alt="icon"
              />
            </div>
            our expert team
          </div>
          <h2 className="title">
            Meet the talented squad <br /> behind the creativity
          </h2>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-xxl-3 col-lg-6">
              <div className="team-block-layout2">
                <div className="inner-block">
                  <div className="image-box">
                    <Link href="/page-team-details">
                      <img
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>
                  </div>
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="info-box">
                        <h4 className="title">
                          <Link href="/page-team-details">
                            {member.name}
                          </Link>
                        </h4>
                        <div className="designation">
                          {member.role}
                        </div>
                      </div>
                      <ul className="social-icon">
                        <li>
                          <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                        </li>
                      </ul>
                    </div>
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