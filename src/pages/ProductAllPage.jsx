import React from 'react'
import { Footer, Navbar, Products } from '../components'

function ProductAllPage({products}) {
  return (
    <div>
        <Navbar/>
        <Products products={products}/>
        <Footer/>
    </div>
  )
}

export default ProductAllPage