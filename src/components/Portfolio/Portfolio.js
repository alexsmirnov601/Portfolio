import React, { useState } from 'react'
import Title from '../Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.scss'
import Arrow from '@iconscout/react-unicons/icons/uil-arrow-circle-right'
import 'swiper/css'

const Portfolio = () => {
  const width = window.screen.availWidth < 1000 ? true : false

  return (
    <div className="portfolio" id="Portfolio">
      <Title text={'Мои работы'} />
      <Swiper
        spaceBetween={20}
        slidesPerView={width ? 1 : 2}
        grabCursor={true}
        className="portfolio__slider"
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="portfolio__arrow">
        <p>Листай</p>
        <Arrow />
      </div>
    </div>
  )
}

export default Portfolio
