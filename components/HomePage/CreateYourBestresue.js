import React from 'react';
import SlidingView from '../slidingView';

const CreateYourBestresue = () => {
    return (
        <div className='py-10'>
            <h1 className='font-semibold text-3xl text-center py-20 '>Create your best resume yet and <br></br> download in minutes </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                <div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4 mt-20">
                        <div>
                            <div className="flex px-2">
                                <i className=" mx-5 las la-file-alt la-3x"></i>
                                <div>
                                    <p className=' text-2xl font-semibold'>Easily created online</p>
                                    <p className=' mt-3'>Designing a professional resume cannot get easier, with ready made, field-tested templates</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex px-2">
                                <i className=" mx-5 las la-pencil-ruler la-3x"></i>
                                <div>
                                    <p className=' text-2xl font-semibold'>Pre-written phrases</p>
                                    <p className=' mt-3'>With our pre-written, tested phrases you can easily impress your future employer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-last lg:order-none'>
                    <SlidingView></SlidingView>
                </div>
                <div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4 mt-20">
                        <div>
                            <div className="flex px-2">
                                <i className=" mx-5 lab la-autoprefixer la-3x"></i>
                                <div>
                                    <p className=' text-2xl font-semibold'>Automatic spell-checker</p>
                                    <p className=' mt-3'>Never worry about spelling mistakes again. We protect you from mistakes and typos.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex px-2">
                                <i className=" mx-5 las la-file-upload la-3x"></i>
                                <div>
                                    <p className=' text-2xl font-semibold'>Templates that stand out</p>
                                    <p className=' mt-3'>With our field-tested templates you boost your chances of getting interviews by 58%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateYourBestresue;