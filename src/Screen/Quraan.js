import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Quraan = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages);
  };

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <>
        {/* Quraan */}
        <div>
        <i
          className={`fas fa-search-minus mx-3 ${zoomOutClass}`}
          onClick={zoomOut}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <i
          className={`fas fa-search-plus mx-3 ${zoomInClass}`}
          onClick={zoomIn}
        />
        </div>
        <div style={{width:"100%"}}>
           <Document file="/Assets/docs/quraan.pdf" onLoadSuccess={onDocumentLoadSuccess}>
           <Page pageNumber={pageNumber} scale={scale}/>
           </Document>
        </div>

           <div>

          <i className={`fas fa-fast-backward mx-3 ${firstPageClass}`} onClick={goToFirstPage} />
          <i className={`fas fa-backward mx-3 ${firstPageClass}`}  onClick={goToPreviousPage}/>
           <span style={{color:"#981916" , fontSize:"22px"}}>
           Page{' '}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            style={{width:"50px"}}
            onChange={onPageChange}
          />{' '}
          of {numPages}
           </span>
           <i className={`fas fa-forward mx-3 ${lastPageClass}`}  onClick={goToNextPage}/>
           <i className={`fas fa-fast-forward mx-3 ${lastPageClass}`}  onClick={goToLastPage}/>
        </div>
           
    </>
  )
}

export default Quraan