import React, { useState } from 'react';
import Education from './Education';
import Experiance from './experiance';
import Personalinfo from './Personalinfo';
import ProfessonalSummary from './professonalSummary';
import Reference from './Refarencs';
import Skillrepeater from './Skills/skillRepeater';
import SocialMedia from './SocialMedia';



const Resumeform = ({ handelCvData, updateSkillData, }) => {




    return (
        <div className=' mx-auto '>
            {/* from part  */}
            <div className='bg-sky-50'>


                <h1 className=' pt-10 text-center text-xl font-semibold'>Add your personal details to your resume</h1>
                <p className='text-center '>It allows employers to see how they can contact you</p>

                <div className=' mt-10 mx-4 mx-auto bg-white rounded-lg py-5'>

                    <Personalinfo handelCvData={handelCvData}></Personalinfo>
                    <ProfessonalSummary handelCvData={handelCvData}></ProfessonalSummary>
                    <Education></Education>
                    <Experiance></Experiance>
                    <Skillrepeater updateSkillData={updateSkillData} />
                    <SocialMedia></SocialMedia>
                    <Reference></Reference>

                </div>



            </div>
        </div>
    );
};

export default Resumeform;