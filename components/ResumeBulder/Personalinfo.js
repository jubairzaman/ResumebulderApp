import React from 'react';

const Personalinfo = ({ handelCvData,cvData}) => {
    return (
        <div className='border rounded-lg p-5 m-4'>
            <h1 className='text-md font-semibold mx-5'> <i className="lar la-user-circle la-2x"></i>  Personal Information</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Desired Job Title
                        </span>
                        <input value={cvData?.profession??""} onChange={(e) => handelCvData(e.target['value'], 'profession')} type="text" name="Title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Engineer" />
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
                        <input value={cvData?.firstName??""} onChange={(e) => handelCvData(e.target['value'], 'firstName')} type="text" name="Firstname" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                </div>
                <div><label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Last Name
                    </span>
                    <input value={cvData?.lastName??""} onChange={(e) => handelCvData(e.target['value'], 'lastName')} type="text" name="lastName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                </label></div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input value={cvData?.email??""} onChange={(e) => handelCvData(e.target['value'], 'email')} type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Phone Number
                        </span>
                        <input value={cvData?.phone??""} onChange={(e) => handelCvData(e.target['value'], 'phone')} type="number" name="phoneNumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                </div>

                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            City
                        </span>
                        <input value={cvData?.city??""} onChange={(e) => handelCvData(e.target['value'], 'city')} type="text" name="City" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Address
                        </span>
                        <input value={cvData?.address??""} onChange={(e) => handelCvData(e.target['value'], 'address')} type="text" name="Address" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
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
                            Country
                        </span>
                        <input onChange={(e) => handelCvData(e.target['value'], 'country')} type="text" name="Nationality" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
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



            </div>

        </div>
    );
};

export default Personalinfo;