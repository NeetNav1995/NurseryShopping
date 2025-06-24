import Header from "./common/Header";
import PlantsCategories from "./PlantsCategories";
import Data from "../Data/PlantsData.json";

export default function EntryPage(){

    return(
        <div className="px-4 py-2">
        <Header />
        <PlantsCategories categories={Data}/>
        <div className="h-screen overlay"> 
            </div>
        </div>
    )
}