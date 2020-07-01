import React, {useState} from 'react'
import { useSelector } from "react-redux";


export default function Header(props) {
    const [citySearch, setCitySearch] = useState("")

    const { city } = useSelector(
        (state) => state.restaurants
      );

    return (
        <header>
            <h1>Restaurant Finder</h1>
            <h3>Viewing results from {city}</h3>
            <input type="text" placeholder="Search by city" onChange={e=>setCitySearch(e.target.value)}/>
            <button onClick={()=>props.searchByCity(citySearch)}>Search</button>
        </header>
    )
}
