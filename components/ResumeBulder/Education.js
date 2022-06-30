import React, { useState } from 'react'

const Education = () => {
    const [educationValue, seteducationValue] = useState([{ School: "", degree: "", startdate: "", enddate: "", address: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["School"] = value;
        seteducationValue(newFormValues);
    }

    let handleDegreeChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["Degree"] = value;
        seteducationValue(newFormValues);
    }

    let handleStartDateChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["startdate"] = value;
        seteducationValue(newFormValues);
    }

    let handleEndDateChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["enddate"] = value;
        seteducationValue(newFormValues);
    }

    let handleAddressChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["address"] = value;
        seteducationValue(newFormValues);
    }

    let handleDescriptionChange = (i, value) => {
        let newFormValues = [...educationValue];
        newFormValues[i]["description"] = value;
        seteducationValue(newFormValues);
    }

    let addFormFields = () => {
        let newFormValues = [...educationValue, { School: "", degree: "", startdate: "", enddate: "", address: "" }];
        seteducationValue(newFormValues)
    }

    let removeFormFields = (i) => {
        let newFormValues = [...educationValue];
        newFormValues.splice(i, 1);
        seteducationValue(newFormValues)
    }
    return (
        <div className='border rounded-lg p-5 m-4'>
            <h1 className='text-md font-semibold mx-5'> <i class="las la-school  la-2x"></i>  Your Education Background</h1>
            {educationValue.map((element, index) => (
                <div className='p-5'>
                    <div className='border p-5 rounded-lg'>
                        <div className='flex justify-between'>
                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.School === "" ? "Not Specified" : element.School},
                                    {element.Degree === "" ? "Not Specified" : element.Degree}
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


                        <div className='grid grid-cols-2 gap-2 mt-4'>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">School</span>
                                    <input onChange={
                                        (e) => {
                                            handleNameChange(index, e.target.value);
                                            //setSchool(e.target['value']);
                                        }
                                    } value={element.School} type="text" name="" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Degree</span>
                                    <input onChange={
                                        (e) => {
                                            handleDegreeChange(index, e.target.value);
                                            //setSchool(e.target['value']);
                                        }
                                    } value={element.Degree} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start And End Date</span>
                                    <div className='flex'>
                                        <input onChange={
                                            (e) => {
                                                handleStartDateChange(index, e.target.value);
                                                //setSchool(e.target['value']);
                                            }
                                        } value={element.startdate} type="date" name="website" class="mt-1 mx-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                        <input onChange={
                                            (e) => {
                                                handleEndDateChange(index, e.target.value);
                                                //setSchool(e.target['value']);
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
                                            //setSchool(e.target['value']);
                                        }
                                    } value={element.address} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>



                        </div>
                        <div>
                            <label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Description`</span>
                                <input onChange={
                                    (e) => {
                                        handleDescriptionChange(index, e.target.value);
                                        //setSchool(e.target['value']);
                                    }
                                } value={element.description} type="text" name="website" class="mt-1 px-3 h-20 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {educationValue.length ? <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add Your Skills</h1>}
                </div>
            </button>

        </div>
    );
};

export default Education;