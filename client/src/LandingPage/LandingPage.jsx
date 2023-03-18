import style from "../LandingPage/LandingPage.module.css"
import { Link } from "react-router-dom"

export default function Landing (){
    return(
        <div className={style.imgFondo}>
            <Link to="./home"><button>Welcome to Dog</button></Link>
        </div>
    )
}