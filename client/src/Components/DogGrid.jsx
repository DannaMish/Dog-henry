import DogCard from "./DogCard";

export default function DogGrid(){
   
    const currentDogs= [ {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/1200px-Dobermann_handling.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55},
                        {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/1200px-Dobermann_handling.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55},
                        {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/1200px-Dobermann_handling.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55} ,
                        {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dobermann_handling.jpg/1200px-Dobermann_handling.jpg",
                        name:"Doberman",
                        temperaments:"20 - 23",
                        weight: 55}]
   
   
   
    return(
    <ul>
        {currentDogs.map((dog)=>
        <li>
            <DogCard
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