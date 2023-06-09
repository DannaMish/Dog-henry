import React from 'react'
import style from "./DogCard.module.css"
import { Link } from 'react-router-dom'


export default function DogCard(props) {
    return(
        <div className={style.card}>
              <h2>
                <Link to={`/detail/${props.id}`}>{props.name}</Link>
              </h2>
              <img src={props.image} alt="" width="320px" height="290px"/>
              <div>
              <h3>{props.temperaments}</h3>
              <h3>{props.weight}  Kg</h3>
              </div>
        </div>
    )
}
