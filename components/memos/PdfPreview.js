import React, { useState, memo, useEffect, useRef } from "react";

import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js"
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
    if (onLoading != null) {
      onLoading();
    }
  }

  const handelOnloading2 = () => {

    if (onLoading != null) {
      onLoading();
    }
  }

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }
  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1)
    }
  }


  const getCvTemplate = () => {

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
      <div  >
        <div className="relative pdf-overview bg-red">

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
        </div>

        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">

          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-xs text-gray-700">
                <span >{pageNumber}</span>
                <span className="px-2">/</span>
                <span >{numPages}</span>
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a onClick={goToPrevPage} href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" x-description="Heroicon name: solid/chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </a>

                <a onClick={goToNextPage} href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </nav>
            </div>
            <PDFDownloadLink document={template} fileName="somename.pdf">
              {({ blob, url, loading, error }) =>
                loading ? '' : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
              }
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </>
  )
}
export default (PdfPreview);