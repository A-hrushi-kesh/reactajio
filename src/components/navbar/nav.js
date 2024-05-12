import { Link } from "react-router-dom";
import "./nav.css"
function Nav(){
    return(
        <div id="all">
            <div id="col1"><Link to="/">A J I O</Link></div>
            <div id="col2">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    );
}
export default Nav;