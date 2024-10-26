import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Banner Section */}
      <div className="relative w-full h-96">
        <Image 
          src="/SaleBanner.png" 
          alt="Shop Banner" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg" 
        />
      </div>
      
      {/* Section */}
      <section className='py-10'>
        <div className="relative w-full h-64">
          <Image
            src="/Shopp.png"
            alt="Random"
            layout="fill" // Keep this to make the image fill its parent
            objectFit="cover" // Ensure the image covers the parent area
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Shop;
