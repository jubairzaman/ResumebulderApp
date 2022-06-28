import React, { useState } from 'react';
import Education from './Education';
import Experiance from './experiance';
import Personalinfo from './Personalinfo';
import ProfessonalSummary from './professonalSummary';
import Language from './Skills/Language';
import Skillrepeater from './Skills/skillRepeater';


const Resumeform = ({ handelCvData, cvData }) => {
    return (
        <div className=' mx-auto '>
            {/* from part  */}
            <div className='bg-sky-50'>


                <h1 className=' pt-10 text-center text-xl font-semibold'>Add your personal details to your resume</h1>
                <p className='text-center '>It allows employers to see how they can contact you</p>

                <div className=' mt-10 mx-auto bg-white rounded-lg py-10'>
                    <Personalinfo handelCvData={handelCvData} cvData={cvData}></Personalinfo>
                    <ProfessonalSummary handelCvData={handelCvData} cvData={cvData}></ProfessonalSummary>
                    <Education></Education>
                    <Experiance handelCvData={handelCvData} cvData={cvData}></Experiance>
                    <Skillrepeater handelCvData={handelCvData} cvData={cvData} />
                    <Language handelCvData={handelCvData} cvData={cvData} ></Language>
                </div>



            </div>
        </div>
    );
};

export default Resumeform;