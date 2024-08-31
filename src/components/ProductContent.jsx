import React from 'react';
import { useParams } from 'react-router-dom';


const ProductContent = ({products}) => {
    console.log("Product Object")

    const {id}=useParams()


    let product={}
    console.log(product)
    if(product){
            let arr = products.data.filter(product=> product.attributes.productId == id)
            product=arr[0]

    }else{
        product={}
    }




  return ( 
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2 '>
                    <img className='h-56 w-full object-cover' src={`http://localhost:1337${product.attributes.productIMG.data.attributes.url}`} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{product.attributes.productName}</h1>
                    <p>{product.attributes.productLongDesc}</p>
                    

                </div>

                
                


            </div>

        </div>
    </div>



    


  )
}

export default ProductContent