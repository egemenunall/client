import React from 'react';

const Hakkimda = () => {
  return (
    <div className="bg-gray-50 py-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image/Video Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/cnc-1.jpg" // Replace with your image or video source
              alt="Lazer Optik"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-4">Lorem, ipsum.</h2>
          <p className="text-gray-600 mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, rem saepe, ex deleniti, nesciunt sint odit accusamus optio laudantium ullam natus amet libero cum iure? Dolor quam fugit quasi aspernatur laudantium officia at non, accusamus similique, delectus inventore quod unde sed ratione fugiat commodi quas repellat. Blanditiis consectetur facilis officiis harum aperiam inventore? Perspiciatis ducimus esse voluptates repudiandae dicta voluptatibus eligendi nisi cupiditate? Asperiores debitis obcaecati ipsam repellat modi!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Hakkimda;
