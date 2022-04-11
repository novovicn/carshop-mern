import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cars from '../components/Cars'
import Heading from '../components/Heading'
import { getCars } from '../features/cars/carsSlice';

function FindCar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars())
    }, [])
    return (
        <div className="findCar">
            <Heading/>
            <Cars />
        </div>
    )
}

export default FindCar
