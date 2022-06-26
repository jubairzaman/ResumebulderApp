import Link from 'next/link';
import React from 'react';

const SingleCvCard = ({ cvData }) => {


    return (
        <div>





            <div class="grid grid-cols-2 gap-2">
                <div>
                    <img className='object-cover w-full  shadow-lg' src={"img-" + cvData.templateId + ".jpg"}></img>
                </div>

                <div class="grid grid-rows-6 grid-flow-col ">

                    <h1 className='text-md '>UNTITLED_11.06.2 <i class="las la-pen la-1x text-indigo-500"></i> </h1>
                    <h1 className='text-sm '>June 26, 2022 1:06 PM</h1>


                    <a> <i class="las la-pen la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Edit</span>  </a>
                    <a> <i class="lar la-copy la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Duplicate</span>  </a>
                    <a> <i class="lar la-trash-alt la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Delete</span>  </a>
                    <a> <i class="las la-file-download la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Download</span>  </a>





                </div>
            </div>







        </div>
    );
};

export default SingleCvCard;