import React from 'react'
// import { food } from '../Assets/Index';

const FoodElement = () => {

  const name = new URLSearchParams(document.location.search).get("name");
  const singleImage = new URLSearchParams(document.location.search).get("singleImage");
  const recipe = new URLSearchParams(document.location.search).get("recipe");
  const videos = new URLSearchParams(document.location.search).get(
    "videos"
  );
  // var youtube= `${youtubeUrl}`.replace("","https://www.youtube.com/embed/");
  var youtube= (`https://www.youtube.com/embed/${videos}`);
  console.log("youtube",youtube )
  console.log("singleImage",singleImage )
  console.log("name",name )
  console.log("recipe",recipe )
  console.log("videos",videos )

  return (
    <>
        <div className='flip' style={{backgroundColor:"black"}}>

           <h2 className='elem'> {name}</h2>
           <br/>
           <img src={singleImage} alt="no" height="auto" width="90%"/><br/><br/>
           <h4 className='elem'>طريقة التحضير </h4>
           <p className='paar'>
           {recipe} 

           </p>
           {/* <h4 className='elem'>طريقة التحضير بشكل صحي  </h4>
           <p className='paar'>
             لا يوجد 
           </p> */}
           {/* <h4 className='elem'> عدد السعرات الحرارية  </h4>
           <p className='paar'>
             1 
           </p> */}
           <h4 className='elem'> الفيديو </h4>
           <iframe
               width="90%"
               height="800px"
               src={youtube}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             >
             </iframe>
            <br/><br/><br/><br/>
        </div>
    </>
  )
}

export default FoodElement
