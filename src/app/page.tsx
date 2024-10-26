import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
        {/* Banner Section */}
        <div className="relative w-full h-96">
        <Image 
          src="/Mask Group.jpg" 
          alt="Hero Banner" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg" 
        />
      </div>

      {/* 1st Section */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold ">Browse the Range</h2>
        <p className='text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <br />
        <div className="flex justify-center gap-8">
          {/* Dining Section */}
          <div className="flex flex-col items-center">
            <Image src="/Section1.png" alt="s1.1" width={300} height={200} className="object-cover" />
            <h3 className="mt-2 text-lg font-semibold">Dining</h3>
          </div>

          {/* Living Section */}
          <div className="flex flex-col items-center">
            <Image src="/Section1.2.png" alt="s1.2" width={300} height={300} className="object-cover" />
            <h3 className="mt-2 text-lg font-semibold">Living</h3>
          </div>

          {/* Bedroom Section */}
          <div className="flex flex-col items-center">
            <Image src="/Section1.3.png" alt="s1.3" width={300} height={200} className="object-cover" />
       <h3 className="mt-2 text-lg font-semibold">Bedroom</h3>
          </div>
        </div>
      </section>
          {/* Our Products Section */}
          <section className="py-10">
        <h2 className="text-center text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
          <Image src="/Product1.png" alt="Product 1" width={400} height={200} className="object-cover"/>
          <Image src="/product2.png" alt="Product 2" width={400} height={200} className="object-cover"/>
          <Image src="/Product3.png" alt="Product 3" width={400} height={200} className="object-cover"/>
          <Image src="/Product4.png" alt="Product 4" width={400} height={200} className="object-cover"/>
          <Image src="/product5.png" alt="Product 5" width={400} height={200} className="object-cover"/>
          <Image src="/Products6.png" alt="Product 6" width={400} height={200} className="object-cover"/>
          <Image src="/product7.png" alt="Product 7" width={400} height={200} className="object-cover"/>
          <Image src="/product8.png" alt="Product 8" width={400} height={200} className="object-cover"/>
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
            See More
          </button>
        </div>
      </section> 

      {/* Section */}
      <section className='py-10'>
        <div className="relative w-full h-96">
          <Image
            src="/inspo.png"
            alt="Random"
            layout="fill" // Keep this to make the image fill its parent
            objectFit="cover" // Ensure the image covers the parent area
          
          />
        </div>
      </section>
      <section className='py-10'>
        <p className='font-semibold text-gray-400 text-center'>Share your setup with</p>
        <h1 className='font-bold text-black text-center font-sans text-3xl'>#FuniroFurniture</h1>
        <br />
        <div className="relative w-full h-96">
          <Image
            src="/Share.png"
            alt="share"
            layout="fill" // Keep this to make the image fill its parent
            objectFit="cover" // Ensure the image covers the parent area
          
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
