import Navbar from "./Comps/Navbar/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Comps/Footer/Footer"
import men_banner from './Comps/Assets/banner_mens.png'
import women_banner from './Comps/Assets/banner_women.png'


function App() {
  



  return (
    <>
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="product" element={<Product/>} >
          <Route path=":productId" element={<Product/>}/>

      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
