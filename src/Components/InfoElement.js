import React
// , { useState } 
from 'react';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// import { Worker } from '@react-pdf-viewer/core';
// import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const InfoElement = () => {

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // // const [scale, setScale] = useState(1.0);

  // const isFirstPage = pageNumber === 1;
  // const isLastPage = pageNumber === numPages;

  // const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  // const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  // const goToFirstPage = () => {
  //   if (!isFirstPage) setPageNumber(1);
  // };
  // const goToPreviousPage = () => {
  //   if (!isFirstPage) setPageNumber(pageNumber - 1);
  // };
  // const goToNextPage = () => {
  //   if (!isLastPage) setPageNumber(pageNumber + 1);
  // };
  // const goToLastPage = () => {
  //   if (!isLastPage) setPageNumber(numPages);
  // };

  // const onPageChange = (e) => {
  //   const { value } = e.target;
  //   setPageNumber(Number(value));
  // };

  const name = new URLSearchParams(document.location.search).get("name");
  const Image = new URLSearchParams(document.location.search).get("Image");
  const facebookUrl = new URLSearchParams(document.location.search).get("facebookUrl");
  const url = new URLSearchParams(document.location.search).get("url");
const URL='"'+url+'"' ;

  console.log("url",url )
  console.log("URL",URL )
  console.log("Image",Image )
  console.log("name",name )
  console.log("facebookUrl",facebookUrl )

  return (
    <>
        <div className='flip' style={{backgroundColor:"black"}}>

<br/>
      <h2 className='elem'> {name} </h2>
      <br/>
      <img src={Image} alt="no" height="auto" width="90%"/><br/><br/>
      


<a  href="http://hwayadesigns.com/ramadan/blogs/topics/ramadan_meals.pdf" className="tit"><button className='butoo' > اقرا من هنا</button></a>
<br/><br/>

      {/* <div style={{width:"100%"}}>
           <Document file="http://hwayadesigns.com/ramadan/blogs/topics/ramadan_meals.pdf" onLoadSuccess={onDocumentLoadSuccess}>
           <Page pageNumber={pageNumber} />
           </Document>
        </div> */}

{/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
<Viewer fileUrl={URL} />;

</Worker> */}



           {/* <div>

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
        </div> */}

     </div>
    </>
  )
}

export default InfoElement