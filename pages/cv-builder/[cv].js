
import React, { useState, useRef, useEffect } from 'react';
import Cv1 from '../../components/cvTemplets/Cv1';
import Cv2 from '../../components/cvTemplets/Cv2';
import Resumeform from '../../components/ResumeBulder/Resumeform';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar';
import { getProviders, signIn, getCsrfToken } from "next-auth/react"


import PdfPreview from '../../components/memos/PdfPreview';



const CvBuilder = () => {
    const cvId = useRouter().query.cv

    const navBar = useRef('navBar');

    const [cvData, setCvData] = useState({
        firstName: "",
        lastName: "",
    });

    const [cvDataOld, setOldCvData] = useState({
        firstName: "",
        lastName: "",
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const handelCvData = async (value, name) => {

        setCvData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }




    const preview1 = <PdfPreview cvData={cvData} templateId={1} onLoading={null} onLoaded={null} update={false} />;
    const preview2 = <PdfPreview cvData={cvDataOld} templateId={3} onLoading={null} onLoaded={null} update={true} />;



    return (
        <div>

            <div className='fixed z-50 w-full top-0' ref={navBar}> <Navbar /> </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 relative px-5' style={{ "marginTop": navBar.current.scrollHeight + "px" }}>
                <div className=''>
                    <Resumeform handelCvData={handelCvData}></Resumeform>
                </div>


                <div className='relative flex justify-center p-10 bg-gray-300'  >
                    <div className='block lg:fixed '>
                        {preview1}

                    </div>
                </div>
            </div>
        </div>
    );
};


CvBuilder.shouldSkipDefaultLayout = true;


export async function getServerSideProps(context) {
    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)
    return {
        props: { providers, csrfToken },
    }
}
export default CvBuilder;