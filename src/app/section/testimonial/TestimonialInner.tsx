"use client";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "David Brayan",
    designation: "CO Founder",
    image: "/assets/images/resource/testi1-1.jpg",
  },
  {
    id: 2,
    name: "Brenda Janet",
    designation: "Business Owner",
    image: "/assets/images/resource/testi1-2.jpg",
  },
  {
    id: 3,
    name: "Martin Carlos",
    designation: "Senior Manager",
    image: "/assets/images/resource/testi1-3.jpg",
  },
  {
    id: 4,
    name: "Garry Comburn",
    designation: "UI Designer",
    image: "/assets/images/resource/testi1-4.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section pt-120 pb-90">
      <div className="container">
        <div className="row">
          {testimonials.map((item) => (
            <div
              className="col-xxl-3 col-xl-4 col-lg-6"
              key={item.id}>
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="content-box">
                    <div className="review">
                      {[...Array(5)].map((_, index) => (
                        <i className="fas fa-star" key={index}></i>
                      ))}
                    </div>
                    <div className="text">
                      They aren’t created by chance, nor are the fruit of
                      inspiration. Products that matter are the end result of a
                      hide processor ideation, and the implementation
                    </div>
                  </div>
                  <div className="author-info">
                    <div className="info-box">
                      <figure className="thumb">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                      </figure>
                      <div className="info">
                        <h5 className="name">{item.name}</h5>
                        <span className="designation">
                          {item.designation}
                        </span>
                      </div>
                    </div>
                    <span className="quote-icon">
                      <img
                        src="/assets/images/icons/quote-icon.png"
                        alt="quote"
                      />
                    </span>
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