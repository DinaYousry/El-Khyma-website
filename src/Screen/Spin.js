import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const Spin = () => {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const data = [
        { option: '0'},
        { option: '1' },
        { option: '2'},
        { option: '3'},
        { option: '4'},
        { option: '5'} ,
        { option: '6'},
        { option: '7' },
          ]
      
      const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        setPrizeNumber(newPrizeNumber)
        console.log("num " ,prizeNumber )
        setMustSpin(true)
      }
    
  return (
<>


    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      backgroundColors={['#d65601', '#e7e5e3']}
      textColors={['#ffffff' , '#000000']}
      radiusLineWidth={"1"}
      outerBorderWidth	={"20"}
      innerRadius={"4"}
      innerBorderWidth	={"10"}
      onStopSpinning={() => {
        setMustSpin(false);
      }}

    />


   <button onClick={handleSpinClick}>SPIN</button>


  </>
  
  )
}

export default Spin