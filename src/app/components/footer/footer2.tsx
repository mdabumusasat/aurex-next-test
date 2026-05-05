"use client";
import React from "react";
import Link from "next/link";

const Footer2: React.FC = () => {
  return (
      <footer className="main-footer footer-style-two pt-0">
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column widget-wrapper col-xl-5 col-md-7">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">We the ivy</h4>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">Home Page</Link></li>
                      <li><Link href="#">About Us</Link></li>
                      <li><Link href="#">Insights</Link></li>
                      <li><Link href="#">Case Study</Link></li>
                      <li><Link href="#">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Services</h4>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">UI UX Design</Link></li>
                      <li><Link href="#">Web Development</Link></li>
                      <li><Link href="#">Branding Design</Link></li>
                      <li><Link href="#">SEO & Marketing</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Social Media</h4>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="#">X (Twiter)</Link></li>
                      <li><Link href="#">Instagram</Link></li>
                      <li><Link href="#">LinkedIn</Link></li>
                      <li><Link href="#">YouTube</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-6 offset-xl-1 col-md-5">
                <div className="footer-widget">
                  <div className="subscribe-form">
                    <h4 className="widget-title">Subscribe</h4>
                    <div className="text">Join our newsletter to stay up to date on features and releases</div>
                    <form method="post" action="#">
                      <div className="form-group">
                        <input type="email" id="email" name="email" className="email" placeholder="Enter your email"/>
                        <button type="submit" className="btn-style2" aria-label="Submit email"><i className="fas fa-long-arrow-right"></i></button>
                      </div>
                    </form>
                    <div className="text2">by subscribing your agree to with out privacy policy and provide consent to reveive updates from our company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social-widget">
            <Link className="social-item" href="#"><span>aurex@gmail.com</span> <i className="icon fal fa-envelope"></i></Link>
            <Link className="social-item" href="#"><span>+ 017 500 500 88</span> <i className="icon fa-brands fa-instagram"></i></Link>
            <Link className="social-item" href="#"><span>LinkedIn</span> <i className="icon fab fa-linkedin-in"></i></Link>
            <Link className="social-item" href="#"><span>Facebook</span> <i className="icon fa-brands fa-facebook-f"></i></Link>
            <Link className="social-item" href="#"><span>X</span> <i className="icon fa-brands fa-x-twitter"></i></Link>
            <Link className="social-item" href="#"><span>Instagram</span> <i className="icon fa-brands fa-instagram"></i></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container d-md-flex align-items-center justify-content-center justify-content-sm-between">
              <p className="copyright-text mb-0">©Copyright @2026, Aurex All Rights Reserved</p>
              <div className="privacy-widget">
                <Link href="#">Copyright</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Sitemap, Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer2;
