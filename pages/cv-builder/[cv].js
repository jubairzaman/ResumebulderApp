
import React, { useState, useRef, useEffect } from 'react';
import Cv1 from '../../components/cvTemplets/Cv1';
import Cv2 from '../../components/cvTemplets/Cv2';
import Resumeform from '../../components/ResumeBulder/Resumeform';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar';
import { getProviders, signIn, getCsrfToken } from "next-auth/react"



import { BlobProvider } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js"
import { Document, Page, pdfjs } from 'react-pdf';
import Pdfc from '../../components/pdfc';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;



const CvBuilder = () => {
    const cvId = useRouter().query.cv
    const printRef = React.useRef();
    const preview = React.useRef();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [url, setUrl] = useState("no url now");

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    const handleDownloadPdf = async () => {

        const element = printRef.current;
        const canvas = await html2canvas(element);

        preview.current.append(canvas)
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;
        //preview.current.innerHTML = canvas

        //pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        //pdf.save(getCurrentDateAndTime() + '.pdf');

    };

    const getCurrentDateAndTime = () => {
        var date_ob = new Date();
        var day = ("0" + date_ob.getDate()).slice(-2);
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var year = date_ob.getFullYear();
        var date = year + "-" + month + "-" + day;
        var hours = date_ob.getHours();
        var minutes = date_ob.getMinutes();
        var seconds = date_ob.getSeconds();
        return year + "-" + month + "-" + day + "_" + hours + "-" + minutes + "-" + seconds;
    }

    const [cvData, setCvData] = useState({
        firstName: "",
        lastName: "",
    });


    const handelCvData = (value, name) => {
        setCvData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const getCvTemplate = () => {
        if (cvId == '2') {
            return <Pdfc cv={cvData} />
        } else {
            return <Pdfc cv={cvData} />
        }
    }

    return (
        <div>


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 relative px-5 mt-12'>
                <div className='mt-12'>
                    {/* <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                    </button> */}

                    <Resumeform handelCvData={handelCvData}></Resumeform>
                </div>


                <div className='relative pt-20' >

                    <div>
                        <BlobProvider document={getCvTemplate()} fileName="somename.pdf">
                            {({ blob, url, loading, error }) => {
                                setUrl(url)
                            }}
                        </BlobProvider>
                        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </div>
                    {/* <div className='absolute top-0 left-0 w-full my-32' style={{ height: "calc(100vh - 40px)" }}>
                        <div ref={printRef}>
                            {getCvTemplate()}
                        </div>
                    </div> */}
                    {/* <div className='absolute top-0 left-0 w-full' style={{height: "calc(100vh - 40px)"}}>
                        <div className='bg-red-500 p-20 w-full h-full flex justify-center'>
                            <div className='aspect-ratio-a4'  ref={preview}>

                            </div>
                        </div>
                    </div> */}
                </div>

            </div>


        </div>
    );
};

CvBuilder.getLayout = function getLayout(page) {
    return (
        <>
            <div className='fixed z-50 w-full top-0'> <Navbar /> </div>
            {page}
        </>
    )
}


export async function getServerSideProps(context) {
    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)
    return {
        props: { providers, csrfToken },
    }
}
export default CvBuilder;