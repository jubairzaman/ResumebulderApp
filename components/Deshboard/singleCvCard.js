import Link from 'next/link';
import React from 'react';
const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings
const SingleCvCard = ({ cvData,refresh }) => {

    
    const makeDuplicate = (cvId) => {
        axios.post('/api/cv/make-duplicate', {
            id: cvId,
          })
          .then(function (response) {
            refresh();
          })
          .catch(function (error) {
            
          });   
    }

    const deleteCv = (cvId) => {
        axios.post('/api/cv/delete', {
            id: cvId,
          })
          .then(function (response) {
            refresh();
          })
          .catch(function (error) {
            
          });   
    }


    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <img className='object-cover w-full  shadow-lg' src={"img-" + cvData.templateId + ".jpg"}></img>
                </div>

                <div className="grid grid-rows-6 grid-flow-col ">

                    <h1 className='text-md '>UNTITLED_11.06.2 <i className="las la-pen la-1x text-indigo-500"></i> </h1>
                    <h1 className='text-sm '>June 26, 2022 1:06 PM</h1>



                    <Link href={"cv-builder/edit/"+cvData.id}>
                        <a>
                            <i className="las la-pen la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Edit</span>
                        </a>
                    </Link>
                    
                    <a onClick={()=>{
                        makeDuplicate(cvData.id)
                    }}>
                        <i className="lar la-copy la-1x text-indigo-500" ></i>
                        <span className='ms-2 hover:text-indigo-500'>Duplicate</span>
                    </a>
                    <a  onClick={()=>{
                        deleteCv(cvData.id)
                    }}> <i className="lar la-trash-alt la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Delete</span>  </a>
                    <a> <i className="las la-file-download la-1x text-indigo-500"></i> <span className='ms-2 hover:text-indigo-500'>Download</span>  </a>
                </div>
            </div>







        </div>
    );
};

export default SingleCvCard;