import React , {useState , useEffect}from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const ListCategory = ({ title , url, link, API }) => {
  
  const [Data, setData] = useState([])
  const navigation = useNavigate();

  const callSingleProduct = (name , singleImage , recipe ,videos) => {
    navigation(`/foodelement/?name=${name}&singleImage=${singleImage}&recipe=${recipe}&videos=${videos}`);
  };
  const callSingleSerie = ( name , image , brief ,video ,time , crew , id) => {
    navigation(`/serieselement/?name=${name}&image=${image}&brief=${brief}&video=${video}&time=${time}&crew=${crew}&id=${id}`);
  };
  const callSingleInfo = (name , Image , facebookUrl ,url) => {
    navigation(`/infoelement/?name=${name}&Image=${Image}&facebookUrl=${facebookUrl}&url=${url}`);
  };
  const callSinglePlace = ( name ,images ,description, address, video ,phone1 ,phone2 ,email) => {
    navigation(`/placeselement/?name=${name}&images=${images}&description=${description}&address=${address}&video=${video}&phone1=${phone1}&phone2=${phone2}&email=${email}`);
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
      <div className="flip">
        <p className="parlist">
          <Link to={url}>{title}</Link>{" "}
        </p>
        
        <div className="lis">
        <Row>

          {Data.map((item,index) =>(
         

            <Col lg={3} xs={12} md={6} className="pt-3" key={index}>
              <a 
              // href={link}
               className="tit">
                <Card style={{ width: "350px",cursor:"pointer" }}
                // onClick={() => callSingleInfo(item.name , item.Image , item.facebookUrl ,item.url,)}
                >
                  {item.singleImage ? <Card.Img style={{ cursor:"pointer" }} variant="top" src={item.singleImage}  height="250px" 
                 onClick={() => callSingleProduct(item.name , item.singleImage , item.recipe ,item.videos)} /> :
                  item.Image ? <Card.Img style={{ cursor:"pointer" }} variant="top" src={item.Image}  height="250px" 
                  onClick={() => callSingleInfo(item.name , item.Image , item.facebookUrl ,item.url)}
                  /> :
                  item.phone1 ?<Card.Img style={{ cursor:"pointer" }} variant="top" src={item.images}  height="250px" 
                  onClick={() => callSinglePlace(item.name , item.images ,item.description, item.address, item.video ,item.phone1 ,item.phone2 ,item.email)}
                  /> :
                  <Card.Img style={{ cursor:"pointer" }} variant="top" src={item.image}  height="250px" 
                  onClick={() => callSingleSerie(item.name , item.image , item.brief ,item.video ,item.time , item.crew , item.id)}/>
                  }
                  
                  <Card.Title className="tit">{item.name}</Card.Title>
                </Card>
              </a>
            </Col>

                    ))}
        </Row>

        </div>
      </div>

      <br />
    </>
  );
};

export default ListCategory;
