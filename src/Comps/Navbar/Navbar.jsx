import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
    const [menu,setMenu] = useState("shop")


    const {getTotalCartItems} = useContext(ShopContext)



  return (
    <div className="navbar">
      <div className="nav-logo">
       <Link to='/'> 
       <img src={logo} alt="" />
       </Link> 
       <Link to='/' style={{textDecoration:'none'}}> 
     
        <p className="abcd my-3">HimShop</p>
       </Link> 
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'black'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none', color:'black'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none', color:'black'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
      </ul>
     
      <div className="nav-login-cart">
      <Link to='/login'>
        <button>Login</button>
        </Link>
       
        <Link to='/cart'>
          <img src={cart_icon} alt="" />
          </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
