import { Link } from "react-router-dom"
import "./card.css"

export const con=[]
export let price=0
export function Card({props}){

    function add(){
        con.push(props)
        price=price+props.price
    }
    return(
        <div>
            <div class="card mb-3 p-0 row g-0" style={{maxWidth:"350px", height:"300px",fontSize:"11px"}} id="cardmain">
                <div class="row g-0 p-0">
                    <div class="col-4 mt-5 p-2">
                    <img src={props.image} class="img-fluid" alt="..."/>
                    </div>
                    <div class="col-8"  id="cardbody" >
                    <div class="card-body">
                        <p style={{fontSize:"15px",fontWeight:"normal"}}>product id : {props.id}</p>
                        <p style={{fontSize:"13px",fontWeight:"normal"}} class="card-text">product name :{props.title}</p>
                        <p class="card-text">price: {props.price}$</p>
                        <p class="card-text">rating:{props.rating.rate} overall:{props.rating.count}</p>
                        <p class="card-text"><small class="text-body-secondary">catagory:{props.category}</small></p>

                        <button class="btn btn-success  btn-sm me-1 " onClick={add}>add to cart</button>
                       <Link to={`/details/${props.id}`}><button class="btn btn-success  btn-sm m-0" >details</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
