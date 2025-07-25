import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slicers/CartSlicer";

const images = import.meta.glob("../assets/*.jpg", { eager: true });

const PlantsCategories = ({ categories, onCategorySelect }) => {
  const dispatch = useDispatch();
  const addCart = (plant) => {
    dispatch(addToCart(plant));
  };
  return (
    <>
      <div class="w-full  mt-4 px-4 pb-2">
        <div class="flex justify-end gap-2"></div>
        <div className="plants-categories py-4 gap-4">
          {Object.entries(categories).map((category, data) => (
            <div className="text-xl font-bold mb-2" key={category[0]}>
              <div className="flex items-center mb-6 justify-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold border-b-2 border-green-500 pb-1 text-center">
                  {category[0]}
                  {" Plants"}
                </h2>
              </div>
              <div className="grid grid-col-1 md:grid-cols-4 gap-4 w-full mt-2 p-6 ">
                {category[1].map((plant, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col bg-white items-center justify-center aspect-square p-4 box-border rounded text-base shadow-md hover:shadow-lg transition-shadow duration-300 gap-2"
                  >
                    {plant.sale && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-bl">
                        SALE
                      </div>
                    )}
                    <div className="font-semibold text-center">
                      {plant.name}
                    </div>
                    <img
                      src={plant.imageUrl}
                      alt="plant"
                      className="inline-block w-40 h-32 object-contain"
                    />
                    <div className="text-lg text-center">
                      ${plant.salePrice ? plant.salePrice : 0}
                    </div>
                    <div className="text-xs text-gray-600 italic text-center">
                      {plant.description}
                    </div>

                    <div className="text-sm text-gray-800 font-semibold mt-2">
                      <button
                        className="bg-green-500 disabled:bg-green-200 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors duration-300"
                        onClick={() => addCart(plant)}
                        disabled={useSelector((state) =>
                          state.handlecart.cart.some(
                            (p) => p.name === plant.name
                          )
                        )}
                      >
                        {useSelector((state) =>
                          state.handlecart.cart.some(
                            (p) => p.name === plant.name
                          )
                        )
                          ? "Added"
                          : "Add"}{" "}
                        to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantsCategories;
