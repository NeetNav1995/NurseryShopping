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
import {
  FaMoneyCheck,
  FaRegCalendar,
  FaRegCheckCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function ShoppingCart() {
  return (
    <div className="grid grid-cols-4 gap-4 items-start">
      <div className="col-span-3 mt-2 shopping-cart text-4xl justify-center flex flex-col  p-8  bg-white">
        <div className="flex justify-between items-center mb-1">
          <h1 className="text-2xl mb-4">Shopping Cart</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-2xl"></h1>
          <h1 className="text-lg">Price</h1>
        </div>
        <hr className="mb-2 border-gray-300" />
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
              description:
                "Lemon-scented leaves, great for teas and potpourri.",
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
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={plant.imageUrl}
                    alt="plant"
                    className="inline-block w-32 h-30 object-contain"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{plant.name} </h4>
                    <p className="text-sm text-gray-600">{plant.description}</p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
                      />
                      <span className="absolute left-1 top-0.5 text-white text-sm font-bold pointer-events-none opacity-0 peer-checked:opacity-100">
                        ✓
                      </span>
                      <span className="ml-2 text-gray-800">
                        This will be a gift
                      </span>
                    </label>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="border-yellow-200 border-2 rounded-3xl p-1 flex justify-between  items-center h-8 w-32 ">
                        <FaPlus
                          className=" cursor-pointer hover:text-yellow-400"
                          size={11}
                        />
                        <span className="mx-2">10000</span>
                        <FaMinus
                          className=" cursor-pointer hover:text-yellow-400"
                          size={11}
                        />
                      </div>
                      <div className="w-px h-5 bg-gray-400"></div>
                      <button className=" bg-transparent hover:text-red-500 text-gray-500 px-1 py-1 rounded-xl  transition-colors duration-300">
                        Delete
                      </button>
                      <div className="w-px h-5 bg-gray-400"></div>
                      <button className=" bg-transparent hover:text-green-500 text-gray-500 px-1 py-1 rounded-xl  transition-colors duration-300">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-end">
                  <div className="h-20 justify-end items-end">
                    <div className="font-bold text-lg text-end">
                      ${plant.salePrice ? plant.salePrice : 0}
                    </div>
                    <div className="text-base text-end">Total: $100</div>
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
       
      </div>
      <div className=" mt-2 shopping-cart text-4xl  p-8  bg-white">
        <div className="flex flex-col gap-2 justify-between mb-1 bg-white ">
          <div>
            <h1 className="text-2xl mb-4">Order Summary</h1>
            <div className="flex  gap-2">
              <FaRegCheckCircle className="text-green-500" size={20} />
              <h1 className="text-base mb-4 text-green-500">
                Your order qualifies for FREE delivery
              </h1>
            </div>

            <hr className="mb-2 border-gray-300" />
          </div>
          <div className="flex  gap-2">
            <FaShoppingCart className="text-gray-500" size={20} />
            <h1 className="text-base mb-4 ">
              Items in Cart: <span className="font-bold">4</span>
            </h1>
          </div>

          <div className="flex  gap-2">
            <FaRegCalendar className="text-gray-500" size={20} />
            <h1 className="text-base mb-4 ">
              Estimated delivery by <span className="font-bold">Tomorrow</span>
            </h1>
          </div>
          <div className="flex  gap-2">
            <FaMoneyCheck className="text-gray-500" size={20} />
            <h1 className="text-base mb-4 ">
              Subtotal: <span className="font-bold">$59.97</span>
            </h1>
          </div>

          <button className="bg-yellow-300 text-base  px-2 py-1 rounded hover:bg-yellow-400 transition-colors duration-300">
            Continue Shopping
          </button>

          <div className="relative inline-block w-full">
            <button
              disabled
              className="bg-yellow-300 w-full text-base font-semibold px-6 py-2 rounded-md opacity-70 cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
            <span className="absolute -top-1 right-0 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              Coming Soon
            </span>
          </div>

        
        </div>
      </div>
    </div>
  );
}
