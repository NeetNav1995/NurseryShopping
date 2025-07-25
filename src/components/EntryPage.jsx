import Header from "./common/Header";
import PlantsCategories from "./PlantsCategories";
import Data from "../Data/PlantsData.json";
import ShoppingCart from "./ShoppingCart";

export default function EntryPage(){

    return(
        <div className=" bg-gray-200">
        <Header />
        
        <PlantsCategories categories={Data}/>
        
        </div>
    )
}