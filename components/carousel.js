import React from 'react';
// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Carousel = (props) => {

    return (
        <>

        

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log("on Swiper")}
            >
                {props.childs.map((number, index) => <SwiperSlide key={index}>{number}</SwiperSlide>)}
               

            </Swiper>

        </>
    );
};

export default Carousel;