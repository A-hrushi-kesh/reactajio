import { useState,useEffect } from "react";
// import { productsdata } from "./productdata";
import { Card } from "./card";
import "./product.css"
import axios from "axios";
function Product()
{

    let [state,setState]=useState([])
    // let[change,setChange]=useState("allc")

    useEffect(()=>{
        getAllProducts()
    },[])

    const getAllProducts = ()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((productdata)=>{
        setState(productdata.data)
        console.log(productdata)
    })
    .catch((errorD)=>{
        console.log(errorD)
        alert("did not get the data")
    })
    }

    const getjeweleryproduct= ()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((productdata)=>{
        setState(productdata.data)
        console.log(productdata)
    })
    .catch((errorD)=>{
        console.log(errorD)
        alert("did not get the data")
    })
    }

    const getelectronicsproduct = ()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((productdata)=>{
        setState(productdata.data)
        console.log(productdata)
    })
    .catch((errorD)=>{
        console.log(errorD)
        alert("did not get the data")
    })
    }
    
    const getmenscolthingproduct= ()=>{
        axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((productdata)=>{
        setState(productdata.data)
        console.log(productdata)
    })
    .catch((errorD)=>{
        console.log(errorD)
        alert("did not get the data")
    })
    }

    const getwomenclothingproduct= ()=>{
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((productdata)=>{
        setState(productdata.data)
        console.log(productdata)
    })
    .catch((errorD)=>{
        console.log(errorD)
        alert("did not get the data")
    })
    }
    // axios.get("https://fakestoreapi.com/products")
    // .then((productdata)=>{
    //     setState(productdata)
    //     console.log(productdata)
    // })
    // .catch((errorD)=>{
    //     console.log(errorD)
    //     alert("did not get the data")
    // })



    // const fp = filterdata();

    // function filterdata (){
    //     if (change == "allc") {
    //         return state;
    //     } else {
    //         return state.filter(function (ele) {
    //             return ele.category == change;
    //         });
    //     }
    // }
    //* <input type="radio" name="catagory" id="allc" onChange={e=>setChange(e.target.id) } defaultChecked/>

    return(
        <div id="abc" className="row">
            {/* <div style={{backgroundColor:"gray", color:"white",paddingLeft:"20px"}}>
                <h2>Products</h2>
                 Number of Products {state.length}
            </div><br/> */}
            
            <div className="col-2  p-3" style={{backgroundColor:"GrayText", color:"whitesmoke"}}>
                <h3>Catagorys</h3>
                <div>
                <div className="ps-4 pt-2" style={{height:"40px"}}>
                    <input class="form-check-input me-2" type="radio" name="catagory" id="electronics"  onChange={getelectronicsproduct} />
                    <label for="electronics" style={{marginRight:"10px"}}>electronics</label>
                </div>
                <div className="ps-4 pt-2" style={{height:"40px"}}>
                    <input class="form-check-input me-2" type="radio" name="catagory" id="men's clothing"  onChange={getmenscolthingproduct}/>
                    <label for="men's clothing"style={{marginRight:"10px"}}>men's clothing</label>
                </div>
                <div className="ps-4 pt-2" style={{height:"40px"}}>
                        <input class="form-check-input me-2" type="radio" name="catagory" id="jewelery" onChange={getjeweleryproduct}/>
                        <label for="jewelery" style={{marginRight:"10px"}}>jewelery</label>
                </div>
                <div className="ps-4 pt-2" style={{height:"40px"}}>
                        <input class="form-check-input me-2" type="radio" name="catagory" id="womens clothing" onClick={ getwomenclothingproduct } defaultChecked />
                        <label for="womens clothing" style={{marginRight:"10px"}}>womens clothing</label>
                </div>
                <div className="ps-4 pt-2" style={{height:"40px"}}>
                        <input class="form-check-input me-2" type="radio" name="catagory" id="allc" onClick={ getAllProducts } defaultChecked />
                        <label for="allc" style={{marginRight:"10px"}}>all</label>
                </div>
                </div>
            </div>
            <div id="efg" className="col-9">
               {
                state.map(function(ele,inx){
                    return <Card props={ele}/>
                })
               }
            </div>
            
        </div>
    );
}
export default Product;