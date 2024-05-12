import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hcard from './Hcard'
import { useState } from 'react'
import axios from 'axios'
import "./Homecard.css"
function Homecard() {
  let [state,setState]=useState([])
  const{catogory}=useParams()
  
  useEffect(()=>{
    data();
  },[])
  const data= ()=>{
    axios.get(`https://fakestoreapi.com/products/category/${catogory}`)
    .then((productdata)=>{
        setState(productdata.data)
        console.log(productdata)
    })
    .catch((errorD)=>{
        console.log(errorD)
        alert("did not get the data")
    })
  }
  return (
    <div>
      <h3 className='mt-4 ms-4'>{catogory}</h3>
        <div className='Homecards'>
          {
            state.map(function(ele,inx){
              return <Hcard props={ele}/>
            })
          }
      </div>
    </div>
    
  )
}

export default Homecard