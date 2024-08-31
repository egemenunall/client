import React from 'react';
import { Navbar, Products, Footer } from "../components"
import ProductSlider from '../components/Slider';
import Service from '../components/Service';
import About from '../components/About';
import { Element } from 'react-scroll';

const Homepage = ({products}) => {


  return (
    <div>
      <Navbar />

      <ProductSlider  />
      <Element name="services">
      <Service/>
      </Element>
      <Element name="product">
      <Products products={products} />
      </Element>
      <About/>    
      <Element name="contact">
      <Footer />
      </Element> 
    </div>
  )
}

export default Homepage