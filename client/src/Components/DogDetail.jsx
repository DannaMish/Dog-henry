export default function DogDetail(props){
    
    return(
        <div >
              <h2>{props.name}</h2>
              <img src={props.image} alt={props.name} width="320px" height="290px"/>
              <div>
              <h3>Height: {props.height}</h3>
              <h3>Weight: {props.weight}</h3>
              <h3>Temperaments: {props.temperaments}</h3>
              <h3>Life span: {props.life_span}</h3>
              </div>
        
            
        </div>
    )
}
    