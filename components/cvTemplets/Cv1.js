import React from 'react';
import propic from '../../public/cvpimg.png'

const Cv1 = ({ cv }) => {
    return (
        <div>

            <div className=' mx-auto bg-slate-50 rounded-lg my-10 p-5'>


                {/* Personal Information Part  */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 ">
                    <div>
                        <img src={propic} ></img>
                    </div>

                    <div>
                        <h1 className='text-2xl font-semibold'>{cv.firstName}</h1>
                        <h1 className='text-2xl font-semibold'>{cv.lastName}</h1>
                        <p className='text-sm'>{cv.profession ?? ""}</p>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-xs'><i className="las la-phone-alt"></i> {cv.phone}</h1>
                        <h1 className='text-xs'> <i className="las la-envelope"></i> {cv.email}</h1>
                        <h1 className='text-xs'> <i className="las la-map-marker-alt"></i> {cv.address} <br></br> {cv.city},{cv.zipcode} </h1>


                    </div>


                </div>

                {/* Profile And Business Objective Part  */}

                <div className='bg-sky-100 mt-5'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5 px-3 py-5">
                        <div>

                            <h1 className='text-sky-500 text-md font-semibold'>Profile</h1>
                            <p className='text-xs'>{cv.phistory}</p>
                        </div>
                        <div >

                            <h1 className='text-sky-500 text-md font-semibold'>Business Objective</h1>
                            <p className='text-xs'>{cv.businessobjective}</p>
                        </div>


                    </div>



                </div>


                {/* Expertise and work experiance part */}

                <div className='mx-2 my-5'>
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        <div>
                            <div class="grid grid-rows-4 grid-flow-col gap-4">
                                <div>
                                    <h1 className='text-md font-semibold text-sky-500'>Expertise</h1>

                                </div>

                                <div >
                                    <h1 className='text-md font-semibold text-sky-500'>
                                        language
                                    </h1>
                                </div>
                            </div>


                        </div>
                        <div>
                            <div class="grid grid-rows-4 grid-flow-col gap-4">
                                <div>Work Experiance</div>

                                <div> language</div>
                            </div>


                        </div>
                    </div>
                </div>






            </div>

        </div>
    );
};

export default Cv1;