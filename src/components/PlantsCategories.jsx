const PlantsCategories = ({ categories, onCategorySelect }) => {
  return (
    <>
      <div class="w-full  mt-4">
        <div class="flex justify-end gap-2">
          <button
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
              className={`px-2 py-1 text-lg text-green-500 hover:text-green-700 border rounded-md ${
                category[0] === "Aromatic1" ? "border-b-2" : ""
              } border-green-600`}
            >
              {category[0]}
              {" (" +
                (category[1].length > 5 ? "5+" : category[1].length) +
                ")"}
            </button>
          ))}
        </div>
        <div className="plants-categories py-4">
          {Object.entries(categories).map((category, data) => (
            <div
            className="text-xl font-bold mb-2"
              key={category[0]}
              //onClick={() => onCategorySelect(category)}
            >
                {category[0]}{" "}

             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlantsCategories;
