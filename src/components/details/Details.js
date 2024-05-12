import React, { useEffect, useState } from 'react'
import "./Details.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
function Details() {
  let {id}=useParams();
  let [state,setState]=useState({});
  const pdata = ()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((productdata)=>{
        setState(productdata.data)
    })
    .catch((errordata)=>{
        alert("error in reciving the data")
    })
  }
  useEffect(()=>{
    pdata();
  },[])
  return (
    <div>
    <div className='details'>
       <div className='detailsimg'>
          <img src={state.image} height={"100%"} width={"100%"}/>
       </div>
       <div className='detailsdiscription'>
          <dl>
            <dt>product name</dt>
            <dd>{state.title}</dd>
            <dt>category</dt>
            <dd>{state.category}</dd>
            <dt>price</dt>
            <dd>{state.price}$</dd>
            <dt>discription</dt>
            <dd>{state.description}</dd>
            <dd>
            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button class="btn btn-success me-md-2" type="button">Buy</button>
              <button class="btn btn-success" type="button">view it later</button>
            </div>
            </dd>
          </dl>
       </div>
    </div>
    </div>
  )
}

export default Details