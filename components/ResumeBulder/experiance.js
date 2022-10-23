import React, { useState } from 'react'
import DelayedInput from './DelayedInput';
import DatePicker from "react-datepicker";

const Experiance = ({ handelCvData, cvData }) => {
    const [experienceValue, setexperienceValue] = useState([{ jobTitle: "", employer: "", startdate: "", enddate: "", address: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...experienceValue];
        newFormValues[i]["jobTitle"] = value;
        setexperienceValue(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handleEmployerChange = (i, value) => {
        let newFormValues = [...experienceValue];
        newFormValues[i]["employer"] = value;
        setexperienceValue(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handleStartDateChange = (i, value) => {
        let newFormValues = [...experienceValue];
        newFormValues[i]["startdate"] = value;
        setexperienceValue(newFormValues);
        handelCvData(newFormValues, 'experiences');
    }
    let handleEndDateChange = (i, value) => {
        let newFormValues = [...experienceValue];
        newFormValues[i]["enddate"] = value;
        setexperienceValue(newFormValues);
        handelCvData(newFormValues, 'experiences');
    }
    let handleAddressChange = (i, value) => {
        let newFormValues = [...experienceValue];
        newFormValues[i]["address"] = value;
        setexperienceValue(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handleDescriptionChange = (i, value) => {
        let newFormValues = [...experienceValue];
        newFormValues[i]["description"] = value;
        setexperienceValue(newFormValues);
        handelCvData(newFormValues, 'experiences');
    }

    let addFormFields = () => {
        let newFormValues = [...experienceValue, { jobTitle: "", employer: "", startdate: "", enddate: "", address: "" }];
        setexperienceValue(newFormValues)
        handelCvData(newFormValues, 'experiences');
    }

    let removeFormFields = (i) => {
        let newFormValues = [...experienceValue];
        newFormValues.splice(i, 1);
        setexperienceValue(newFormValues)
        handelCvData(newFormValues, 'experiences');
    }
    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i className="las la-briefcase la-2x"></i>  Your Experience </h1>
            {experienceValue.map((element, index) => (
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

                                    <DelayedInput value={cvData?.jobTitle ?? ""} onChange={(e) => { handleNameChange(index, e); }} placeholder="jobTitle" ></DelayedInput>

                                </label>
                            </div>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Companey Name</span>


                                    <DelayedInput value={cvData?.employer ?? ""} onChange={(e) => { handleEmployerChange(index, e); }} placeholder="employer" ></DelayedInput>


                                </label>
                            </div>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start Date</span>

                                    <div>
                                        <DatePicker
                                        className='dateicker'
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                            placeholderText='Start Date'
                                            showFullMonthYearPicker
                                            shouldCloseOnSelect={true}
                                            selected={Date.parse(cvData?.startdate)}
                                            onChange={(e) => {
                                                handleStartDateChange(index, e.getMonth()+"/"+e.getFullYear()); 
                                                console.log(typeof(e));
                                            }}
                                        />
                                        </div>



                                </label>
                            </div>

                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">End Date</span>



                                    <div>
                                        <DatePicker
                                        className='dateicker'
                                            dateFormat="MM/yyyy"
                                            placeholderText='End Date'
                                            showMonthYearPicker
                                            showFullMonthYearPicker
                                            shouldCloseOnSelect={true}
                                            selected={Date.parse(cvData?.startdate)}
                                            onChange={(e) => {
                                                handleEndDateChange(index, e.getMonth()+"/"+e.getFullYear()); 
                                                console.log(typeof(e));
                                            }}
                                        />
                                        </div>



                                </label>
                            </div>



                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Address</span>

                                <DelayedInput value={cvData?.address ?? ""} onChange={(e) => { handleAddressChange(index, e); }} placeholder="address" ></DelayedInput>



                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Description`</span>

                                <DelayedInput value={cvData?.description ?? ""} onChange={(e) => { handleDescriptionChange(index, e); }} placeholder="description" ></DelayedInput>

                            </label>
                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {experienceValue.length ? <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add Your Experiance</h1>}
                </div>
            </button>

        </div>
    );
};

export default Experiance;