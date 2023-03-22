import { Link } from "react-router-dom"
import style from "./NavBar.module.css"


export default function NavBar (){
    return(
        <div className={style.mainContainer}>
          <Link to="./createDog">Create Dog</Link>
          <Link to="./">Landing</Link>
        </div>
    )
}