import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import DogDetail from "../Components/DogDetail"

export default function Detail() {

    const { detailId } = useParams();
    const [dog, setDog] = useState({});
    useEffect(() => {
        //fetch(`http://localhost:3001/dogs/${detailId}`)
        fetch(`https://dogs-app-backend-production.up.railway.app/dogs/${detailId}`)
            .then((response) => response.json())
            .then((dog) => {
                if (dog.name) {
                    setDog(dog);
                } else {
                    window.alert("Dog not found");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
        // return setDog({});
    }, [detailId]);


    return (
        <div>
                <NavBar/>
                <Link to="/home">Button</Link>
                  <DogDetail
                    Name={dog.name}
                    ID={dog.id}
                    Height={dog.height} cm
                    Weight={dog.weight} kg
                    Temperaments={dog.temperaments}
                    Life Span={dog.life_span}
                />
                <img src={dog.image} alt={dog.name}/>
            </div>
        
    )

    }