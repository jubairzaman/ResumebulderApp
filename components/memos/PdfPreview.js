import React, { useState, memo, useEffect, useRef } from "react";

import { BlobProvider,PDFDownloadLink } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js"
import { Document, Page, pdfjs } from 'react-pdf';
import Pdfc from '../../components/pdfc';
import Tempalte1 from "../cvTemplets/Template1";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PdfPreview = ({ templateId, cvData, onLoading, onLoaded, update }) => {
  const cvId = templateId;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState(null);
  const [url2, setUrl2] = useState(null);

  const p1 = useRef('p1')
  const p2 = useRef('p2')

  const handelOnloaded = ({ numPages }) => {

    setNumPages(numPages);
    if (onLoaded != null) {
      onLoaded();
    }
    //console.log("First com loded");
    setTimeout(() => {
      p1.current?.classList?.remove('hidden')
      p2.current?.classList?.add('hidden')
      setUrl2(url);
    }, 500)
  }
  const handelOnloaded2 = () => {
    //console.log("Sec com loded");
  }

  const handelOnloading = () => {
    p1.current?.classList?.add('hidden')
    p2.current?.classList?.remove('hidden')
    //console.log("loading first")
    if (onLoading != null) {
      onLoading();
    }
  }

  const handelOnloading2 = () => {
    console.log("loading Sec")
    if (onLoading != null) {
      onLoading();
    }
  }


  const getCvTemplate = () => {
    console.log("called" + cvId);
    if (cvId == '2') {
      return <Pdfc cv={cvData} />
    } else {
      return <Tempalte1 cv={cvData} />
    }
  }
  const [template, setTemplate] = useState(getCvTemplate());

  useEffect(() => {
    setTemplate(
      getCvTemplate()
    )
  }, [cvData])



  return (
    <>
      <BlobProvider document={template} fileName="somename.pdf">
        {({ blob, url, loading, error }) => {
          if (!loading) {
            setUrl(url)
            if (!url2) {
              setUrl2(url)
            }
          }
        }}
      </BlobProvider>

      <div >

        <div ref={p1}>
          <Document file={url} loading={handelOnloading} onLoadSuccess={handelOnloaded}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <div ref={p2} className="hidden">
          <Document file={url2} loading={handelOnloading2} onLoadSuccess={handelOnloaded2}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>



        <p className='text-center text-xs'>
          {pageNumber} of {numPages}
        </p>

        <PDFDownloadLink document={template} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
    </>
  )
}
export default (PdfPreview);