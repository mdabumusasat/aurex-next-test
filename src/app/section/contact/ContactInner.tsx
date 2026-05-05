"use client";
import React from 'react';
import Link from 'next/link';

const ContactInner: React.FC = (): JSX.Element => {
    return (
        <>
      <section className="contact-details pt-120 pb-80">
        <div className="md-container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="section-title mb-30">
                <div className="sub-title">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81319 14.6759C6.83947 14.8971 7.16053 14.8971 7.18681 14.6759L7.40705 12.8197C7.69143 10.4229 9.58112 8.53323 11.9779 8.24884L13.834 8.0286C14.0553 8.00233 14.0553 7.68127 13.834 7.65499L11.9779 7.43475C9.58112 7.15036 7.69143 5.26068 7.40705 2.86391L7.18681 1.00776C7.16053 0.786476 6.83947 0.786476 6.81319 1.00776L6.59296 2.86391C6.30857 5.26068 4.41888 7.15036 2.02209 7.43475L0.165943 7.65499C-0.0553144 7.68127 -0.0553144 8.00233 0.165943 8.0286L2.02209 8.24884C4.41888 8.53323 6.30857 10.4229 6.59296 12.8197L6.81319 14.6759Z" fill="currentColor" />
                  </svg>
                  <span>Send us email</span>
                </div>
                <h2 className="title split-text split-in-right">Feel free to write</h2>
              </div>
              <form id="contact_form" name="contact_form" action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
                </div>
                <div className="mb-5 theme-btn-main">
                  <input name="form_botcheck" className="form-control" type="hidden" />
                  <button type="submit" className="btn-style-one mb-2 mb-sm-0" data-loading-text="Please wait...">
                    <span className="btn-title">Send message</span>
                    <span className="dot-box"><span className="dot-item"></span></span>
                  </button>
                  <button type="reset" className="btn-style-one ml-10" data-loading-text="Please wait...">
                    <span className="btn-title">Reset</span>
                    <span className="dot-box"><span className="dot-item"></span></span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="section-title mb-30">
                  <div className="sub-title">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.81319 14.6759C6.83947 14.8971 7.16053 14.8971 7.18681 14.6759L7.40705 12.8197C7.69143 10.4229 9.58112 8.53323 11.9779 8.24884L13.834 8.0286C14.0553 8.00233 14.0553 7.68127 13.834 7.65499L11.9779 7.43475C9.58112 7.15036 7.69143 5.26068 7.40705 2.86391L7.18681 1.00776C7.16053 0.786476 6.83947 0.786476 6.81319 1.00776L6.59296 2.86391C6.30857 5.26068 4.41888 7.15036 2.02209 7.43475L0.165943 7.65499C-0.0553144 7.68127 -0.0553144 8.00233 0.165943 8.0286L2.02209 8.24884C4.41888 8.53323 6.30857 10.4229 6.59296 12.8197L6.81319 14.6759Z" fill="currentColor" />
                    </svg>
                    <span>Need any help?</span>
                  </div>
                  <h2 className="title split-text split-in-right">Get in touch with us</h2>
                  <div className="text mt-3">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-block d-sm-flex align-items-sm-center ">
    								<div className="icon"><span className="lnr-icon-phone-plus"></span></div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h5 className="mb-1">Have any question?</h5>
                      <Link href="#"><span>Free</span> +92 (020)-9850</Link>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center ">
                    <div className="icon"><span className="lnr-icon-envelope1"></span></div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h5 className="mb-1">Write email</h5>
                      <Link href="#">needhelp@company.com</Link>
                    </div>
                  </li>
                  <li className="d-block d-sm-flex align-items-sm-center ">
                    <div className="icon"><span className="lnr-icon-location"></span></div>
                    <div className="text ml-xs--0 mt-xs-10">
                      <h5 className="mb-1">Visit anytime</h5>
                      <span>66 broklyn golden street. New York</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* <!--Contact Details End--> */}

        {/* <!-- Map Section--> */}
        <section className="map-section">
          <iframe  className="map w-100"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>
        {/* <!--End Map Section--> */}
        </>
    )
}
export default ContactInner
