import { BlobProvider} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js"
import Pdfc from "../components/pdfc"
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
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
      <BlobProvider document={<Pdfc firstName={test} />} fileName="somename.pdf">
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

