import React from 'react'
import style from "./DogCard.module.css"

export default function DogCard(props) {
    return (
        <div className={style.card}>
              <h2>{props.name}</h2>
              <img src={props.image} alt="" width="320px" height="290px"/>
              <div className={style.top}>
              <h3>{props.temperaments}</h3>
              <h3>{props.weight}</h3>
              </div>
        </div>
    )
}
