import React, { useRef } from "react";
import TitleText from "../small/TitleText";
import data from "../../data/data.json";
import ProgramBox from "../medium/ProgramBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useIsMobile } from "../../utils/isMobile";

function Program() {
  const swiperRef = useRef(null);
  const title = "Programs and Initiatives";
  const preview = useIsMobile() ? 1 : 3;

  return (
    <section className="program__container" aria-label="Our Programs">
      <div className="program__top-container">
        <div className="title__wrapper">
          <TitleText text={title} name="title__text-primary" tag="h2" />
        </div>
        <div className="program__control-wrapper">
          <button
            className="program__control-icon"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            className="program__control-icon"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={preview}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
      >
        {data.programs.map((item, index) => (
          <SwiperSlide key={index}>
            <ProgramBox {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </section>
  );
}

export default Program;
