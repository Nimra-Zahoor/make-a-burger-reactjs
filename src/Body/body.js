import React, {useState,useEffect} from 'react'
import './body.css'

function Body() {
  const [Price, setPrice] = useState(0)
  const handleMorePrice = () =>{
  // if(className==='')
    setPrice(Price +5 )
  }
  const handleLessPrice = () =>{
    setPrice(Price - 5 )
  }
  return (
    <div className='all'>
    <div className='upper'></div>
    <div className='ingredients'>No ingredients added</div>
    <div className='lower'> </div>
    <div className='footer'>
    <div className='price'> Current Price: {Price}$ <br/></div>


      Lettuce:
        <button className='less' onClick={handleLessPrice}>Less</button>
      <button className='more' onClick={handleMorePrice}>More</button>
      <br/>

      Bacon:
         <button className='less' onClick={handleLessPrice}>Less</button> <button className='more' onClick={handleMorePrice}>More</button><br/>
      Cheese:
       <button className='less' onClick={handleLessPrice}>Less</button> <button className='more' onClick={handleMorePrice}>More</button><br/>
      Meat:
       <button className='less' onClick={handleLessPrice}>Less</button> <button className='more' onClick={handleMorePrice}>More</button>
    </div>
    </div>
  )
}

export default Body
