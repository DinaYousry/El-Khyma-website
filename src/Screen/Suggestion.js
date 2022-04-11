import React , {useState , useEffect}from "react";
import ListCategory from '../Components/ListCategory'
// import ListMedia from '../Components/ListMedia'
import { Card , Col ,Row , } from 'react-bootstrap'
import { useNavigate } from "react-router";

const Suggestion = () => {

  const navigation = useNavigate();
  const [Data, setData] = useState([])

  const callSingleProduct = (youtubeUrl, ar_name) => {
    navigation(`/movie/?youtubeUrl=${youtubeUrl}&ar_name=${ar_name}`);
  };

  useEffect((  )=>{
    const getMeals = async () => {

                 fetch("http://hwayadesigns-001-site8.ftempurl.com/api/MainContentSuggestion").then(response => {
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
    <div>
         <br /><br />

       <ListCategory
        title={"تاكل ايه ؟"}
        url={"/food"}
        link={"foodelement"}
        // Meal={Meal.Data}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Places/MealsSuggestion"}
      />
      <br />
      {/* <ListCategory
        title={"تشوف ايه ؟"}
        url={"/movie"}
        link={"series"}
        API={"http://khyma.azurewebsites.net/api/MainContentSuggestion"}
      /> */}
            {/* <ListMedia
        title={"مسلسلات "}
        url={"/seriesmedia"}
        link={"waitseries"}
        API={"http://khyma.azurewebsites.net/api/MainContentSuggestion"}
      /> */}

      <>
      <div className="flip">
        <p className="parlist">
          {/* <Link to="/seriesmedia"> */}
            تشوف ايه ؟
          {/* </Link>{" "} */}
        </p>
        
        <div className="lis">
        <Row>

          {Data.map((item,index) =>(
         

            <Col lg={3} xs={12} md={6} className="pt-3" key={index}>
              <a 
              // href={link}
               className="tit">
                <Card style={{ width: "350px",cursor:"pointer" }}
                onClick={() =>callSingleProduct(item.youtubeUrl, item.ar_name)}
                >
              
                  <Card.Img style={{ cursor:"pointer" }} variant="top" src={item.posterImageLink}  height="250px" />
                  
                  <Card.Title className="tit">{item.name}</Card.Title>
                </Card>
              </a>
            </Col>

                    ))}
        </Row>

        </div>
      </div>
      </>

      <br />
      <ListCategory
        title={"تخرج فين ؟"}
        url={"/places"}
        link={"placeselement"}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Places/PlacesSuggestion"}
      />
      <br />
      {/* <ListCategory
        title={"معلومة ع السريع"}
        url={"info"}
        link={"infoelement"}
        API={"http://hwayadesigns-001-site2.itempurl.com/api/Article/List?pageNo=1&pageSize=4"}
      /> */}
    </div>
  )
}

export default Suggestion