import React , {useState ,useEffect} from 'react'
// import { food , places , series} from '../Assets/Index';
import {Card , Col ,Row  } from 'react-bootstrap'
import { useNavigate } from "react-router";

const Info = () => {
  
  const [Data, setData] = useState([])
  const navigation = useNavigate();

  const callSingleInfo = (name , Image , facebookUrl ,url) => {
    navigation(`/infoelement/?name=${name}&Image=${Image}&facebookUrl=${facebookUrl}&url=${url}`);
  };

              useEffect((  )=>{
                const getMeals = async () => {
            
            fetch(`http://hwayadesigns-001-site2.itempurl.com/api/Article/List?pageNo=1&pageSize=7`).then(response => {
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
           <Col lg={6} xs={8}>
             <br/>
           </Col>
           <Col lg={6} xs={4}>
           <br/>
           <h3 style={{color:"#df403e" , textAlign:"right" , paddingRight:"10%"}}>   معلومة ع السريع </h3>
           </Col>
         </Row>
         
         <br/>
        <div className='flip'>
        <div className='lis'>
        <Row>
        {Data.map((item,index)=>(

            <Col lg={3} xs={8} md={6} className="pt-3" key={index}>
            <a className='tit' 
            // href="/foodelement"
            >
            <Card style={{ width: '350px' , cursor:"pointer" }}
            onClick={() => callSingleInfo(item.name , item.Image , item.facebookUrl ,item.url)}
            >
            <Card.Img variant="top" src={item.Image} height="250px" />
            <Card.Title className='tit'> {item.name} </Card.Title>
            </Card>
            </a>
            <br/>
            </Col>
            
            ))}

     
    </Row>
</div>
</div>


    </>
  )
}

export default Info