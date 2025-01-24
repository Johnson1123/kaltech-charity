import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { DummyImage } from "../../assets/images";
import { FaQuoteLeft } from "react-icons/fa";
import TitleText from "../small/TitleText";
import ParaText from "../small/ParaText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function BannerBottom() {
  const testimonials = [
    {
      text: "The support and dedication shown by this organization has truly transformed lives in our community.",
      author: "Sarah Johnson",
      role: "Community Leader",
    },
    {
      text: "Their commitment to making a difference is inspiring. I've witnessed firsthand the impact of their programs.",
      author: "Michael Chen",
      role: "Volunteer",
    },
    {
      text: "An incredible organization that puts people first. Their work has created lasting positive change.",
      author: "Emma Thompson",
      role: "Beneficiary",
    },
  ];

  return (
    <div className="bannerBottom__conatiner">
      <div className="content__wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial__content">
                <p className="testimonial__text">{testimonial.text}</p>
                <div className="testimonial__author">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}

export default BannerBottom;
