import React, { useState } from 'react'

const Reference = () => {
    const [skillValues, setskillValues] = useState([{ Company: "", expartise: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Company"] = value;
        setskillValues(newFormValues);


    }
    let handlePersonChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Person"] = value;
        setskillValues(newFormValues);


    }
    let handleEmailChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Email"] = value;
        setskillValues(newFormValues);


    }

    let handlePhoneChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Phone"] = value;
        setskillValues(newFormValues);


    }


    let addFormFields = () => {
        let newFormValues = [...skillValues, { Company: "", expartise: "0" }];
        setskillValues(newFormValues)

    }

    let removeFormFields = (i) => {
        let newFormValues = [...skillValues];
        newFormValues.splice(i, 1);
        setskillValues(newFormValues)

    }
    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i class="las la-Company  la-2x"></i>  References</h1>
            {skillValues.map((element, index) => (
                <div className='p-5'>

                    <div className='border p-5 rounded-lg'>

                        {/* upper Part  */}

                        <div className='flex justify-between'>

                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.Company === "" ? "Not Specified" : element.Company},
                                    {element.Person === "" ? "Not Specified" : element.Person}
                                </span>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.Email === "" ? "Not Selected" : element.Email}

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
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Person</span>
                                    <input onChange={
                                        (e) => {
                                            handlePersonChange(index, e.target.value);
                                            //setCompany(e.target['value']);
                                        }
                                    } value={element.Person} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Company</span>
                                    <input onChange={
                                        (e) => {
                                            handleNameChange(index, e.target.value);
                                            //setCompany(e.target['value']);
                                        }
                                    } value={element.Company} type="text" name="" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>

                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
                                    <div className='flex'>
                                        <input onChange={
                                            (e) => {
                                                handleEmailChange(index, e.target.value);
                                                //setCompany(e.target['value']);
                                            }
                                        } value={element.Email} type="email" name="website" class="mt-1 mx-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />

                                    </div>
                                </label>
                            </div>

                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Phone</span>
                                    <input onChange={
                                        (e) => {
                                            handlePhoneChange(index, e.target.value);
                                            //setCompany(e.target['value']);
                                        }
                                    } value={element.Phone} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>



                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {skillValues.length ? <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add Your Refarencs</h1>}
                </div>
            </button>

        </div>
    );
};

export default Reference;