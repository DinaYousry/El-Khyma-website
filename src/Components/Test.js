import React , {useState , useEffect}from "react";

const Test = () => {
    const [Data, setData] = useState([])
    const [Dataa, setDataa] = useState([])
  
    // const Data = [{
    //     name: 'James',
    //     country: 'Chile',
    //   }];

    //   const Dataa = [{
    //     name: 'reeeel',
    //     country: 'beeee',
    //   }];
    useEffect((  )=>{
        const getMeals = async () => {
    
    fetch(`http://hwayadesigns-001-site8.ftempurl.com/api/seasons/serie/419`).then(response => {
     console.log(response);
     return response.json();
    }).then(data => {
     console.log("dodood",data);
     setData(data)
     console.log("seasons num",Data);
    
    }).catch(err => {
     console.log("Error Reading data " + err);
    });
    // getdata();
    };  
    
    getMeals();
    getdata();

    },[])

    const getdata = () => {
              
        fetch(`http://hwayadesigns-001-site8.ftempurl.com/api/series/419`).then(response => {
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
    <div>
        {Data.map((item)=>(
            <>
            <p>{item.ar_name}</p>
            {/* <p>{item.country}</p> */}
            </>
        ))}

        <br/>

        {Dataa.map((item)=>(
            <>
            <p>{item.actors}</p>
            <p>{item.country}</p>
            </>
        ))}

    </div>
  )
}

export default Test