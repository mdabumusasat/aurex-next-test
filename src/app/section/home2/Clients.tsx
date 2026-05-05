"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientsSectionTwo() {
  return (
    <section className="clients-section-two">
      <div className="container">
        <div className="outer-box">
          <div className="title-box">
            <h3 className="title">Awards</h3>
          </div>
          <div className="right-side">
              <div className="swiper clients-swiper p-0">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                  }} className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-1.png" alt="Image"/></Link></div>
                        <div className="text">X <span>05</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-2.png" alt="Image"/></Link></div>
                        <div className="text">X <span>03</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-3.png" alt="Image"/></Link></div>
                        <div className="text">X <span>02</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-4.png" alt="Image"/></Link></div>
                        <div className="text">X <span>03</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-5.png" alt="Image"/></Link></div>
                        <div className="text">X <span>04</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-1.png" alt="Image"/></Link></div>
                        <div className="text">X <span>05</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-2.png" alt="Image"/></Link></div>
                        <div className="text">X <span>03</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-3.png" alt="Image"/></Link></div>
                        <div className="text">X <span>02</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-4.png" alt="Image"/></Link></div>
                        <div className="text">X <span>03</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="client-block-two">
                      <div className="inner-block">
                        <div className="image"><Link href="#"><img src="/assets/images/resource/client2-5.png" alt="Image"/></Link></div>
                        <div className="text">X <span>04</span></div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}