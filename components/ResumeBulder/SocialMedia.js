import React, { useState } from 'react'

const SocialMedia = () => {
    const [skillValues, setskillValues] = useState([{ Facebook: "", expartise: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Facebook"] = value;
        setskillValues(newFormValues);


    }
    let handleLinkedInChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["LinkedIn"] = value;
        setskillValues(newFormValues);


    }

    let handleSkypeChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Skype"] = value;
        setskillValues(newFormValues);


    }
    let handleWebsiteChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["Website"] = value;
        setskillValues(newFormValues);


    }


    let addFormFields = () => {
        let newFormValues = [...skillValues, { Facebook: "", expartise: "0" }];
        setskillValues(newFormValues)

    }

    let removeFormFields = (i) => {
        let newFormValues = [...skillValues];
        newFormValues.splice(i, 1);
        setskillValues(newFormValues)

    }
    return (
        <div className='border rounded-lg p-5 m-4'>

            <h1 className='text-md font-semibold mx-5'> <i class="las la-Facebook  la-2x"></i>  Your Social Media</h1>
            {skillValues.map((element, index) => (
                <div className='p-5'>

                    <div className='border p-5 rounded-lg'>

                        {/* upper Part  */}

                        <div className='flex justify-between'>

                            <div>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    {element.Facebook === "" ? "Not Specified" : element.Facebook},
                                    {element.LinkedIn === "" ? "Not Specified" : element.LinkedIn}
                                </span>
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Start From
                                    {element.startdate === "" ? "Not Selected" : element.startdate} And Ended in
                                    {element.Skype === "" ? "Not Specified" : element.Skype}
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
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Facebook</span>
                                    <input onChange={
                                        (e) => {
                                            handleNameChange(index, e.target.value);
                                            //setFacebook(e.target['value']);
                                        }
                                    } value={element.Facebook} type="text" name="" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">LinkedIn</span>
                                    <input onChange={
                                        (e) => {
                                            handleLinkedInChange(index, e.target.value);
                                            //setFacebook(e.target['value']);
                                        }
                                    } value={element.LinkedIn} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Skype</span>
                                    <div className='flex'>

                                        <input onChange={
                                            (e) => {
                                                handleSkypeChange(index, e.target.value);
                                                //setFacebook(e.target['value']);
                                            }
                                        } value={element.Skype} type="text" name="website" class="mt-1  mx-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                    </div>
                                </label>
                            </div>

                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Website</span>
                                    <input onChange={
                                        (e) => {
                                            handleWebsiteChange(index, e.target.value);
                                            //setFacebook(e.target['value']);
                                        }
                                    } value={element.Website} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>



                        </div>

                    </div>
                </div>
            ))}
            <button className="button add mx-6" type="button" onClick={() => addFormFields()}>
                <div className='flex my-5 ' >
                    {skillValues.length ? <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add More</h1> : <h1 className='text-indigo-600'> <i class="las la-plus-circle la-lg mt-1"></i>  Add Your Social Media</h1>}
                </div>
            </button>

        </div>
    );
};

export default SocialMedia;