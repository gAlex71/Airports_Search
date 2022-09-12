import { AppDispatch } from "../index"
import axios from "../../axios"
import { handbookSlice } from "../slices/HandBookSlice"
import { IAirportCountry, IAirportRegion, IAirportType } from "../../models/models"

export const fetchHandBooks = () => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(handbookSlice.actions.fetching())
            const response = await Promise.all([
                axios.get<IAirportType[]>('handbooks/airport-types'),
                axios.get<IAirportRegion[]>('handbooks/regions'),
                axios.get<IAirportCountry[]>('handbooks/countries')
            ])
            dispatch(handbookSlice.actions.fetchSuccess({
                types: response[0].data,
                regions: response[1].data,
                countries: response[2].data
            }))
        }catch(e){
            
        }
    }
}