const images = import.meta.glob("../assets/*.jpg", { eager: true });

const PlantsCategories = ({ categories, onCategorySelect }) => {
  return (
    <>
      <div class="w-full  mt-4">
        <div class="flex justify-end gap-2">
          {/* <button
            key={"All"}
            className={`px-2 py-1 text-lg text-green-500 hover:text-green-700 border rounded-md ${
              "All" === "All" ? "bg-green-500 text-white" : ""
            } border-green-600`}
          >
            All
          </button>
          {Object.entries(categories).map((category, data) => (
            <button
              key={category[0]}
              className={`px-2 py-1 text-lg bg-white text-green-500 hover:text-green-700 border rounded-md ${
                category[0] === "Aromatic1" ? "border-b-2" : ""
              } border-green-600`}
            >
              {category[0]}
              {" (" +
                (category[1].length > 5 ? "5+" : category[1].length) +
                ")"}
            </button>
          ))} */}
        </div>
        <div className="plants-categories py-4 gap-4">
          {Object.entries(categories).map((category, data) => (
            <div
              className="text-xl font-bold mb-2"
              key={category[0]}
              //onClick={() => onCategorySelect(category)}
            >
              <div className="flex items-center mb-6 justify-center">
                {/* <svg
                  className="w-8 h-8 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg> */}
                <h2 className="text-3xl font-semibold border-b-2 border-green-500 pb-1 text-center">
                  {category[0]}
                  {" Plants"}
                </h2>
              </div>

              {/* <h2 className="uppercase tracking-widest text-lg font-semibold bg-green-100 inline-block px-4 py-1 rounded-lg text-green-700 mb-6">
                {category[0]}
                {" Plants"}
              </h2> */}
              {/* <h2 className="text-3xl font-bold text-gray-800 mb-6 relative inline-block cursor-pointer group">
                Hello
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-500 transition-all group-hover:w-full"></span>
              </h2>
              */}
              <div className="grid grid-cols-4 gap-4 w-full mt-2 p-6 ">
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
                      <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-4 mt-2 w-full box-border gap-2">
                {category[1].map((plant, index) => (
                  <div
                    key={index}
                     className="relative flex flex-col items-center justify-center w-1/4 aspect-square p-2 box-border rounded text-base shadow-md hover:shadow-lg transition-shadow duration-300 bg-white gap-4"
                    // className="relative w-1/4 bg-white gap-4 aspect-square px-2 py-4 rounded text-base mr-2 mb-2 items-center flex flex-col justify-center shadow-md hover:shadow-lg transition-shadow duration-300 "
                  >
                    {plant.sale && (
                      <div className="text-sm font-semibold  absolute right-0 top-0 bg-red-500 text-white px-2 py-1 ">
                        SALE
                      </div>
                    )}
                    <div className="font-semibold text-center">
                      {plant.name}{" "}
                    </div>
                    <img
                      src={"/" + category[0].toLowerCase() + plant.imageUrl}
                      alt="plant"
                      height={150}
                      width={150}
                      className="inline-block ml-2"
                    />
                    <div className="text-xs text-gray-600 italic text-center">
                      {plant.description}
                    </div>
                    <div className="text-sm text-gray-800 font-semibold">
                      <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors duration-300">
                        Add to Cart{" "}
                      </button>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantsCategories;
