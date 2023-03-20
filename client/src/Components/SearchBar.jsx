import { useState } from 'react'
import style from "./SearchBar.module.css"

export default function SearchBar() {

    const [search, setSearch] = useState("")
    

    const handleSubmit =(e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <input className={style.input} type="text" onChange={handleChange}></input>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}