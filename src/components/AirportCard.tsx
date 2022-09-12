import React from "react";
import { useNavigate } from "react-router-dom";
import { IAirport } from "../models/models";

interface AirportCardProps{
    airport: IAirport
}

const AirportCard = ({airport}: AirportCardProps) => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/airport/${airport.id}`)
    }

    return(
        <div 
            className="border rounded-md my-5 py-4 px-6 hover:shadow-md hover:transition-all cursor-pointer"
            onClick={clickHandler}
        >
            <p className="text-lg font-bold">{airport.name}</p>
            <p>{airport?.region}</p>
            <p>{airport?.type}</p>
            <p>{airport?.country}</p>
            <p>{airport?.local_code}</p>
            <p>{airport?.ident}</p>
        </div>
    )
}

export default AirportCard