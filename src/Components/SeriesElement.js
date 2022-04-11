import React , {useState , useEffect}from "react";
import { Col, Row ,Card} from 'react-bootstrap';

const SeriesElement = () => {

  const name = new URLSearchParams(document.location.search).get("name");
  const image = new URLSearchParams(document.location.search).get("image");
  const brief = new URLSearchParams(document.location.search).get("brief");
  const video = new URLSearchParams(document.location.search).get("video");
  // const time = new URLSearchParams(document.location.search).get("time");
  const crew = new URLSearchParams(document.location.search).get("crew");
  const id = new URLSearchParams(document.location.search).get("id");

  // var youtube= `${youtubeUrl}`.replace("","https://www.youtube.com/embed/");
  var youtube= (`https://www.youtube.com/embed/${video}`);
  console.log("youtube",youtube )
  console.log("image",image )
  console.log("name",name )
  console.log("brief",brief )
  console.log("video",video )
  // console.log("time",time )
  console.log("crew",crew )
  console.log("id",id )

  const [actors, setActors] = useState([])
  const [timet, setTimet] = useState([])

          useEffect((  )=>{
            const getMeals = async () => {
        
        fetch(`http://hwayadesigns-001-site2.itempurl.com/api/Series/${id}`).then(response => {
         console.log(response);
         return response.json();
        }).then(data => {
         console.log("dodood",data);
         setActors(data.actors)
         setTimet(data.channelSeries)
         console.log("dodoodssss",actors);
         console.log("dodoodssss",actors);

        }).catch(err => {
         console.log("Error Reading data " + err);
        });
        };  
        
        getMeals();
        
        },[])

  return (
    <>
        <div className='flip' style={{backgroundColor:"black"}}>

        <br/>
           <h2 className='elem'> {name}</h2>
           <br/>
           <img src={image} alt="no" height="800px" width="80%"/><br/><br/>
           <h4 className='elem'>الوصف  </h4>
           <p className='paar'>
              {brief}   
           
           </p>
           <h4 className='elem'>طاقم العمل   </h4>
           {/* <p className='paar'>
           </p> */}
           <Row>
             {actors.map((item,index)=>(
               <>
               <Col lg={4} xs={6} md={6} className="pt-3" style={{paddingRight:"4%"}} key={index}>
               <Card style={{ width: '350px', color:"white" , backgroundColor:"black" }}>
                    <Card.Img variant="top" src={item.image} height="250px" />
                    <Card.Title>{item.name}</Card.Title>
                  </Card>
               </Col>
               </>
             ))}
             </Row>

             <br/>
           <h4 className='elem'> مواعيد العرض  </h4>
           <Row>
           {timet.map((item,index)=>(
            <>
              <Col lg={3} xs={6} md={6} className="pt-3" style={{paddingRight:"4%"}} key={index}>
              
             <img src={item.logo} width="60%" height={"100px"}/>
          
            </Col>
            <Col lg={2} xs={6} md={6} className="pt-3" style={{paddingRight:"4%"}} key={index}>
              <p className='paar'>
             كل يوم
           </p>
            </Col>
           <Col lg={2} xs={6} md={6} className="pt-3" style={{paddingRight:"4%"}} key={index}>
              <p className='paar'>
             {item.time1}
           </p>
            </Col>
               <Col lg={2} xs={6} md={6} className="pt-3" style={{paddingRight:"4%"}} key={index}>
                <p className='paar'>
                {item.time2}
                 </p>
         
               </Col>
           <Col lg={2} xs={6} md={6} className="pt-3" style={{paddingRight:"4%"}} key={index}>
           <p className='paar'>
          {item.time3}
        </p>
         </Col>
         <br/>
           </>      
             ))}

           </Row>
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
             </iframe>
            <br/><br/><br/><br/>
           </div>
    </>
  )
}

export default SeriesElement