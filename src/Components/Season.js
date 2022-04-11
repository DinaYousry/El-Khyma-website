import React , {useState , useEffect}from "react";
import { Col, Row , Card} from 'react-bootstrap'
// import { food } from "../Assets/Index";
import { useNavigate } from "react-router";

const Season = () => {

  const _id = new URLSearchParams(document.location.search).get("_id");
  const ar_name = new URLSearchParams(document.location.search).get("ar_name");
  const serieName = new URLSearchParams(document.location.search).get("serieName");

  console.log("_id",_id )
  console.log("ar_name",ar_name )
  console.log("serieName",serieName )

  const [data, setData] = useState([])
  const navigation = useNavigate();

  const callSingleSerie = ( ar_name , youtubeUrl) => {
    navigation(`/movie/?ar_name=${ar_name}&youtubeUrl=${youtubeUrl}`);
  };

             useEffect((  )=>{
               const getMeals = async () => {
           
           fetch(`http://hwayadesigns-001-site8.ftempurl.com/api/episodes/series/season/${_id}`).then(response => {
            console.log(response);
            return response.json();
           }).then(data => {
            console.log("dodood",data);
            setData(data)
            console.log("dodoodssss",data);
            console.log("dodoodssss",data);
           
           }).catch(err => {
            console.log("Error Reading data " + err);
           });
           };  
           
           getMeals();
           
           },[])
           

  return (
    <>
        <h3>{serieName } : {ar_name}</h3>
        <div className='flip'>
        <div className="list">
        <Row>
        {data.map((item,index) =>(
         <Col lg={3} xs={12} md={6} className="pt-3">
          <a 
          // href="/movie"
           className="tit">
               <>
               <br/>
            <Card style={{ width: "auto" , cursor:"pointer" }} key={index}
            onClick={() => callSingleSerie( item.ar_name ,item.youtubeUrl )}
            >
            {/* <Card.Img variant="top" src={food} height="auto" /> */}
            <Card.Title className="tit">{item.ar_name}</Card.Title>
          </Card>
          <br/>
          </>
         
          </a>
        </Col>
            ))}
        </Row>
        </div>
        </div>

    </>
  )
}

export default Season