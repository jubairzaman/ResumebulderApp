import React from 'react';
import SlidingView from '../components/slidingView';
import HeroSection from '../components/heroSection';
import Modal from '../components/modal';

const abcd = () => {
    return (
        <>
            <HeroSection/>
            <Modal/>
            
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