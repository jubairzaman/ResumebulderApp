
import React, { useEffect, useState, useCallback } from "react";

import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Templetesthathave = () => {

    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    useEffect(() => {
        let timeout;
        if (swiper !== null) {
            timeout = setTimeout(() => {
                swiper.update();
            }, 1000);
        }

        return function cleanup() {
            if (swiper !== null) {
                clearTimeout(timeout);
                swiper.destroy();
            }
        };
    }, [swiper]);


    const params = {
        centeredSlides: true,
        loop: true,
        onSwiper: setSwiper,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
        loopedSlides: 2,
        modules: [Navigation, Pagination, Scrollbar, A11y, Virtual],
        navigation: true,
        spaceBetween: 20,
        slidesPerView: 1,
    };

    return (
        <div>
            <div className='bg-indigo-900 py-20'>
                <h1 className='text-3xl text-white font-3xl font-semibold text-center'>Templates that have proven to work</h1>
                <p className='text-white text-center'>Use one of our field-tested resume templates, designed by a team of HR experts and typographers.</p>
            </div>


            <div className='bg-indigo-900 py-10 templete-slide'>

                <Swiper {...params}

                >
                    <SwiperSlide key={1 + 's'} > <div><img className='mx-2 w-full' src='img-1.jpg'></img></div>  </SwiperSlide>
                    <SwiperSlide key={2 + 's'}> <div><img className='mx-2 w-full' src='img-2.jpg'></img></div>  </SwiperSlide>
                    <SwiperSlide key={3 + 's'}> <div><img className='mx-2 w-full' src='mk1.png'></img> </div></SwiperSlide>
                    <SwiperSlide key={4 + 's'}> <div><img className='mx-2 w-full' src='mk2.png'></img></div>  </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Templetesthathave;