import React from 'react';
// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Carousel = (props) => {

    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={50}
                slidesPerView={props.slidesPerView ?? 1}
                loopedSlides={props.slidesPerView ?? 1}
            // onSlideChange={() =>  }
            // onSwiper={(swiper) => }
            >
                {props.childs.map((number, index) => <SwiperSlide key={index}>{number}</SwiperSlide>)}


            </Swiper>

        </>
    );
};

export default Carousel;