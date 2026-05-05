"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
      <footer className="main-footer footer-style-one">
        <div className="shape1 tm-gsap-img-parallax"><img src="/assets/images/icons/shape14.png" alt=""/></div>
        <div className="widgets-section">
          <div className="container">
            <div className="footer-widget widget-logo">
              <div className="logo"><Link href="#"> <img src="/assets/images/logo.png" alt="logo"/></Link></div>
              <div className="text">We craft digital presence that last</div>
            </div>
            <div className="row">
              <div className="footer-column col-xl-4 col-lg-6">
                <div className="subscribe-widget">
                  <div className="subscribe-form">
                    <h4 className="title">Our NewsLetter</h4>
                    <div className="text">We’ll send you out latest thinking, only when it’s worth your time</div>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input type="email" id="email" name="email" className="email" placeholder="aurex@gmail.com" />
                        <button type="submit" className="btn-style-two" aria-label="Submit email">Submitted</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- Footer Column --> */}
              <div className="footer-column col-xxl-3 col-xl-4">
                <div className="links-column">
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Navigation</h4>
                    <div className="widget-content">
                      <ul className="widget-links">
                        <li><Link href="#">Projects</Link></li>
                        <li><Link href="#">Articles</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-widget links-widget">
                    <h4 className="widget-title">Social Media</h4>
                    <div className="widget-content">
                      <ul className="widget-links">
                        <li><Link href="#">X (Twiter)</Link></li>
                        <li><Link href="#">Instagram</Link></li>
                        <li><Link href="#">LinkedIn</Link></li>
                        <li><Link href="#">Youtube</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xxl-5 col-xl-4">
                <div className="widget-text">
                  <div className="text-box">Give us <Link href="">Call: 1-88-2222</Link> and Call we can Set you up or check out Contact Us</div>
                  <div className="style-text"><img src="/assets/images/icons/style-text2.png" alt=""/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-4">
                <div className="inner-container">
                  <p className="copyright-text">Copyright @2026, Aurex All Rights Reserved</p>
                  <ul className="">
                    <li><Link href="#">Linkedln</Link></li>
                    <li><Link href="#">Instagram</Link></li>
                    <li><Link href="#">Facebook</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}