
import React, { useState, useRef, useEffect } from 'react'
import Resumeform from '../../components/ResumeBulder/Resumeform'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'
import { getProviders, signIn, getCsrfToken } from "next-auth/react"
import PdfPreview from '../../components/memos/PdfPreview'



const CvBuilder = () => {
    const cvId = useRouter().query.cv

    const navBar = useRef('navBar');

    const [cvData, setCvData] = useState({
        firstName: "James",
        lastName: "Mary",
        email:"james@cv.com",
        skills: {}
    });
    
    const handelCvData = async (value, name) => {
        setCvData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const updateSkillData = async (value) => {
        let newCvData = {...cvData};
        newCvData.skills = value;
        setCvData(newCvData)
    }


    const preview1 = <PdfPreview cvData={cvData} templateId={cvId} onLoading={null} onLoaded={null} update={false} />;
    return (
        <div>
            <div className='fixed z-50 w-full top-0' ref={navBar}> <Navbar /> </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 relative px-5' style={{ "marginTop": navBar.current.scrollHeight??71 + "px" }}>
                <div className=''>
                    <Resumeform handelCvData={handelCvData} updateSkillData={updateSkillData} ></Resumeform>
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