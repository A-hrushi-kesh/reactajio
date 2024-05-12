import React from 'react'
// import { con,price } from '../product/card'

export function Cartcard({props}) {
    // function newcart(){
    //     con.pop()
    //     let op=props.price
    //     price=price-op

    // }
  return (
    <div className='row g-1 mt-4'>
        <div class="card mb-3" style={{maxWidth:"80%",maxHeight:"400px", margin:"1px auto"}}>
            <div class="row g-0">
                    <div class="col-md-4 m-3" style={{height:"150px", width:"100px"}}>
                    <img src={props.image} class="img-fluid" alt="..."/>
                    </div>
                    <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.category}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                    <div class="col-md-2">
                        {/* <button className='btn btn-danger mt-5 ms-5' onClick={newcart}>remove</button> */}
                    </div>
                    <div class="col-md-1 mt-5">
                        <p className='bg-primary text-white rounded'>{props.price}$</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Cartcard