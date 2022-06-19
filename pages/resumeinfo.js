import React, { useState } from 'react';
import Cv1 from '../components/cvTemplets/Cv1';
import Resumeform from '../components/ResumeBulder/Resumeform';

const resumeinfo = () => {
    const [cv, setCvData] = useState({
        firstName: "",
        lastName: "",
    });


    const handelCvData = (value, name) => {
        setCvData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    return (
        <div>
            <pre>{JSON.stringify(cv, null, 2)}</pre>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  '>
            <Resumeform handelCvData={handelCvData}></Resumeform>
            <Cv1 cv={cv}/>
            </div>
        </div>
    );
};

export default resumeinfo;