import React, { useState } from 'react';
import Resumeform from '../components/ResumeBulder/Resumeform';

const resumeinfo = () => {
    const [firstname, setfirstname] = useState();
    const [lastName, setlastName] = useState();
    const [profession, setProfession] = useState();


    const handlefirstname = (value) => {
        const inputvalue = value;
        setfirstname(inputvalue);

    }
    const handlelastName = (value) => {
        const inputvalue = value;
        setlastName(inputvalue);

    }
    const handleProfession = (value) => {
        const inputvalue = value;
        setProfession(inputvalue);

    }


    return (
        <div>
            <Resumeform></Resumeform>





            <div class="grid grid-cols-2">
                <div className='bg-white'>
                    <label>
                        First Name :
                    </label>
                    <input className='border-solid border-2 border-indigo-600 ' type='text' onChange={(e) => handlefirstname(e.target['value'])} ></input>
                    <br></br>
                    <label>
                        Last Name :
                    </label>

                    <input className='border-solid border-2 border-indigo-600 ' type='text' onChange={(e) => handlelastName(e.target['value'])} ></input>
                    <br></br>
                    <label>
                        profession :
                    </label>

                    <input className='border-solid border-2 border-indigo-600 ' type='text' onChange={(e) => handleProfession(e.target['value'])} ></input>
                </div>

                <div className='bg-slate-200'>
                    <h1> Name :{firstname}{" "}{lastName}</h1>
                    <br></br>
                    <h1>Profession : {profession}</h1>
                </div>
            </div>



        </div>
    );
};

export default resumeinfo;