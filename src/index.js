import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Nav from './components/navbar/nav.js';
import Product from './components/product/product.js';
import Cart from './components/cart/Cart.js';

import Signin from './components/signin/signin.js';
import PageNotFound from './pagenotfound/pageNotFound.js';
import Details from './components/details/Details.js';
import Home from './components/home/Home.js';
import Homecard from './components/home/Homecard.js';
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.js"
// function Home(){
//     return(
//         <div></div>
//     );
// }
 
function Assemble(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/Homecard/:catogory" element={<Homecard/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Assemble/>, document.getElementById("root"));