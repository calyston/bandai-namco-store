import '../sass/main.scss';
import React from 'react';
import homeHeroSlides from '../components/HeroSlides';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';

const HomeHero = () => {

  return (
    <article className="home-hero">
      <Swiper modules={[Navigation, Pagination, Autoplay, EffectFade]} navigation={true}
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <div className="hero">
            <img src={homeHeroSlides[0].img} alt={homeHeroSlides[0].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero">
            <img src={homeHeroSlides[1].img} alt={homeHeroSlides[1].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero">
            <img src={homeHeroSlides[2].img} alt={homeHeroSlides[2].alt} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero">
            <img src={homeHeroSlides[3].img} alt={homeHeroSlides[3].alt} />
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  )
}

export default HomeHero;