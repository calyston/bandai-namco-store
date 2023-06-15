import '../sass/main.scss';
import React from "react";
import popularFranchisesSlides from './FranchisesSlides';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';

const popularFranchises = () => {
  return (
    <article className="popular-franchises">
      <Swiper modules={[Navigation, Autoplay]} navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} loop={true}>

        <SwiperSlide>
          <div className="franchise">
            <img src={popularFranchisesSlides[0].img} alt={popularFranchisesSlides[0].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="franchise">
            <img src={popularFranchisesSlides[1].img} alt={popularFranchisesSlides[1].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="franchise">
            <img src={popularFranchisesSlides[2].img} alt={popularFranchisesSlides[2].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="franchise">
            <img src={popularFranchisesSlides[0].img} alt={popularFranchisesSlides[0].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="franchise">
            <img src={popularFranchisesSlides[1].img} alt={popularFranchisesSlides[1].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="franchise">
            <img src={popularFranchisesSlides[2].img} alt={popularFranchisesSlides[2].alt} />
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  )
}

export default popularFranchises;