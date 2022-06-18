import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Whytakethelong from './Whytakethelong';

const Templetesthathave = () => {
    return (
        <div>
            <div className='bg-indigo-900 py-20'>
                <h1 className='text-3xl text-white font-3xl font-semibold text-center'>Templates that have proven to work</h1>
                <p className='text-white text-center'>Use one of our field-tested resume templates, designed by a team of HR experts and typographers.</p>

            </div>


            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log("on Swiper")}
                >
                    <SwiperSlide > <img className='mx-2' src='img-1.jpg'></img>  </SwiperSlide>
                    <SwiperSlide > <img className='mx-2' src='img-2.jpg'></img>  </SwiperSlide>
                    <SwiperSlide > <img className='mx-2' src='img-1.jpg'></img> </SwiperSlide>


                </Swiper>
            </div>

        </div>
    );
};

export default Templetesthathave;