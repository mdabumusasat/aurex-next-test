"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "SEO in Eye Candy",
    image: "/assets/images/resource/testi2-1.jpg",
    logo: "/assets/images/icons/testi-logo1.png",
    text: "We hired aurex for a complete digital, it was the best decision we've made. They rebuilt our website from the decision ground and it was the best busines sground complete up launched a targeted",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "SEO in Eye Candy",
    image: "/assets/images/resource/testi2-2.jpg",
    logo: "/assets/images/icons/testi-logo1.png",
    text: "We hired aurex for a complete digital, it was the best decision we've made. They rebuilt our website from the decision ground and it was the best busines sground complete up launched a targeted",
  },
  {
    id: 3,
    name: "Ashely Cherry",
    role: "SEO in Eye Candy",
    image: "/assets/images/resource/testi2-3.jpg",
    logo: "/assets/images/icons/testi-logo1.png",
    text: "We hired aurex for a complete digital, it was the best decision we've made. They rebuilt our website from the decision ground and it was the best busines sground complete up launched a targeted",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "SEO in Eye Candy",
    image: "/assets/images/resource/testi2-1.jpg",
    logo: "/assets/images/icons/testi-logo1.png",
    text: "We hired aurex for a complete digital, it was the best decision we've made. They rebuilt our website from the decision ground and it was the best busines sground complete up launched a targeted",
  },
];

export default function TestimonialSectionLayout2() {

  return (
    <section className="testimonial-section-layout2 pt-0">
      <div className="container">
        <div className="row">
          <div className="content-column col-xxl-4">
            <div className="inner-column">
              <div className="sec-title">
                <h2 className="title">Our Honourable Clients</h2>
                <div className="text">
                  We’re more than just executor - we’re your creative partners.
                  Don’t just take our word for it, see what clients say.
                </div>
              </div>
              <div className="experience">
                <div className="icon">
                  <img
                    src="/assets/images/icons/quote-icon2.png"
                    alt="quote"
                  />
                </div>
                <div className="review">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <div className="review-text">4.9</div>
                </div>
                <div className="text">(32 Reviews)</div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="testimonial-column">
              <div className="inner-column">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    navigation={{
                        nextEl: ".array-next",
                        prevEl: ".array-prev",
                    }}
                  >
                  {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="testimonial-block-layout2">
                        <div className="inner-block">
                          <div className="author-thumb">
                            <div className="image">
                              <img
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className="testi-logo">
                              <img
                                src={item.logo}
                                alt="logo"
                              />
                            </div>
                          </div>
                          <div className="text">{item.text}</div>
                          <div className="author-info">
                            <h4 className="name">{item.name}</h4>
                            <span className="designation">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="array-button">
                    <button className="array-prev">
                      <i className="fas fa-long-arrow-left"></i>
                    </button>
                    <button className="array-next">
                      <i className="fas fa-long-arrow-right"></i>
                    </button>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}