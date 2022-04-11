import React from 'react'
import { places } from '../Assets/Index';

const PlacesElement = () => {

  const name = new URLSearchParams(document.location.search).get("name");
  const images = new URLSearchParams(document.location.search).get("images");
  const description = new URLSearchParams(document.location.search).get("description");
  const address = new URLSearchParams(document.location.search).get("address");
  const video = new URLSearchParams(document.location.search).get("video");
  const phone1 = new URLSearchParams(document.location.search).get("phone1");
  const phone2 = new URLSearchParams(document.location.search).get("phone2");
  const email = new URLSearchParams(document.location.search).get("email");
  
  // var youtube= `${youtubeUrl}`.replace("","https://www.youtube.com/embed/");
  var youtube= (`https://www.youtube.com/embed/${video}`);
  console.log("youtube",youtube )
  console.log("images",images )
  console.log("name",name )
  console.log("description",description )
  console.log("address",address )
  console.log("video",video )
  console.log("phone1",phone1 )
  console.log("phone2",phone2 )
  console.log("email",email )
 
  return (
    <>
          <div className='flip' style={{backgroundColor:"black"}}>

          <br/>
                <h2 className='elem'> {name} </h2>
                <br/>
                <img src={images} alt="no" height="auto" width="90%"/><br/><br/>
                <h4 className='elem'>وصف المكان  </h4>
                <p className='paar'>
                  {description} 
                
                </p>
                <h4 className='elem'>عنوان المكان   </h4>
                <p className='paar'>
                  {address}
                </p>
                <h4 className='elem'> الموقع الالكتروني  </h4>
                <p className='paar'>
                  {email} 
                </p>
                <h4 className='elem'> رقم الهاتف  </h4>
                <p className='paar'>
                  {phone1} 
                </p>
                <h4 className='elem'> رقم الهاتف الاخر  </h4>
                <p className='paar'>
                  {phone2} 
                </p>
                <h4 className='elem'> الفيديو </h4>
                <iframe
               width="90%"
               height="500px"
               src={youtube}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
             >
             </iframe>                 <br/><br/><br/><br/>
          </div>

    </>
  )
}

export default PlacesElement