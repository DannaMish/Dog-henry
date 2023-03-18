import SearchBar from "../Components/SearchBar";
import DogGrid from "../Components/DogGrid";

export default function Home (){
        return (
            <div>
            <div >
                <SearchBar/>
            
            </div>
            <div>
                <DogGrid/>
            </div>
            </div>
        )
    }