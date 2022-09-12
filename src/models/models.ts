export interface IAirport{
    id: number
    name: string
    ident: string
    local_code: string
    region: string
    type: string
    country: string
}

export interface ServerResponse<T>{
    count: number
    next: number
    previous: number
    results: T[]
}

export type IAirportType = string
export type IAirportRegion = string
export type IAirportCountry = string

export interface IFilter{
    type: IAirportType,
    region: IAirportRegion,
    country: IAirportCountry
}

export interface IAirportDetail{
    continent: string
    coordinates: string
    country: string
    elevation_ft: string
    gps_code: string
    iata_code: string
    ident: string
    local_code: string
    municipality: string
    name: string
    region: string
    type: string
}