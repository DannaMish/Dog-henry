import DogCard from "./DogCard";
import style from "./DogGrid.module.css";
import { useEffect } from 'react';
import { getDogs } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux'

export default function DogGrid(){
   
    //const [ dogs, setDogs ] = useState([])

    //useEffect(() => {
        //fetch(`http://localhost:3001/dogs/`)
      //.then(res => res.json())
      //.then(data => {
            //setDogs(data)
        //})
     // .catch(err => console.log(err.message))
    //}, [])
   
    const dogs = useSelector(state => state.currentDogs);
    const dispatchDogs = useDispatch();
    useEffect(() => {
    dispatchDogs(getDogs())
    },[dispatchDogs]);
   
    return(
    <ul className={style.container}>
        {dogs.map((dog)=>
       
       <li key={dog.name}>

            <DogCard
                id={dog.id}
                image={dog.image}
                name={dog.name}
                temperaments={dog.temperaments}
                weight={dog.weight}
            />
        </li>
        )}
    
    </ul>
   )
}