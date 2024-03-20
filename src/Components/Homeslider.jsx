import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Homeslider() {
  return (
    <>
      <Swiper
      spaceBetween={30}
      slidesPerView={4}
      pagination={{ clickable: true }}
      breakpoints={{
        1200: {
            slidesPerView: 4,
            
        },
        880: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
      }}
    >
        <SwiperSlide>
            <div className="home-page-hero-blog-box" style={{backgroundColor: '#F5AB35'}}>

                <img src="./img/home-page/img01.jpg" alt="" />

                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>

                <p>2ND JANUARY, 2016</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-page-hero-blog-box">

                <img src="./img/home-page/img02.jpg" alt="" />

                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>

                <p>2ND JANUARY, 2016</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-page-hero-blog-box">

                <img src="./img/home-page/img04.jpg" alt="" />

                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>

                <p>2ND JANUARY, 2016</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-page-hero-blog-box">

                <img src="./img/home-page/img01.jpg" alt="" />

                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>

                <p>2ND JANUARY, 2016</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-page-hero-blog-box">

                <img src="./img/home-page/img02.jpg" alt="" />

                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>

                <p>2ND JANUARY, 2016</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-page-hero-blog-box">

                <img src="./img/home-page/img04.jpg" alt="" />

                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Link>

                <p>2ND JANUARY, 2016</p>

            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
