import React from 'react';
import DelayedInput from './DelayedInput';

const Reference = ({ handelCvData, cvData }) => {
    return (
        <div className='border rounded-lg p-5 m-4'>
            <h1 className='text-md font-semibold mx-5'> <i className="las la-sitemap la-2x"></i>  Professional Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">


                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Profile history
                        </span>

                        <DelayedInput value={cvData?.phistory ?? ""} onChange={(e) => { handelCvData(e, 'phistory'); }} placeholder="phistory" ></DelayedInput>


                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Business Objective
                        </span>
                        <DelayedInput value={cvData?.businessObjective ?? ""} onChange={(e) => { handelCvData(e, 'businessObjective'); }} placeholder="businessObjective" ></DelayedInput>


                    </label>
                </div>
            </div>

        </div>
    );
};

export default Reference;