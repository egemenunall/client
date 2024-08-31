import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products}) => {
  console.log("product Object", products);

  if (!products || !products.data) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className='w-full bg-[#f9f9f9] py-16 sm:py-32'>
      <div className='max-w-[1240px] mx-auto px-4'>
      <h1 className='text-5xl font-bold  pb-12 text-center'>ÜRÜNLER</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {products.data.map((product) => (
            <Link 
              key={product.attributes.productId} 
              to={`/product/${product.attributes.productId}`}
              className="block transform transition duration-300 hover:scale-105"
            >
              <div className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg'>
                <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
                  <img 
                    src={`http://localhost:1337${product.attributes.productIMG.data.attributes.url}`}
                    alt={product.attributes.productName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className='p-4 sm:p-6'>
                  <h3 className='font-bold text-xl sm:text-2xl mb-2 line-clamp-1'>{product.attributes.productName}</h3>
                  <p className='text-gray-600 text-sm sm:text-base line-clamp-2'>{product.attributes.productDesc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;