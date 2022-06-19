
import React, { useState } from 'react';
import Cv1 from '../../components/cvTemplets/Cv1';
import Cv2 from '../../components/cvTemplets/Cv2';
import Resumeform from '../../components/ResumeBulder/Resumeform';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useRouter } from 'next/router'

const resumeinfo = () => {
    const cvId = useRouter().query.cv
    const printRef = React.useRef();

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
        pdf.save(getCurrentDateAndTime()+'.pdf');
        
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
            return <Cv2 cv={cvData} />
        } else {
            return <Cv1 cv={cvData} />
        }
    }


    return (
        <div>
            <button type="button" onClick={handleDownloadPdf}>
                Download as PDF
            </button>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  '>
                <Resumeform handelCvData={handelCvData}></Resumeform>
                <div ref={printRef}>
                    {getCvTemplate()}
                </div>

            </div>
        </div>
    );
};

export default resumeinfo;