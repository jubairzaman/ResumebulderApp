import React from 'react';
import Modal from '../modal'

const BannerPart = () => {
    return (
        <div className='bg-slate-50'>

            <div className='py-36'>
                <section className=" ">
                    <div className="p-5 text-center">
                        <h1 className="text-6xl font-semibold">Create your winning&nbsp;
                            <span className="underline-text-resume-home-page">
                                <span className="hero-title-gradiant">resume</span>
                            </span>
                            <br></br>
                            in minutes Get hired fast!
                        </h1>
                        <p className="mt-6 font-2xl">Use our field-tested templates to create a resume and land your dream job.</p>
                    </div>
                </section>
                <div className='flex justify-center py-10 '>
                    <Modal />
                </div>
                <div className='flex justify-center  '> <div className="w-3 h-3 mr-2 bg-green-500 rounded-full flex my-auto  "></div>

                    <p>Join over 12,423<span className='text-blue-700 underline'>
                        successful jobseekers</span></p>



                </div>


            </div>







        </div>
    );
};

export default BannerPart;