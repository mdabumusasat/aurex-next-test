"use client";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "01 . What services do you provide?",
    answer:
      "You can search for friends by their name, username, or email within the app. Additionally, you can import contacts from your phone or other social platforms to find and connect with people you know.",
  },
  {
    id: 2,
    question: "02 . Why should I hire a creative agency?",
    answer:
      "You can search for friends by their name, username, or email within the app. Additionally, you can import contacts from your phone or other social platforms to find and connect with people you know.",
  },
  {
    id: 3,
    question: "03 . How long does a project take?",
    answer:
      "You can search for friends by their name, username, or email within the app. Additionally, you can import contacts from your phone or other social platforms to find and connect with people you know.",
  },
  {
    id: 4,
    question: "04 . Do you provide support after launch?",
    answer:
      "You can search for friends by their name, username, or email within the app. Additionally, you can import contacts from your phone or other social platforms to find and connect with people you know.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="shape1 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape10.png"
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="sec-title">
              <div className="sub-title">
                <div className="icon-img animation__rotateX">
                  <img
                    src="/assets/images/icons/sub-title1.png"
                    alt="icon"
                  />
                </div>
                Asked any questions
              </div>
              <h2 className="title">
                Top Client Questions & Our <br />
                Straightforward Answers
              </h2>
            </div>
            <div className="faq-box-style-1">
              <ul className="accordion-box">
                {faqs.map((faq, index) => (
                  <li
                    key={faq.id}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}>
                    <h5
                      className={`acc-btn ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}>
                      {faq.question}
                      <span className="icon fa fa-plus"></span>
                    </h5>
                    <div
                      className={`acc-content ${
                        activeIndex === index ? "current" : ""
                      }`}>
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="counter-info-box">
              <div className="inner-box">
                <div className="shape2 bounce-y">
                  <img
                    src="/assets/images/icons/shape11.png"
                    alt="shape"
                  />
                </div>
                <div className="author-img1 bounce-y">
                  <img
                    src="/assets/images/resource/author1.jpg"
                    alt="author"
                  />
                </div>
                <div className="author-img2 bounce-x">
                  <img
                    src="/assets/images/resource/author2.jpg"
                    alt="author"
                  />
                </div>
                <div className="author-img3 bounce-x">
                  <img
                    src="/assets/images/resource/author3.jpg"
                    alt="author"
                  />
                </div>
                <div className="count-box">
                  <span className="count-text">345</span>
                </div>
                <h2 className="title">Digital Project</h2>
                <div className="text">
                  Explore how we transform <br />
                  ideas into extraordinary <br />
                  digital experiences
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}