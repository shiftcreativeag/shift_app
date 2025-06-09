import React from 'react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import './ReviewsSwiper.scss';


import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/free-mode.css'

export const ReviewsSwiper: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      grabCursor={true}
      slidesPerView="auto"
      navigation={{
        nextEl: '.review-slider-next',
        prevEl: '.review-slider-prev',
        enabled: false,
      }}
      freeMode={true}
      breakpoints={{
        0: {
          spaceBetween: 16,
        },
        1300: {
          spaceBetween: 20,
          navigation: {
            enabled: true,
          },
        },
      }}
    >
      <SwiperSlide>
        <ReviewCard
          name="Мария"
          company="Компания X"
          review="Ценим оперативность и отзывчивость. Не первый раз работаем. Создавали айдентику для нашей компании."
          avatarUrl="member"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          name="Мария"
          company="Компания X"
          review="Ценим оперативность и отзывчивость. Не первый раз работаем. Создавали айдентику для нашей компании."
          avatarUrl="member"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          name="Мария"
          company="Компания X"
          review="Ценим оперативность и отзывчивость. Не первый раз работаем. Создавали айдентику для нашей компании."
          avatarUrl="member"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          name="Мария"
          company="Компания X"
          review="Ценим оперативность и отзывчивость. Не первый раз работаем. Создавали айдентику для нашей компании."
          avatarUrl="member"
        />
      </SwiperSlide>
    </Swiper>
  );
};