import React from 'react';

const SocialMedias = ({handelCvData}) => {
    return (
        <div>

            <h1 className='font-semibold mx-5 my-5'>Social media Part</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">


                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            linkedin
                        </span>
                        <input onChange={(e) => handelCvData(e.target['value'], 'linkedin')} type="text" name="linkedin" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="username" />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            facebook
                        </span>
                        <input onChange={(e) => handelCvData(e.target['value'], 'website')} type="text" name="facebook" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="username" />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            skype
                        </span>
                        <input onChange={(e) => handelCvData(e.target['value'], 'website')} type="text" name="skype" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Username" />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Website
                        </span>
                        <input onChange={(e) => handelCvData(e.target['value'], 'website')} type="text" name="website" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="web address" />
                    </label>
                </div>







            </div>

        </div>
    );
};

export default SocialMedias;