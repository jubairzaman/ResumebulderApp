import React from 'react';
import SlidingView from '../components/slidingView';
import HeroSection from '../components/heroSection';
import Modal from '../components/modal';
import Carousel from '../components/carousel';

const abcd = () => {
    return (
        <>
            <HeroSection/>
            <Modal/>
            <Carousel childs={
                [
                    <h1>Hello1</h1>,
                    <h1>Hello2</h1>,
                ]
            }/>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                    <div className='flex'>
                        <i className="w-auto lab la-accessible-icon"></i>
                        <div className='grow'>
                            <h1 className='mb-2'>Helll</h1>
                            <p>Lorem Ipsum Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <div><SlidingView /></div>
                <div>One of three columns</div>
            </div>

            
        </>
    );
};

export default abcd;