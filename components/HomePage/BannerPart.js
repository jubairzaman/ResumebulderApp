import React from 'react';

const BannerPart = () => {
    return (
        <div className='bg-slate-50'>

            <div className='py-52'>
                <h1 className='text-6xl text-center font-semibold'>Create your winning resume </h1>
                <h1 className='text-6xl text-center font-semibold mt-5'>in minutes Get hired fast!</h1>
                <p className='text-center font-semibold mt-5 '>Use our field-tested templates to create a resume and land your dream job.</p>

                <div className='flex justify-center py-10 '><button className='rounded-lg bg-indigo-700 text-white px-10 py-6 m-5'> Create Resume</button></div>
                <div className='flex justify-center  '> <div class="w-3 h-3 mr-2 bg-green-500 rounded-full flex my-auto  "></div>

                    <p>Join over 12,423 <span className='text-blue-700 underline'>
                        successful jobseekers</span></p>



                </div>


            </div>




        </div>
    );
};

export default BannerPart;