import Header from "./common/Header";
import PlantsCategories from "./PlantsCategories";
import Data from "../Data/PlantsData.json";
import ShoppingCart from "./ShoppingCart";

export default function EntryPage(){

    return(
        <div className="px-4 py-2 bg-gray-200">
        <Header />
        <ShoppingCart />
        <PlantsCategories categories={Data}/>
        
        </div>
    )
}