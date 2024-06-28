import { useContext } from "react"
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Comps/Breadcrums/Breadcrum";
import ProductDisplay from "../Comps/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Comps/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Comps/RelatedProducts/RelatedProducts";



const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
   <>
   <Breadcrum product={product}/>
   <ProductDisplay product={product}/>
   <DescriptionBox/>
   <RelatedProducts/>
   </>
  )
}

export default Product
