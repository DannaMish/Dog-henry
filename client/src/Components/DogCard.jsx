import React from 'react'

export default function DogCard(props) {
    return (
        <div>
              <img src={props.image} alt=""/>
              <h2>{props.name}</h2>
              <h3>{props.temperaments}</h3>
              <h3>{props.weight}</h3>
        </div>
    )
}
