import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-96">
        <Image 
          src="/Group 78.png" 
          alt="Contact Banner" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg" 
        />
      </div>
    </div>
  );
};

export default Contact;
