import React from 'react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import './ReviewsSwiper.scss';
import { reviewItems } from './reviewItems';


import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/free-mode.css'

export const ReviewsSwiper: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      grabCursor={true}
      spaceBetween="16"
      slidesPerView="auto"
      navigation={{
        nextEl: '.review-slider-next',
        prevEl: '.review-slider-prev',
      }}
      freeMode={true}
      breakpoints={{
        1300: {
          spaceBetween: 20
        },
      }}
    >

      {reviewItems.map((item, index) => (
        <SwiperSlide key={index}>
          <ReviewCard
            name={item.name}
            company={item.company}
            review={item.review}
            avatarUrl={item.avatarUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};