import React, { useState } from 'react';
import DelayedInput from './DelayedInput';

const Reference = ({ handelCvData, cvData }) => {

    const [reference, setreference] = useState([{ rname: "", rdetails: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...reference];
        newFormValues[i]["rname"] = value;
        setreference(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }
    let handlerdetailsChange = (i, value) => {
        let newFormValues = [...reference];
        newFormValues[i]["rdetails"] = value;
        setreference(newFormValues);
        handelCvData(newFormValues, 'experiences');

    }

    let addFormFields = () => {
        let newFormValues = [...reference, { rname: "", rdetails: "" }];
        setreference(newFormValues)
        handelCvData(newFormValues, 'experiences');
    }

    let removeFormFields = (i) => {
        let newFormValues = [...reference];
        newFormValues.splice(i, 1);
        setreference(newFormValues)
        handelCvData(newFormValues, 'experiences');
    }



    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i className="las la-briefcase la-2x"></i>Reference </h1>
            {reference.map((element, index) => (
                <div className='p-5' key={index}>

                    <div className='border p-5 rounded-lg'>

                        {/* upper Part  */}

                        <div className='flex justify-between'>

                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.rname === "" ? "Not Specified" : element.rname},
                                    {element.rdetails === "" ? "Not Specified" : element.rdetails}
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
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</span>

                                    <DelayedInput value={cvData?.rname ?? ""} onChange={(e) => { handleNameChange(index, e); }} placeholder="rname" ></DelayedInput>

                                </label>
                            </div>
                            <div>
                                <label className="block">
                                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Companey Name</span>


                                    <DelayedInput value={cvData?.rdetails ?? ""} onChange={(e) => { handlerdetailsChange(index, e); }} placeholder="rdetails" ></DelayedInput>


                                </label>
                            </div>





                        </div>


                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {reference.length ? <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i className="las la-plus-circle la-lg mt-1"></i>  Add Your Experiance</h1>}
                </div>
            </button>

        </div>
    );
};

export default Reference;