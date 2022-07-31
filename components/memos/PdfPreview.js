import React, { useState, memo, useEffect, useRef } from "react";

import { BlobProvider, PDFDownloadLink } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js"
import { Document, Page, pdfjs } from 'react-pdf';

import Tempalte1 from "../cvTemplets/Template1";
import { ShimmerSocialPost } from "react-shimmer-effects";
import Tempalte3 from "../cvTemplets/Templates/Templete3";
import Tempalte4 from "../cvTemplets/Templates/Templete4";
import Tempalte2 from "../cvTemplets/Templates/Templete2";
import Tempalte5 from "../cvTemplets/Templates/Templete5";
import Tempalte6 from "../cvTemplets/Templates/Templete6";




pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PdfPreview = ({ templateId, cvData, onLoading, onLoaded, update }) => {
  const cvId = templateId;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState(null);
  const [url2, setUrl2] = useState(null);
  const [initiallyLoaded, setInitiallyLoaded] = useState(false);
  const [downloadWrapperTop, setDownloadWrapperTop] = useState(0);

  const p1 = useRef('p1')
  const p2 = useRef('p2')

  const handelOnloaded = ({ numPages }) => {

    setNumPages(numPages);
    if (onLoaded != null) {
      onLoaded();
    }
    setTimeout(() => {
      if (!initiallyLoaded) {

        //
        setInitiallyLoaded(true);
        setTimeout(() => {
          const collection = document.getElementsByClassName("react-pdf__Page");
          setDownloadWrapperTop(collection[0].offsetHeight)
        }, 500);
      }
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
      return <Tempalte2 cv={cvData} />
    } else if (cvId == "3") {
      return <Tempalte3 cv={cvData} />;
    } else if (cvId == "4") {
      return <Tempalte4 cv={cvData} />;
    } else if (cvId == "5") {
      return <Tempalte5 cv={cvData} />;
    } else if (cvId == "6") {
      return <Tempalte6 cv={cvData} />;
    } else if (cvId == "7") {
      return <Tempalte3 cv={cvData} />;
    } else if (cvId == "8") {
      return <Tempalte3 cv={cvData} />;
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


  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const collection = document.getElementsByClassName("react-pdf__Page");
        let currentHeight = collection[0]?.offsetHeight??0;
        if (currentHeight != downloadWrapperTop) {
          setDownloadWrapperTop(collection[0].offsetHeight)
        }
      }
    );
  })

  return (
    <div className="w-full relative">
      {!initiallyLoaded ?
        <div className="absolute z-10 w-full lg:w-1/2 h-full top-0 right-1/2 translate-x-2/4">
          <ShimmerSocialPost type="text" title />
        </div> : <></>
      }

      < >
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
        <div className="flex flex-col items-center ">
          <div className="flex justify-center px-2 w-full lg:w-1/2">
            <div className="relative pdf-overview w-max-content ">

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


              <div style={{ top: `${downloadWrapperTop}px` }} className={` ${(!initiallyLoaded || downloadWrapperTop < 1) ? "hidden" : ""} absolute left-0  px-2 py-3 flex items-center justify-between w-full border-t border-slate-100`}>

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
                      <a onClick={goToPrevPage} href="#" className="relative inline-flex items-center px-1 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

                        <svg className="h-5 w-5" x-description="Heroicon name: solid/chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </a>

                      <a onClick={goToNextPage} href="#" className="relative inline-flex items-center px-1 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">

                        <svg className="h-5 w-5" x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </nav>
                  </div>
                  <PDFDownloadLink document={template} fileName="somename.pdf">
                    {({ blob, url, loading, error }) =>
                      loading ? '' : <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
                        Download
                      </button>
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          </div>


        </div>
      </>
    </div>
  )
}
export default (PdfPreview);