import React from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux';

export default function SearchBar() {

    const [search, setSearch] = useState("")
    
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    function searchClick(event) {
        if (search.length > 0) {
            event.preventDefault()
            return dispatch((search));
        }
    }

    return (
        <div>
            <div>
                <input placeholder="Enter the name of a dog breed" type="search" search="" onChange={handleChange} />
                <button  onClick={(event) => searchClick(event)}>SEARCH</button>
                
                <div >
                <select name='temperament' defaultValue={"Default"}>
            <option value="Default" disabled>Select Temperament</option>
            
        </select>

        <select  name='origin' defaultValue={"Default"} >
            <option value="Default" disabled>Select Origin</option>
            <option value="api">API</option>
            <option value="database">DATABASE</option>
        </select>

        <select name='alphabetical' defaultValue={"Default"} >
            <option value="Default" disabled>Select Order Alphabetical</option>
            <option value="asc">Ascending</option>
            <option value="des">Descending </option>
        </select>

        <select name='weight' defaultValue={"Default"}  >
            <option value="Default" disabled>Select Order Weight</option>
            <option value="asc">Ascending</option>
            <option value="des">Descending </option>
        </select>
                </div>
                
            </div>
        </div>
    )
}