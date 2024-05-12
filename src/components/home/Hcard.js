import React from 'react'
import { Link } from 'react-router-dom'
function Hcard({props}) {

  return (
    <div>
        <div class="card m-4 p-5" style={{maxWidth:"300px"}}>
          <img  src={props.image} class="card-img-top" alt="..." height={"200px"} width={"300px"}/>
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.price}$</p>
            <p class="card-text"><small class="text-body-secondary">rating:{props.rating.rate} overall:{props.rating.count}</small></p>
            <Link to={`/details/${props.id}`}><button class="btn btn-success  btn-sm m-0" >details</button></Link>
          </div> 
      </div>
    </div>
  )
}

export default Hcard