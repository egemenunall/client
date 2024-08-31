import React from 'react';
import { Navbar, Footer, ProductContent } from "../components"

const ProductContentPage = ({products}) => {
  console.log(products)
  
  return (
    <div>
      <Navbar />
      <ProductContent products={products}/>       
      <Footer />
    </div>
  )
}

export default ProductContentPage