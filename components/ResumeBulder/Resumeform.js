import React, { useState } from 'react';


const Resumeform = ({ handelCvData }) => {




    return (
        <div className=' mx-auto '>
            {/* from part  */}
            <div className='bg-sky-50'>


                <h1 className='text-center text-xl font-semibold'>Add your personal details to your resume</h1>
                <p className='text-center'>It allows employers to see how they can contact you</p>

                <div className='w-10/12 mx-auto bg-white rounded-lg my-10'>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Desired Job Title
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'profession')} type="text" name="Title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Engineer" />
                            </label>
                        </div>
                        <div>

                            <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 ">
                                <div className="shrink-0">
                                    <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
                                </div>
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input type="file" className="block w-full text-sm text-slate-500
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
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    First Name
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'firstName')} type="text" name="Firstname" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div><label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Last Name
                            </span>
                            <input onChange={(e) => handelCvData(e.target['value'], 'lastName')} type="text" name="lastName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                        </label></div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Email
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'email')} type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Phone Number
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'phone')} type="number" name="phoneNumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    City
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'city')} type="text" name="City" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Address
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'address')} type="text" name="Address" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Zipcode
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'zipcode')} type="text" name="Zipcode" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Nationality
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'nationality')} type="text" name="Nationality" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>

                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Date Of Birth
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'dob')} type="date" name="DOB" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    linkedin
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'linkedin')} type="text" name="linkedin" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Website
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'website')} type="text" name="website" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Profile history
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'phistory')} type="text" name="website" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    business Objective
                                </span>
                                <input onChange={(e) => handelCvData(e.target['value'], 'businessobjective')} type="text" name="website" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                            </label>
                        </div>

                        <div>


                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default Resumeform;