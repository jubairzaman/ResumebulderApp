import React, { useState } from 'react'
import DelayedInput from './DelayedInput';

const Experiance = ({ handelCvData, cvData }) => {
    const [skillValues, setskillValues] = useState([{ jobTitle: "", employer: "", startdate: "", enddate: "", address: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["jobTitle"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handleEmployerChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["employer"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handleStartDateChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["startdate"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues, 'experiences');
    }
    let handleEndDateChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["enddate"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues, 'experiences');
    }
    let handleAddressChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["address"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handleDescriptionChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["description"] = value;
        setskillValues(newFormValues);
        handelCvData(newFormValues, 'experiences');
    }

    let addFormFields = () => {
        let newFormValues = [...skillValues, { jobTitle: "", employer: "", startdate: "", enddate: "", address: "" }];
        setskillValues(newFormValues)
        handelCvData(newFormValues, 'experiences');
    }

    let removeFormFields = (i) => {
        let newFormValues = [...skillValues];
        newFormValues.splice(i, 1);
        setskillValues(newFormValues)
        handelCvData(newFormValues, 'experiences');
    }
    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i className="las la-briefcase la-2x"></i>  Your Experience </h1>
            {skillValues.map((element, index) => (
                <div className='p-5' key={index}>

                    <div className='border p-5 rounded-lg'>

                        {/* upper Part  */}

                        <div className='flex justify-between'>

                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.jobTitle === "" ? "Not Specified" : element.jobTitle},
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
                                }><i className="las la-trash la-2x"></i></button>
                            </div>
                        </div>

                        {/* secound Part */}

                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Job Title</span>

                                    <DelayedInput value={cvData?.jobTitle ?? ""} onChange={(e) => { handelCvData(e, 'jobTitle'); }} placeholder="jobTitle" ></DelayedInput>

                                </label>
                            </div>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Companey Name</span>


                                    <DelayedInput value={cvData?.employer ?? ""} onChange={(e) => { handelCvData(e, 'employer'); }} placeholder="employer" ></DelayedInput>


                                </label>
                            </div>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start And End Date</span>
                                    <div className='flex'>
                                        <div className='flex'>

                                            <DelayedInput value={cvData?.startdate ?? ""} type="date" onChange={(e) => { handelCvData(e, 'startdate'); }} placeholder="Startdate" ></DelayedInput>

                                            <DelayedInput value={cvData?.enddate ?? ""} type="date" onChange={(e) => { handelCvData(e, 'enddate'); }} placeholder="Enddate" ></DelayedInput>

                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Address</span>

                                    <DelayedInput value={cvData?.address ?? ""} onChange={(e) => { handelCvData(e, 'address'); }} placeholder="address" ></DelayedInput>



                                </label>
                            </div>


                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Description`</span>

                                <DelayedInput value={cvData?.description ?? ""} onChange={(e) => { handelCvData(e, 'description'); }} placeholder="description" ></DelayedInput>

                            </label>
                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {skillValues.length ? <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add Your Experiance</h1>}
                </div>
            </button>

        </div>
    );
};

export default Experiance;