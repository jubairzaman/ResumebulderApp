import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
const Skillrepeater = ({ handelCvData,cvData }) => {

    const valuetext = (value) => {
        if (value == 25) {
            return "Biginner"
        } else if (value == 50) {
            return "Skillful"
        } else if (value == 75) {
            return "Experienced"
        } else if (value == 100) {
            return "Expert"
        } else {
            return "Novice"
        }
    }
    const [skillValues, setskillValues] = useState([{ skillName: "", expartise: "0" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["skillName"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues,'skills');

    }

    let handleExpartiseChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["expartise"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues,'skills');
    }
    let addFormFields = () => {
        let newFormValues = [...skillValues, { skillName: "", expartise: "0" }];
        setskillValues(newFormValues)
        handelCvData(newFormValues,'skills');
    }

    let removeFormFields = (i) => {
        let newFormValues = [...skillValues];
        newFormValues.splice(i, 1);
        setskillValues(newFormValues)
        handelCvData(newFormValues,'skills');
    }

    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i className="las la-lightbulb la-2x"></i>  Your Skills</h1>
            {skillValues.map((element, index) => (
                <div className='p-5' key={index}>

                    <div className='border p-5 rounded-lg'>

                        {/* upper Part  */}

                        <div className='flex justify-between'>

                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.skillName === "" ? "Not Specified" : element.skillName}
                                </span>
                                <span className=" block text-sm font-medium text-slate-700">
                                    {valuetext(element.expartise)}
                                </span>
                            </div>
                            <div>
                                <button onClick={
                                    () => {
                                        removeFormFields(index)
                                    }
                                }><i className="las la-trash la-2x"></i></button>
                            </div>
                        </div>

                        {/* secound Part */}

                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Skill</span>
                                    <input onChange={
                                        (e) => {
                                            handleNameChange(index, e.target.value);
                                            //setSkillName(e.target['value']);
                                        }
                                    } value={element.skillName} type="text" name="website" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>

                            <div className='flex justify-center align-items-center'>
                                <div className='flex mt-5 w-full items-center px-4'>
                                    <Slider
                                        aria-label="Level"
                                        value={ typeof element.expartise === "number"?element.expartise:0 }
                                        valueLabelFormat={valuetext}
                                        valueLabelDisplay="on"
                                        step={25}
                                        marks
                                        min={0}
                                        max={100}
                                        onChange={
                                            (event, value, thumb) => {
                                                //setexpartise(value);
                                                //console.log(value,thumb);
                                                handleExpartiseChange(index, value);
                                            }
                                        }
                                    />
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {skillValues.length ? <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add Your Skills</h1>}
                </div>
            </button>

        </div>
    )
}
export default Skillrepeater;