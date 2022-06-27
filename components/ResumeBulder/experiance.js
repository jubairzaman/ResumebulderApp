import React, { useState } from 'react'

const Experiance = () => {
    const [skillValues, setskillValues] = useState([{ skillName: "", expartise: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["skillName"] = value;
        setskillValues(newFormValues);


    }
    let handleEmployerChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["employer"] = value;
        setskillValues(newFormValues);


    }
    let handleStartDateChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["startdate"] = value;
        setskillValues(newFormValues);


    }
    let handleEndDateChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["enddate"] = value;
        setskillValues(newFormValues);


    }
    let handleAddressChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["address"] = value;
        setskillValues(newFormValues);


    }

    let addFormFields = () => {
        let newFormValues = [...skillValues, { skillName: "", expartise: "0" }];
        setskillValues(newFormValues)

    }

    let removeFormFields = (i) => {
        let newFormValues = [...skillValues];
        newFormValues.splice(i, 1);
        setskillValues(newFormValues)

    }
    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i class="las la-briefcase la-2x"></i>  Your Experiance </h1>
            {skillValues.map((element, index) => (
                <div className='p-5'>

                    <div className='border p-5 rounded-lg'>

                        {/* upper Part  */}

                        <div className='flex justify-between'>

                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.skillName === "" ? "Not Specified" : element.skillName},
                                    {element.employer === "" ? "Not Specified" : element.employer}
                                </span>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start From
                                    {element.startdate === "" ? "Not Selected" : element.startdate} And Ended in
                                    {element.enddate === "" ? "Not Specified" : element.enddate}
                                </span>

                            </div>
                            <div>
                                <button onClick={
                                    () => {
                                        removeFormFields(index)
                                    }
                                }><i class="las la-trash la-2x"></i></button>
                            </div>
                        </div>

                        {/* secound Part */}

                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Job Title</span>
                                    <input onChange={
                                        (e) => {
                                            handleNameChange(index, e.target.value);
                                            //setSkillName(e.target['value']);
                                        }
                                    } value={element.skillName} type="text" name="" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Employer</span>
                                    <input onChange={
                                        (e) => {
                                            handleEmployerChange(index, e.target.value);
                                            //setSkillName(e.target['value']);
                                        }
                                    } value={element.employer} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start And End Date</span>
                                    <div className='flex'>
                                        <input onChange={
                                            (e) => {
                                                handleStartDateChange(index, e.target.value);
                                                //setSkillName(e.target['value']);
                                            }
                                        } value={element.startdate} type="date" name="website" class="mt-1 mx-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                        <input onChange={
                                            (e) => {
                                                handleEndDateChange(index, e.target.value);
                                                //setSkillName(e.target['value']);
                                            }
                                        } value={element.enddate} type="date" name="website" class="mt-1  mx-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                    </div>
                                </label>
                            </div>

                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Address</span>
                                    <input onChange={
                                        (e) => {
                                            handleAddressChange(index, e.target.value);
                                            //setSkillName(e.target['value']);
                                        }
                                    } value={element.address} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>


                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {skillValues.length ? <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add Your Skills</h1>}
                </div>
            </button>

        </div>
    );
};

export default Experiance;