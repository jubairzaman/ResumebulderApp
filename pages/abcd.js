import React from 'react';
import SlidingView from '../components/slidingView';
import HeroSection from '../components/heroSection';
import Modal from '../components/modal';
import Carousel from '../components/carousel';

const abcd = () => {
    return (
        <>
            <HeroSection />
            <Modal />
            <Carousel childs={
                [
                    <h1>Hello1</h1>,
                    <h1>Hello2</h1>,
                ]
            } />




        </>
    );
};

export default abcd;