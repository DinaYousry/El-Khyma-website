import React , {useState , useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';

const Prays = () => {

   const [Data  , setData  ] = useState([])

              useEffect((  )=>{

                    const getPrays = async () => {
                      navigator.geolocation.getCurrentPosition(function(position) {
                        console.log("Latitude is :", position.coords.latitude);
            
                        console.log("Longitude is :", position.coords.longitude);
                  
                    
      
                      let test = new Date();
                          let dateMDY = `${test.getFullYear()}-${
                            test.getMonth() + 1
                          }-${test.getDate()}`;
                          console.log(dateMDY);


                  fetch(`http://hwayadesigns-001-site2.itempurl.com/api/PrayerTimes?date=${dateMDY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&TimeZone=Egypt Standard Time`).then(response => {
                  console.log(response);
                  return response.json();
                  }).then(data => {
                  console.log("dodood",data);
                  setData(data)
                  console.log("dodoodssss",Data);
                  
                  }).catch(err => {
                  console.log("Error Reading data " + err);
                  });})
                  };  

                  // navigator.geolocation.getCurrentPosition(onSuccess , onError )

                  getPrays();
                  
                  },[])

                  let test = new Date();
                  let dateMDY = `${test.getFullYear()}-${
                    test.getMonth() + 1
                  }-${test.getDate()}`;



  return (
    <>
    <br/>
         <h2 style={{color:"#981916" , fontWeight:"800"}}>مواقيت الصلاة </h2>
         <br/><br/><br/>
      <div className='pray'>
         <p>مواقيت الصلاة بموقعك الحالي</p>
         <p>برجاء ادخل موقعك الحالي لاظهار مواقيت الصلاة </p><br/><br/><br/>

         <p>  {dateMDY} : مواعيد الصلاة في تاريخ اليوم الموافق   </p>

         </div>     
         <br/><br/><br/>
         <div className='flip'>

         <div className='blockpray'> 
              <Row>
                <Col lg={2} xs={6} md={6} className='mt-3 mb-3'>
                 <p>الفجر</p>
                 <p>{Data.Fajr}</p>
                </Col>
                <Col lg={2} xs={6} md={6} className='mt-3 mb-3'>
                 <p>الشروق</p>
                 <p>{Data.Sunrise}</p>
                </Col>
                <Col lg={2} xs={6} md={6} className='mt-3 mb-3'>
                 <p>الظهر</p>
                 <p>{Data.Dhuhr}</p>
                </Col>
                <Col lg={2} xs={6} md={6} className='mt-3 mb-3'>
                 <p>العصر</p>
                 <p>{Data.Asr}</p>
                </Col>
                <Col lg={2} xs={6} md={6} className='mt-3 mb-3'>
                 <p>المغرب</p>
                 <p>{Data.Maghrib}</p>
                </Col>
                <Col lg={2} xs={6} md={6} className='mt-3 mb-3'>
                 <p>العشاء</p>
                 <p>{Data.Isha}</p>
                </Col>

              </Row>
              </div>

         </div>
    </>
  )
}

export default Prays