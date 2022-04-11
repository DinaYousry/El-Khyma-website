import React from 'react'
import { Link } from 'react-router-dom'

const WaitPage = () => {
  return (
    <>
       <div className='flip' >

           <br/>
              <h4 className='elem'> الممثلين</h4>
              <p className='paari'>
                 اسماء الممثلين   
              </p>

              <br/>
              <h4 className='elem'>الوصف  </h4>
              <p className='paari'>
                 الوصف   
              
              </p>

              <br/>
              <h4 className='elem'>التقييم   </h4>
              <p className='paari'>
                تقييم
              </p>

              <br/>
              <Link to="/movie">
            {" "}
            <button className="butoo"> شاهد الان </button>
          </Link>

         </div>
    </>
  )
}

export default WaitPage