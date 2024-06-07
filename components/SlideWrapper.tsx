"use client";
import React from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
const SlideWrapper = ({
  children
} : {children : React.ReactNode}) => {
  const breakpoints = {

    320: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },

360 : {
      slidesPerView: 3.4,
  spaceBetween: 30
},
    480: {
      slidesPerView: 3.5,
      spaceBetween: 30
    },

    640: {
      slidesPerView: 3.6,
      spaceBetween: 40
    } ,
    800: {
      slidesPerView: 3.2,
      spaceBetween: 40
    } ,
    1000 : {
      slidesPerView: 5,
      spaceBetween: 40
    } ,
    1300 : {
      slidesPerView: 7.5,
      spaceBetween: 40
    }
      }
  return (
    <div className='w-full md:px-3 lg:px-10 h-full pb-6'>
      <Swiper breakpoints={breakpoints}>
        {children}
      </Swiper>
    </div>
  )
}

export default SlideWrapper