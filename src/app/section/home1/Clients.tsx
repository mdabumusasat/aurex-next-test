"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
  "/assets/images/resource/client1-1.png",
  "/assets/images/resource/client1-2.png",
  "/assets/images/resource/client1-3.png",
  "/assets/images/resource/client1-4.png",
  "/assets/images/resource/client1-1.png",
  "/assets/images/resource/client1-2.png",
  "/assets/images/resource/client1-3.png",
  "/assets/images/resource/client1-4.png",
];

export default function ClientSection() {
  return (
    <div className="clients-section pt-0">
      <div className="shape1 tm-gsap-img-parallax">
        <img
          src="/assets/images/icons/shape9.png"
          alt="shape"
        />
      </div>

      <div className="container">
        <div className="client-wrap">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            className="client-slider p-0">
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-img">
                  <img
                    src={client}
                    alt={`client-${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}