import React from 'react';
import Modal from '../modal';

const Ajobworthy = () => {
    return (
        <div>
            <div className='my-32'>
                <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">


                    <div >
                        <div className='mt-32'>
                            <h1 className='font-semibold text-5xl '>A job-worthy resume that gets you hired</h1>

                            <div className='flex mt-5 '>
                                <i className="las la-check my-5 mx-5"></i>
                                <p className='my-3'> Create a professional resume with our online builder without ever leaving your web browser.</p>
                            </div>
                            <div className='flex my-1 '>
                                <i className="las la-check my-5 mx-5"></i>
                                <p className='my-3'>Stop worrying about the formatting with field-tested templates, proven to work.</p>
                            </div>
                            <div className='flex my-1 '>
                                <i className="las la-check my-5 mx-5"></i>
                                <p className='my-3'>Get access to our powerful cover letters and match them with your new resume.</p>
                            </div>
                            <div className='flex my-1 '>
                                <i className="las la-check my-5 mx-5"></i>
                                <p className='my-3'>Access all functionalities for 7 days for $1.99, then increasing to only $29.95/mo.</p>
                            </div>



                            <div className='my-10 '><Modal></Modal></div>

                        </div>

                    </div>
                    <div>
                        <img className='' src='mk3.png'></img>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Ajobworthy;