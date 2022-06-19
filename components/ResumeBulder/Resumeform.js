import React, { useState } from 'react';


const Resumeform = () => {


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
        <div className=' mx-auto '>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* from part  */}
                <div className='bg-sky-50'>
                    <h1 className='text-center text-xl font-semibold'>Add your personal details to your resume</h1>
                    <p className='text-center'>It allows employers to see how they can contact you</p>

                    <div className='w-10/12 mx-auto bg-white rounded-lg my-10'>

                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Desired Job Title
                                    </span>
                                    <input onChange={(e) => handleProfession(e.target['value'])} type="text" name="Title" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Engineer" />
                                </label>
                            </div>
                            <div>

                                <form class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 ">
                                    <div class="shrink-0">
                                        <img class="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                                    </div>
                                    <label class="block">
                                        <span class="sr-only">Choose profile photo</span>
                                        <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                                    </label>
                                </form>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        First Name
                                    </span>
                                    <input onChange={(e) => handlefirstname(e.target['value'])} type="text" name="Firstname" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div><label class="block">
                                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Last Name
                                </span>
                                <input onChange={(e) => handlelastName(e.target['value'])} type="text" name="lastName" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label></div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Email
                                    </span>
                                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Phone Number
                                    </span>
                                    <input type="number" name="phoneNumber" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Country
                                    </span>
                                    <input type="text" name="country" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        City
                                    </span>
                                    <input type="text" name="City" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Address
                                    </span>
                                    <input type="text" name="Address" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Zipcode
                                    </span>
                                    <input type="text" name="Zipcode" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Nationality
                                    </span>
                                    <input type="text" name="Nationality" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Driving Licence
                                    </span>
                                    <input type="text" name="DL" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Date Of Birth
                                    </span>
                                    <input type="date" name="DOB" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Place Of Birth
                                    </span>
                                    <input type="text" name="POB" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        linkedin
                                    </span>
                                    <input type="text" name="linkedin" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>
                            <div>
                                <label class="block">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Website
                                    </span>
                                    <input type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                                </label>
                            </div>

                            <div>


                            </div>
                        </div>


                    </div>



                </div>
                <div className='...'>



                </div>
            </div>




        </div>
    );
};

export default Resumeform;