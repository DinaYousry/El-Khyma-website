import React , {useState , useEffect}from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const ListMedia = ({ title , url, API }) => {

    const [Data, setData] = useState([])
    const navigation = useNavigate();

    const callSingleProduct = (youtubeUrl, ar_name) => {
      navigation(`/movie/?youtubeUrl=${youtubeUrl}&ar_name=${ar_name}`);
    };
  const callSingleSerie = ( _id) => {
    navigation(`/waitseries/?_id=${_id}`);
  };
  
    useEffect((  )=>{
             const getMeals = async () => {
  
        fetch(API).then(response => {
          console.log(response);
          return response.json();
        }).then(data => {
          console.log("dodood",data);
          setData(data.Data)
          console.log("dodoodssss",Data);
  
        }).catch(err => {
          console.log("Error Reading data " + err);
        });
      };  
  
      getMeals();
  
    },[])

    
  return (
    <>
    
     <Row>
    <Col xs={6} lg={6} md={6} style={{color:"#981916" , textAlign:"left" , fontSize:"24px"}}>
    <p > <Link to={url} className='bi' >   .... المزيد</Link></p>
    </Col>
    <Col xs={6} lg={6} md={6} style={{color:"#981916" , textAlign:"right" , fontSize:"24px"}}>
      <p className='para'>{title} </p>
    </Col>
  </Row>


      {/* <div className="flip"> */}
        {/* <p className="parlist">
          <Link to={url}>{title}</Link>{" "}
        </p> */}
        
        <div className="listt">
        <Row>

          {Data.map((item,index) =>(
         

            <Col lg={3} xs={12} md={6} className="pt-3" key={index}>
              <a 
              // href={link} 
              className="tit">
                <Card style={{ width: "350px" ,cursor:"pointer" }}
                >
                  {item.categoryId=== "3" ? <Card.Img style={{ cursor:"pointer" }} variant="top" src={item.posterImageLink} height="250px" 
                  onClick={() => callSingleSerie( item._id )} 
                  /> 
                  :
                  // item.Image ? <Card.Img style={{ cursor:"pointer" }} variant="top" src={item.Image}  height="250px"
                  //  onClick={() =>callSingleProduct(item.youtubeUrl, item.ar_name)} 
                  //  /> 
                  //  :
                  // item.images ?<Card.Img style={{ cursor:"pointer" }} variant="top" src={item.images}  height="250px" 
                  // onClick={() =>callSingleProduct(item.youtubeUrl, item.ar_name)}
                  // /> 
                  // :
                  <Card.Img variant="top" src={item.posterImageLink}  height="250px" 
                  onClick={() =>callSingleProduct(item.youtubeUrl, item.ar_name)}
                  />
                  }

                  <Card.Title className="tit">{item.ar_name}<span style={{color:"grey" , fontSize:"10px"}}>{item._id}</span></Card.Title> 
                </Card>
              </a>
              <br/>
            </Col>

                    ))}
        </Row>

        </div>
      {/* </div> */}

    </>
  )
}

export default ListMedia