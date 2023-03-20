import DogCard from "./DogCard";
import style from "./DogGrid.module.css";
import { useState } from "react";
import { useEffect } from 'react';

export default function DogGrid(){
   
    const [ dogs, setDogs ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/dogs/`)
      .then(res => res.json())
      .then(data => {
            setDogs(data)
        })
      .catch(err => console.log(err.message))
    }, [])
   
   
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