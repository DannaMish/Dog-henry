import { Link } from "react-router-dom"
import style from "./NavBar.module.css"


export default function NavBar (){
    return(
        <div className={style.mainContainer}>
          <Link to="/dogs/:Id">Detail</Link>
        </div>
    )
}