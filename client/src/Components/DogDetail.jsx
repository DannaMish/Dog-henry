export default function VideogameDetail(props){
    console.log(props.genres)
    console.log('platforms')
    console.log(props.platforms)
    return(
        <div >
              <h2>{props.name}</h2>
              <img src={props.image} alt="" width="320px" height="290px"/>
              <div className={style.top}>
              <h3>{props.temperaments}</h3>
              <h3>{props.weight}</h3>
              </div>
        
            
        </div>
    )
}
    