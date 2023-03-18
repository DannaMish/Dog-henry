import { useState } from 'react'


export default function SearchBar() {

    const [search, setSearch] = useState("")
    

    const handleSubmit =(e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}></input>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}