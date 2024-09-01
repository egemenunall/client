import { Homepage, ProductContentPage } from "./pages";
import {Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch'
import AboutPage from "./pages/AboutPage";
import ProductAllPage from "./pages/ProductAllPage";


export default function App() {
  let {loading, data, error} =useFetch('https://my-project-app-hndk.onrender.com/api/products?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>


  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage products={data?data:""} />}></Route>
        <Route path='/product/:id' element={<ProductContentPage  products={data?data:""}/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/products" element={<ProductAllPage products={data?data:""} />}></Route>
      </Routes>
    </div>
  
  )
}