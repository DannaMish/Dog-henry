import style from "./DogDetail.module.css";

export default function DogDetail(props){
    
    return(
        <div className={style.container}>
              <h2 className={style.title}>{props.name}</h2>
              <img className={style.image} src={props.image} alt={props.name} width="320px" height="290px"/>
              <div className={style.par}>
              <h3>Height: {props.height}</h3>
              <h3>Weight: {props.weight} Kg</h3>
              <h3>Temperaments: {props.temperaments}</h3>
              <h3>Life span: {props.life_span}</h3>
              </div>
        
            
        </div>
    )
}
    