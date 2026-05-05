"use client";
import React from "react";
import Link from "next/link";

export default function TeamSection() {
  return (
      <section className="team-wrapper pt-120 pb-90">
        <div className="md-container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="team-block-layout2">
                <div className="inner-block">
                  <div className="image-box">
                    <Link href="/page-team-details"><img src="/assets/images/resource/team2-4.jpg" alt="Image"/></Link>
                  </div>
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="info-box">
                        <h4 className="title"><Link href="/page-team-details">James David</Link></h4>
                        <div className="designation">CEO & Founder</div>
                      </div>
                      <ul className="social-icon">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="team-block-layout2">
                <div className="inner-block">
                  <div className="image-box">
                    <Link href="/page-team-details"><img src="/assets/images/resource/team2-1.jpg" alt="Image"/></Link>
                  </div>
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="info-box">
                        <h4 className="title"><Link href="/page-team-details">Brenda C. Janet</Link></h4>
                        <div className="designation">CEO & Founder</div>
                      </div>
                      <ul className="social-icon">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="team-block-layout2">
                <div className="inner-block">
                  <div className="image-box">
                    <Link href="/page-team-details"><img src="/assets/images/resource/team2-3.jpg" alt="Image"/></Link>
                  </div>
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="info-box">
                        <h4 className="title"><Link href="/page-team-details">Martin Carlos</Link></h4>
                        <div className="designation">Lead Designer</div>
                      </div>
                      <ul className="social-icon">
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}