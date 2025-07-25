import { BsCartDash } from "react-icons/bs";
import {
  FaMoneyCheck,
  FaRegCalendar,
  FaRegCheckCircle,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/slicers/CartSlicer";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.handlecart.cart);
  const totalItems = useSelector((state) => state.handlecart.totalItems);
  const totalPrice = useSelector((state) => state.handlecart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return cartItems.length > 0 ? (
    <div className="flex  flex-col-reverse md:grid md:grid-cols-4 gap-4 items-start">
      <div className="col-span-3 mt-2 shopping-cart text-4xl justify-center flex flex-col  p-8  bg-white">
        <div className=" hidden md:block justify-between items-center mb-1">
          <h1 className="text-2xl mb-4">Shopping Cart</h1>
        </div>
        <div className="hidden md:flex justify-between">
          <h1 className="text-2xl"></h1>
          <h1 className="text-lg">Price</h1>
        </div>
        <hr className=" hidden md:flex mb-2 border-gray-300" />
        <div className="flex flex-col gap-1">
          {cartItems.map((plant, index) => (
            <div
              key={index}
              className=" items-center justify-center p-2 text-base gap-2"
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
                    <p className="hidden md:block text-sm text-gray-600">
                      {plant.description}
                    </p>
                    <p className="md:hidden text-lg font-bold ">
                      {" "}
                      ${plant.salePrice ? plant.salePrice : 0}
                    </p>
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
                    <div className="md:flex items-center gap-2 mt-2">
                      <div className="border-yellow-200 border-2 rounded-3xl p-1 flex justify-between  items-center h-8 w-32 px-2">
                        <FaPlus
                          className=" cursor-pointer hover:text-yellow-400"
                          size={12}
                          onClick={() => {
                            dispatch(addToCart(plant));
                            // Logic to increase quantity
                          }}
                        />
                        <span className="mx-2">{plant.quantity}</span>
                        {plant.quantity === 1 ? (
                          <FaTrash
                            className=" cursor-pointer hover:text-yellow-400"
                            size={12}
                            onClick={() => {
                              dispatch(removeFromCart({ itemId: plant.id }));
                              // Logic to decrease quantity
                            }}
                          />
                        ) : (
                          <FaMinus
                            className=" cursor-pointer hover:text-yellow-400"
                            size={12}
                            onClick={() => {
                              dispatch(removeFromCart({ itemId: plant.id }));
                              // Logic to decrease quantity
                            }}
                          />
                        )}
                      </div>
                      <div className="md:hidden mt-1">
                        Total:{" "}
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(plant.salePrice * plant.quantity)}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="hidden md:block w-px h-5 bg-gray-400"></div>
                        <button
                          className=" bg-transparent hover:text-red-500 text-gray-500 px-1 py-1 rounded-xl  transition-colors duration-300"
                          onClick={() => {
                            dispatch(
                              removeFromCart({
                                itemId: plant.id,
                                isDeleted: true,
                              })
                            );
                            //Logic to remove item from cart
                          }}
                        >
                          Delete
                        </button>
                        <div className="w-px h-5 bg-gray-400"></div>
                        <button
                          className=" bg-transparent hover:text-green-500 text-gray-500 px-1 py-1 rounded-xl  transition-colors duration-300"
                          onClick={() => {
                            alert("This feature is coming soon");
                          }}
                        >
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-3 items-end">
                  <div className="h-20 justify-end items-end">
                    <div className="font-bold text-lg text-end">
                      ${plant.salePrice ? plant.salePrice : 0}
                    </div>
                    <div className="text-base text-end">
                      Total:{" "}
                      {new Intl.NumberFormat("en-AU", {
                        style: "currency",
                        currency: "AUD",
                      }).format(plant.salePrice * plant.quantity)}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-2 shopping-cart text-4xl  p-8  bg-white">
        <div className="flex flex-col gap-2 justify-between mb-1 bg-white ">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">
              Order Summary
            </h1>
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
              Items in Cart: <span className="font-bold">{totalItems}</span>
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
              Subtotal:{" "}
              <span className="font-bold">
                {new Intl.NumberFormat("en-AU", {
                  style: "currency",
                  currency: "AUD",
                }).format(totalPrice)}
              </span>
            </h1>
          </div>

          <button
            className="bg-yellow-300 text-base  px-2 py-1 rounded hover:bg-yellow-400 transition-colors duration-300"
            onClick={() => navigate("/NurseryShopping/plantsCollection")}
          >
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
  ) : (
    <>
      {" "}
      <div className=" flex flex-grow flex-col justify-center items-center gap-4">
        <BsCartDash className="text-gray-700 " size={150} />
        <p className="text-gray-600 mb-4 text-xl">
          Your cart is currently empty.
        </p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
          onClick={() => navigate("/NurseryShopping/plantsCollection")}
        >
          Start Shopping
        </button>
      </div>
    </>
  );
}
