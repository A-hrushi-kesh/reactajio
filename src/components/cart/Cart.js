import React, { useState } from 'react'
import Cartcard from './cartcard'
import { con , price } from '../product/card'


function Cart() {
  const[Total,setTotal]=useState(price)
    function display(){
        if(con.length===0)
            return <h1>cart is empty</h1>
        else{
           return con.map(function(el,inx){
                return <Cartcard props={el}/>
            })
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 className='' style={{textAlign:"center", backgroundColor:"gray"}}>Cart</h1>
      {
        display()
      }
      <div>
        <h2 className='bg-success text-white'>total:{Total}$</h2>
      </div>
    </div>
  )
}

export default Cart