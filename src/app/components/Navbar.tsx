
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logos.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="mr-3"
            priority={true}
          />
          <span className="font-bold text-lg text-black">Furniro</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-9 font-bold">
          <Link href="/" className="text-black hover:text-yellow-500">Home</Link>
          <Link href="/shop" className="text-black hover:text-yellow-500">Shop</Link>
          <Link href="/about" className="text-black hover:text-yellow-500">About</Link>
          <Link href="/contact" className="text-black hover:text-yellow-500">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 ">
        <FaUser className="text-black hover:text-yellow-500 cursor-pointer" />

       <FaSearch className="text-black hover:text-yellow-500 cursor-pointer" />

          <FaHeart className="text-black hover:text-yellow-500 cursor-pointer" />

          <FaShoppingCart className="text-black hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
