import React , {useState , useEffect}from "react";
import { Nav ,Col, Row , Card} from 'react-bootstrap'
// import { food } from "../Assets/Index";
import {  NavLink } from 'react-router-dom'
import PaginationGroup from "../Components/myPaginationGroup";
import { useNavigate } from "react-router";

const SeriesMedia = () => {
  
  const paginationClick = (link) => {
    // this.setState({ showSpinner: true });

    console.log("link", link);
    let currPage = link;
    if (link === "next") {
      currPage = currentPageNum + 1;
      if (currPage > pagination["pageCount"]) {
        currPage = pagination["pageCount"];
      }
    }
    if (link === "previous") {
      currPage = currentPageNum - 1;
      if (currPage < 1) {
        currPage = 1;
      }
    }
    if (link === "first") {
      currPage = 1;
    }
    if (link === "last") {
      currPage = pagination["pageCount"];
    }

    setCurrentPageNum(currPage);
    alyGetMeals(currPage);
  };
  const [Data, setData] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [pagination, setPagination] = useState({ pageCount: 1 });
  const pageSize = 50;
  const navigation = useNavigate();

  const callSingleProduct = ( _id) => {
    navigation(`/waitseries/?_id=${_id}`);
  };

              useEffect((  )=>{
                const getMeals = async () => {
            fetch(
              `http://hwayadesigns-001-site8.ftempurl.com/api/series?page=${currentPageNum}&pageSize=${pageSize}`
            )
              .then((response) => {
                console.log(response);
                return response.json();
              })
              .then((data) => {
                console.log("dodood", data);
                setData(data.Data);
                setPagination(data.Paging);
                console.log("aly data.Paging", data.Paging);
                console.log("dodoodssss", Data);
              })
              .catch((err) => {
                console.log("Error Reading data " + err);
              });
          }; 

getMeals();

},[])
const alyGetMeals = async (page) => {
  fetch(
    `http://hwayadesigns-001-site8.ftempurl.com/api/series?page=${page}&pageSize=${pageSize}`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("dodood", data);
      setData(data.Data);
      setPagination(data.Paging);
      console.log("aly data.Paging", data.Paging);
      console.log("dodoodssss", Data);
    })
    .catch((err) => {
      console.log("Error Reading data " + err);
    });
};

  return (
    <>
    
     <div className='no'>
        <Nav className="justify-content-center ">
        <Nav.Item>
          <NavLink className="navii" to="/plays">مسرحيات  </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="navii" to="/seriesmedia"> مسلسلات</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="navii" to="/movies"> افلام</NavLink>
        </Nav.Item>
      </Nav>
      <br/>
  </div>

                <h3>مسلسلات </h3>

<div className="listt">
<Row>
        {Data.map((item,index)=>(
             
             <Col lg={3} xs={8} md={6} className="pt-3" key={index}>
             <a className='tit'
              // href="/wait"
              >
             <Card style={{ width: '350px' }}>
             <Card.Img variant="top" src={item.posterImageLink} height="250px" 
             onClick={() =>
              callSingleProduct( item._id)
            }
            style={{cursor:"pointer"}}
            />
             <Card.Title className='tit'> {item.ar_name} </Card.Title>
             </Card>
             </a>
             <br/>
          </Col>
          
            ))}    

</Row>
<br/>
        <PaginationGroup
        btnClicked={paginationClick}
        pageNum={currentPageNum}
        allPages={pagination.pageCount}
      />

</div>
<br/>

    </>
  )
}

export default SeriesMedia