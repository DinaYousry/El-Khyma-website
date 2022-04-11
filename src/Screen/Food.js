import React , {useState ,useEffect} from 'react'
// import { food , places , series} from '../Assets/Index';
import {Card , Col ,Row  } from 'react-bootstrap'
import PaginationGroup from "../Components/myPaginationGroup";
import { useNavigate } from "react-router";

const Food = () => {

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
  const [allData, setAllData] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [pagination, setPagination] = useState({ pageCount: 1 });
  const pageSize = 40;
  const navigation = useNavigate();

  const callSingleProduct = ( name , singleImage , recipe ,videos ) => {
    navigation(`/foodelement/?name=${name}&singleImage=${singleImage}&recipe=${recipe}&videos=${videos}`);
  };

              useEffect((  )=>{
                const getMeals = async () => {
            
            fetch(`http://hwayadesigns-001-site2.itempurl.com/api/Meals/List?pageNo=${currentPageNum}&pageSize=${pageSize}`)
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log("dodood", data);
              setData(data.Data);
              setAllData(data.Data);
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
    `http://hwayadesigns-001-site2.itempurl.com/api/Meals/List?pageNo=${page}&pageSize=${pageSize}`
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

async function search(key) {
  console.warn(key);

  let result = await fetch(
    `http://hwayadesigns-001-site2.itempurl.com/api/Meals/ListSearch?pageNo=1&pageSize=10&search=${key}`
  );
  result = await result.json();
  setData(result.Data);
}

  return (
    <>

         <Row>
           <Col lg={6} xs={8}>
             <br/>
           <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      search(e.target.value);
                    } else {
                      setData(allData);
                      //  setDataa(allDataa);
                    }
                  }}

                />
                <label className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </label>
             </div>
           </Col>
           <Col lg={6} xs={4}>
           <br/>
           <h3 style={{color:"#df403e" , textAlign:"right" , paddingRight:"10%"}}>  تاكل ايه ؟</h3>
           </Col>
         </Row>
         
         <br/>
        {/* <div className='flip'> */}
        <div className='listt'>
        <Row>
          {Data.map((item,index)=>(

                    <Col lg={3} xs={8} md={6} className="pt-3" key={index}>
                    <a className='tit'
                    //  href="/foodelement"
                     >
                    <Card style={{ width: '350px', cursor:"pointer"  }}>
                 <Card.Img variant="top" src={item.singleImage} height="250px" 
                     onClick={() =>
                      callSingleProduct( item.name  , item.singleImage , item.recipe, item.videos )
                      }
                  />
                 <Card.Title className='tit'> {item.name} </Card.Title>
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

{/* </div> */}

</div>


    </>
  )
}

export default Food