import React from 'react';

const ProfessonalSummary = ({ handelCvData }) => {
    return (
        <div className='border rounded-lg p-5 m-4'>
            <h1 className='text-md font-semibold mx-5'> <i class="las la-sitemap la-2x"></i>  Professional Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">


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
            </div>

        </div>
    );
};

export default ProfessonalSummary;