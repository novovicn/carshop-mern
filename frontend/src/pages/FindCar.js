import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cars from '../components/Cars'
import Heading from '../components/Heading'
import { getCars } from '../features/cars/carsSlice';
import { useSearchParams } from 'react-router-dom';

function FindCar({match, location}) {
    const dispatch = useDispatch();

    
    const page = location.search.split('=')[1];
    useEffect(() => {
        dispatch(getCars(page))
    }, [])
    return (
        <div className="findCar">
            <Heading/>
            <Cars />
        </div>
    )
}

export default FindCar
