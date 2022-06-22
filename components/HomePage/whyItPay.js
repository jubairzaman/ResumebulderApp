import React from 'react';

const WhyItPay = () => {
    return (
        <div className=''>
            <div className=' py-32'>
                <h1 className=' text-4xl font-semibold text-center'>Why it pays to join with us</h1>
                <div className='bg-white w-5/6 mx-auto my-20 rounded-lg drop-shadow-2xl'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                        <div className='m-10'>
                            <h1 className='text-center text-5xl font-semibold'> + 57%</h1>
                            <p className='text-center text-md my-2'>Better chance of getting an interview</p>
                            <p className='text-center text-blue-600'>Create my resume <i className="las la-arrow-right"></i> </p>

                        </div>
                        <div>

                            <div className='m-10'>
                                <h1 className='text-center text-5xl font-semibold'> 26 days</h1>
                                <p className='text-center text-md my-2'>Average time to get hired</p>
                                <p className='text-center text-blue-600'>Create my resume <i className="las la-arrow-right"></i> </p>

                            </div>
                        </div>
                        <div>

                            <div className='m-10'>
                                <h1 className='text-center text-5xl font-semibold'>12 mins</h1>
                                <p className='text-center text-md my-2'>Average time to create a resume</p>
                                <p className='text-center text-blue-600'>Create my resume <i className="las la-arrow-right"></i> </p>

                            </div>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    );
};

export default WhyItPay;