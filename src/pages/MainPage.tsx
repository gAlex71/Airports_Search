import React, { useEffect, useRef } from 'react'
import AirportCard from '../components/AirportCard'
import AirportFilter from '../components/AirportFilter'
import AirportSearch from '../components/AirportSearch'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchAirports } from '../store/actions/airportActions'
import ReactPaginate from 'react-paginate'

const ITEMS_PER_PAGE=5

const MainPage = () => {
    const dispatch = useAppDispatch()
    const page = useRef(1)
    const {error, loading, airports, count} = useAppSelector(state=>state.airport)
    const pageCount = Math.ceil(count / ITEMS_PER_PAGE) 

    const pageChangeHandler = ({selected}: {selected: number}) => {
        page.current = selected+1
        dispatch(fetchAirports(page.current, ITEMS_PER_PAGE))
    }

    //При загрузке страницы выводим данные с сервера
    useEffect(() => {
        dispatch(fetchAirports(page.current, ITEMS_PER_PAGE))
    },[dispatch, page])

    return(
        <div className="container mx-auto max-w-[760px] pt-5">
            <AirportSearch/>

            <AirportFilter/>

            {loading && <p className='text-center text-lg'>Loading...</p>}
            {error && <p className='text-center text-lg text-red-600'>{error}</p>}

            {
                airports.map(airport => <AirportCard key={airport.id} airport={airport}/>)
            }

            { pageCount && <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={pageChangeHandler}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                forcePage={page.current-1}
                containerClassName="flex mb-10"
                pageClassName="py-1 px-2 border mr-2"
                previousClassName="py-1 px-2 border mr-2"
                nextClassName="py-1 px-2 border"
                activeClassName="bg-gray-500 text-white"
            />}
        </div>
    )
}

export default MainPage