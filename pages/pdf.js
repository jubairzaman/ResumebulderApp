
import React, { useState } from 'react';

import { BlobProvider} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js"
import { Document, Page,pdfjs } from 'react-pdf';
import Tempalte2 from '../components/cvTemplets/Templates/Templete2';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export default function Pdf() {

  

  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState("no url now");
  const [test, setTest] = useState("no url now");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <div>
      <BlobProvider document={<Tempalte2 firstName={test} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => {
        setUrl(url)
        setTest("url")
      }}
    </BlobProvider>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

