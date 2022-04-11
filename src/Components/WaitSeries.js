import React , {useState , useEffect}from "react";
// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";

const WaitSeries = () => {

  const _id = new URLSearchParams(document.location.search).get("_id");

  console.log("_id",_id )

  const [Data, setData] = useState([])
  const [Dataa, setDataa] = useState([])
  const navigation = useNavigate();

  const callSingleSerie = ( _id , ar_name , serieName) => {
    navigation(`/season/?_id=${_id}&ar_name=${ar_name}&serieName=${serieName}`);
  };

           useEffect((  )=>{
                  const getMeals = async () => {
              
              fetch(`http://hwayadesigns-001-site8.ftempurl.com/api/seasons/serie/${_id}`).then(response => {
               console.log(response);
               return response.json();
              }).then(data => {
               console.log("dodood",data);
               setData(data)
               console.log("seasons num",Data);
              
              }).catch(err => {
               console.log("Error Reading data " +  err);
              });
              getdata();
              };  
              
              getMeals();

              },[])

              const getdata = () => {
              
                fetch(`http://hwayadesigns-001-site8.ftempurl.com/api/series/${_id}`).then(response => {
                 console.log(response);
                 return response.json();
                }).then(data => {
                 console.log("dodood",data);
                 setDataa(data)
                 console.log("data actor brief",Dataa);
                
                }).catch(err => {
                 console.log("Error Reading data " + err);
                });
                };  
                
  return (
    <>
           <div className='flip' >

           <br/>
<>
              <h4 className='elem'> الممثلين</h4>
              <p className='paari' key={_id}>
                 {Dataa.actors }
                 </p>

 </>
           
              <br/>
              <h4 className='elem'>الوصف  </h4> 
              <p className='paari'>
                 {Dataa.brief }
                 </p>

           
               <br/> <br/> <br/>
              <>
              {Data?.map((item )=>(
                <>
              {/* <Link to="/season" key={item.ar_name}> */}
              {" "}
              <button className="butoo" key={item.ar_name} onClick={() => callSingleSerie( item.genre._id ,item.ar_name ,item.serieName )}> {item.ar_name} </button>
             {/* </Link> */}
               <br/><br/>
               </>
              ))}
           </>
           </div>

    </>
  )
}

export default WaitSeries