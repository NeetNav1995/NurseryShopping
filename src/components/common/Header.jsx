import { BsCart3 } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping, FaLeaf, FaTree } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.handlecart.totalItems);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-green-600 text-white p-4 justify-between items-center flex flex-col md:flex-row">
      <div className="flex items-center space-x-4">
        <div
          className="inline-flex items-center justify-center bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-green-900 hover:text-white transition-colors duration-300"
          onClick={() => navigate("/NurseryShopping/")}
        >
          <FaTree className="text-green-500" size={24} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigate("/NurseryShopping/")}
        >
          <h1 className="text-xl font-bold">Paradise Nursery</h1>
          <p className="text-sm">
            <i>Where Green Meets Serenity</i>
          </p>
        </div>
      </div>

      <nav className="mt-2">
        <ul className="flex space-x-4 justify-center items-center">
          <li className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-900 hover:text-white transition-colors">
            <a href="/" className="text-md">
              Check Plants
            </a>
          </li>
          <li>
            <div className="relative inline-block">
              <div
                className="inline-flex items-center justify-center  rounded-full p-2 cursor-pointer"
                onClick={() => navigate("/NurseryShopping/checkout")}
              >
                <FaShoppingCart
                  className="hover:text-green-900 text-white"
                  size={24}
                />
              </div>

              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartItems}
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
