import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import DelayedInput from './DelayedInput';

const Education = ({ handelCvData, cvData }) => {
    const [educationValue, seteducationValue] = useState([{ school: "", degree: "", startdate: "", enddate: "", address: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["school"] = value;
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let handledegreeChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["degree"] = value;
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let handleStartDateChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["startdate"] = value;
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let handleEndDateChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["enddate"] = value;
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let handleAddressChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["address"] = value;
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let handleDescriptionChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["description"] = value;
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let addFormFields = () => {
        let newFormValues = [...educationValue, { school: "", degree: "", startdate: "", enddate: "", address: "" }];
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }

    let removeFormFields = (i) => {
        let newFormValues = [...educationValue];
        newFormValues.splice(i, 1);
        seteducationValue(newFormValues);
        handelCvData(newFormValues, 'education');
    }
    return (
        <div className='border rounded-lg p-5 m-4'>
            <h1 className='text-md font-semibold mx-5'> <i className="las la-school  la-2x"></i>  Your Education Background</h1>
            {educationValue.map((element, index) => (
                <div className='p-5' key={index}>
                    <div className='border p-5 rounded-lg'>
                        <div className='flex justify-between'>
                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.school === "" ? "Not Specified" : element.school},
                                    {element.degree === "" ? "Not Specified" : element.degree}
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


                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">school</span>
                                    <DelayedInput value={cvData?.school ?? ""} onChange={(e) => { handleNameChange(index, e); }} placeholder="School" ></DelayedInput>



                                </label>
                            </div>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">degree</span>
                                    <DelayedInput value={cvData?.degree ?? ""} onChange={(e) => { handledegreeChange(index, e); }} placeholder="Degree" ></DelayedInput>



                                </label>
                            </div>
                            <div>
                                <label className="block" onClick={e => e.preventDefault()}>

                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start And End Date</span>





                                    <div className='flex'>


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


                                        

                                    </div>
                                </label>
                            </div>

                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Address</span>

                                    <DelayedInput value={cvData?.address ?? ""} onChange={(e) => { handleAddressChange(index, e); }} placeholder="Address" ></DelayedInput>

                                </label>
                            </div>



                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Description`</span>

                                <DelayedInput value={cvData?.description ?? ""} onChange={(e) => { handleDescriptionChange(index, e); }} placeholder="Description" ></DelayedInput>


                            </label>
                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {educationValue.length ? <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add Your Education</h1>}
                </div>
            </button>

        </div>
    );
};

export default Education;