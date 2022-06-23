import React, { useState, useRef } from 'react';
import Cv1 from '../components/cvTemplets/Cv1';
import Resumeform from '../components/ResumeBulder/Resumeform';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
const Resumeinfo = () => {
    const printRef = useRef();
    const handleDownloadPdf = async () => {

        const element = printRef.current;

        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };
    const [cv, setCvData] = useState({
        firstName: "",
        lastName: "",
    });


    const handelCvData = (value, name) => {
        setCvData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    return (
        <div>
            {/* <button type="button" onClick={handleDownloadPdf}>
                Download as PDF
            </button> */}
            <pre>{JSON.stringify(cv, null, 2)}</pre>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  '>
                <Resumeform handelCvData={handelCvData}></Resumeform>
                <div ref={printRef}>
                    <Cv1 cv={cv} />
                </div>

            </div>
        </div>
    );
};

export default Resumeinfo;