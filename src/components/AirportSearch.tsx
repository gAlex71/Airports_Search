import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useDebounce } from "../hook/debounce";
import { useInput } from "../hook/input";
import { IAirport } from "../models/models";

const AirportSearch = () => {
    const input = useInput('')
    const navigate = useNavigate()
    const [dropdown, setDropdown] = useState(false)
    const [airports, setAirports] = useState<IAirport[]>([])
    const debounced = useDebounce<string>(input.value)
    const searchAirports = async() => {
        const response = await axios.get('airports', {params: {search: debounced, count:10}})
        setAirports(response.data.results);
    }

    useEffect(() => {
        if(debounced.length>3){
            searchAirports().then(() => setDropdown(true))
        }else{
            setDropdown(false)
        }
    }, [debounced])

    return(
        <div className="mb-4 relative">
            <input 
                type="text"
                className="border py-2 px-4 outline-0 w-full"
                placeholder="Type something her"
                {...input}
            />

            {dropdown && <ul className="list-none absolute left-0 right-0 h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll">
                {
                    airports.map(airport => (
                        <li 
                            key={airport.id}
                            className="py-2 px-4 mb-2 hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white"
                            onClick={() => navigate(`/airport/${airport.id}`)}
                        >
                            {airport.name}
                        </li>
                    ))
                }
            </ul>}
        </div>
    )
}

export default AirportSearch