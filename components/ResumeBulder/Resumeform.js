import React, { useState } from 'react';
import Personalinfo from './Personalinfo';
import ProfessonalSummary from './professonalSummary';
import Skils from './skils';
import SocialMedias from './socialMedias';


const Resumeform = ({ handelCvData }) => {




    return (
        <div className=' mx-auto '>
            {/* from part  */}
            <div className='bg-sky-50'>


                <h1 className=' pt-10 text-center text-xl font-semibold'>Add your personal details to your resume</h1>
                <p className='text-center '>It allows employers to see how they can contact you</p>

                <div className=' mt-10 mx-4 mx-auto bg-white rounded-lg py-10'>

                    <h1 className='font-semibold mx-5 my-5'> Personal Information</h1>

                    <Personalinfo></Personalinfo>
                    <ProfessonalSummary></ProfessonalSummary>
                    <Skils></Skils>
                    <SocialMedias></SocialMedias>











                </div>



            </div>
        </div>
    );
};

export default Resumeform;