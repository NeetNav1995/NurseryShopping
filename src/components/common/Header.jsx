import { BsCart3 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping, FaLeaf, FaTree } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 justify-between items-center flex flex-col md:flex-row">
      <div className="flex items-center space-x-4">
        <div className="inline-flex items-center justify-center bg-white rounded-full p-2 shadow-md">
          <FaTree className="text-green-500" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold">Paradise Nursery</h1>
          <p className="text-sm">
            <i>Where Green Meets Serenity</i>
          </p>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <div className="relative inline-block">
              <div className="inline-flex items-center justify-center  rounded-full p-2">
                <FaShoppingCart className="text-gray-700" size={24} />
              </div>

              
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                 1
                </span>
             
            </div>
            {/* <BsCart3 className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
              1
            </span> */}
            {/* <a href="/" className="hover:underline">
              Home
            </a> */}
          </li>
          {/* <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
         */}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
