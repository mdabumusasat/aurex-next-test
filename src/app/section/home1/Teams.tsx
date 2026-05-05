import React from "react";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "James Carter",
    role: "Senior Cleaning",
    image: "/assets/images/resource/team1-1.jpg",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Senior Cleaning",
    image: "/assets/images/resource/team1-2.jpg",
  },
  {
    id: 3,
    name: "James Carter",
    role: "Senior Cleaning",
    image: "/assets/images/resource/team1-3.jpg",
  },
  {
    id: 4,
    name: "James Carter",
    role: "Senior Cleaning",
    image: "/assets/images/resource/team1-4.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="teams-section">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <div className="icon-img animation__rotateX">
              <img
                src="/assets/images/icons/sub-title1.png"
                alt="subtitle icon"
              />
            </div>
            our expert team
          </div>

          <h2 className="title">
            Our Team of Dedicated <br />
            digital professionals
          </h2>
        </div>

        <div className="row">
          {teamMembers.map((member) => (
            <div className="col-xl-3 col-md-6" key={member.id}>
              <div className="team-block-items2">
                <div className="thumb">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/page-team-details">{member.name}</Link>
                  </h4>
                  <div className="text">{member.role}</div>
                  <div className="social-links">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                  <span className="share-icon fa-solid fa-share"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}