import SearchBar from "../Components/SearchBar";
import DogGrid from "../Components/DogGrid";
import NavBar from "../Components/NavBar";


export default function Home (){
   
    return (
            <div>
            <div >
                <SearchBar/>
                <NavBar/>
            </div>
            <div>
                <DogGrid/>
            </div>
            </div>
        )
    }