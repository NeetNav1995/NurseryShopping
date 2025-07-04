import {
  BsCartDash,
  BsFileMinus,
  BsFilePlus,
  BsFillFileMinusFill,
  BsFillPatchMinusFill,
  BsFillPatchPlusFill,
  BsFillPlusSquareFill,
  BsPlus,
} from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function ShoppingCart() {
  return (
    <div className="shopping-cart text-4xl justify-center flex flex-col  p-8  bg-white">
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl mb-4">Shopping Cart</h1>
        <h1 className="text-lg mb-4">Price</h1>
      </div>
      <hr className="mb-4 border-gray-300" />
      <div className="flex flex-col gap-2">
        {[
          {
            id: 1,
            name: "Basil",
            description: "Sweet and pungent aroma, perfect for home decor.",
            imageUrl: "/basil.jpg",
            sale: true,
            salePrice: 5.99,
          },
          {
            id: 2,
            name: "Borage",
            description: "Cucumber like scent, ideal for gardens and pots.",
            imageUrl: "/borage.jpg",
            sale: true,
            salePrice: 5.99,
          },
          {
            id: 3,
            name: "Lilacs",
            description: "Beautiful purple flowers with a sweet fragrance.",
            imageUrl: "/lilacs.jpg",
            sale: true,
            salePrice: 5.99,
          },
          {
            id: 4,
            name: "Melissa",
            description: "Lemon-scented leaves, great for teas and potpourri.",
            imageUrl: "/melissa.jpg",
            sale: true,
            salePrice: 5.99,
          },
        ].map((plant, index) => (
          <div
            key={index}
            className=" bg-white items-center justify-center p-4 box-border rounded text-base shadow-md hover:shadow-lg transition-shadow duration-300 gap-2"
          >
            <div className="flex justify-between gap-4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={"/aromatic" + plant.imageUrl}
                  alt="plant"
                  className="inline-block w-32 h-20 object-contain"
                />
                <div className="border-yellow-200 border-2 rounded-3xl p-2 flex justify-between w-full items-center">
                  <FaPlus className=" cursor-pointer" size={12} />
                  <span className="mx-2">10000</span>
                  <FaMinus className=" cursor-pointer" size={12} />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-20">
                  <div className="font-semibold">{plant.name}</div>
                  <div className="text-base">
                    ${plant.salePrice ? plant.salePrice : 0}
                  </div>

                  <div className="text-base">Total: $1000000</div>
                </div>
                <div className="flex-1 text-sm  mt-2">
                  <button className=" bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-xl  transition-colors duration-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="relative inline-block">
        <div className="inline-flex items-center justify-center  rounded-full p-2">
          <BsCartDash className="text-gray-700 " size={150} />
        </div>
      </div>
      <p className="text-gray-600 mb-4">Your cart is currently empty.</p> */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex  gap-2">
          <div className="text-lg">Total Items:</div>
          <div className="text-lg">0</div>
        </div>
        <div className="flex  gap-2">
          <div className="text-lg ">Total Amount:</div>
          <div className="text-xl">$0</div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
