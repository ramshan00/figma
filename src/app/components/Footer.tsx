// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Furniro Address */}
        <div>
          <h2 className="text-lg font-bold mb-4">Furniro</h2>
          <p className="text-gray-500">400 University Drive Suit 200 Coral</p>
          <p className="text-gray-500">Gobles</p>
          <p className="text-gray-500">Email: info@furniro.com</p>
          <p className="text-gray-500">
            Ft 33134 USA
          </p>
        </div>

        {/* Helpful */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-500">Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="/home" className="hover:text-yellow-500">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/shop" className="hover:text-yellow-500">Shop</Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="hover:text-yellow-500">About</Link>
            </li>
            
            <li className="mb-2">
              <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-500">Help</h2>
          <ul>
            <li className="mb-2">
              <Link href="/shipping" className="hover:text-yellow-500">Payment Options</Link>
            </li>
            <li className="mb-2">
              <Link href="/terms" className="hover:text-yellow-500">Returns</Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy-policy" className="hover:text-yellow-500">Privacy Policies</Link>
            </li>
          </ul>
        </div>

       {/* Newsletter Subscription */}
<div>
  <h2 className="text-lg font-bold mb-4 text-gray-500">Newsletter</h2>

  <form className="flex justify-around items-center space-x-2">
    {/* Input Field */}
    <input
      type="email"
      placeholder="Enter your Email Address"
      className="border-b-2 border-gray-300 placeholder:underline placeholder:text-gray-500 text-black rounded-md focus:outline-none focus:border-gray-500 transition-all px-2 py-1"
      required
    />

    {/* Subscribe Button */}
    <button
      type="submit"
      className=" text-black rounded-md font-semibold hover:bg-gray-300 transition-all underline"
    >
      Subscribe
    </button>
  </form>
</div>
</div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 pl-14 ">
        <p>&copy; {new Date().getFullYear()} furniro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
