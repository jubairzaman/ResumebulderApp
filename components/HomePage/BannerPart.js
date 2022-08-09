
import Modal from '../modal'
import Link from "next/link";

import React, { useState } from "react";

const BannerPart = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClickAway = () => {

        setShowModal(false);
    };

    const show = () => {
        setShowModal(true);
    };
    return (
        <div className='bg-slate-50'>

            <div className='py-36'>
                <section className=" ">
                    <div className="p-5 text-center">
                        <h1 className="text-6xl font-semibold">Create Your Winning &nbsp;
                            <span className="underline-text-resume-home-page">
                                <span className="hero-title-gradiant"> Resume</span>
                            </span>
                            <br></br>
                            In Minutes Get Hired Fast!
                        </h1>
                        <p className="mt-6 font-2xl">Use our field-tested templates to create a resume and land your dream job.</p>
                    </div>
                </section>
                <div className='flex justify-center py-10 '>
                    <span className='rounded-lg bg-indigo-700 text-white px-10 py-5 '>
                        <Modal></Modal>
                    </span>
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