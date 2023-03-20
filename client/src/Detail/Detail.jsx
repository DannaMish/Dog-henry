import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import DogDetail from "../Components/DogDetail"
import { Link } from 'react-router-dom';

export default function Detail() {

    const { id } = useParams();
    const [dog, setDog] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/dogs/${id}`)     // hacemos un GET a nuestra API, endpoint: /dogs/${detailId}
            .then((response) => response.json())            // convertimos a json (objeto) el reponse que obtenemos de la API
            // response = { name: Dobermam , temperament: Dobermam, weight: 55}
            // response = { error: No dog found}
            // response = None
            .then((mDog) => {                                
                if (mDog.name) {                             // Preguntamos si la respuesta de la API (mDog) tiene un atributo llamado "name" 
                    setDog(mDog);                            // De ser asi, actualizamos el estado dog con el valor obtenido de la API (mDog)
                } else {
                    window.alert("Dog not found");           // caso contrario, mostramos una alerta con el mensaje ("Dog not found")
                }
            })
            .catch((err) => {
                console.log(err.message);                   // Si sucede algun error, hacemos un cosole.log del mensaje de error
            });
    }, [id]);

    return (
        <div>
                <Link to="/home">Back to home</Link>
                  <DogDetail                                //Propiedades
                    name={dog.name}
                    image={dog.image}
                    id={dog.id}
                    height={dog.height} 
                    weight={dog.weight}
                    temperaments={dog.temperaments}
                    life_span={dog.life_span}
                />
                
            </div>
        
    )


    }