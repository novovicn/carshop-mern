import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './CarDetails.css'
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getSingleCar } from "../features/cars/carSlice";
import { FaArrowLeft } from 'react-icons/fa'

function CarDetails({match}) {

  const dispatch = useDispatch();
  const { car, loading, success, error, message  } = useSelector(state => state.car);
  
  useEffect(() => {
    dispatch(getSingleCar(match.params.id))
  }, [])


  if(loading){
    return <Spinner />
  }

  return (
    <div className="moreInfo">
      <Link to="/cars">
        <FaArrowLeft/>
      </Link>
      <div className="moreInfo__car">
        <div className="moreInfo__image">
          <img src={car.image} alt="" />
        </div>
        <div className="moreInfo__text">
          <h1 className="car-details-big">Car details</h1>
          <p>
            <span className="bold">Brand:</span> {car.brand}
          </p>
          <p>
            <span className="bold">Model:</span> {car.model}
          </p>
          <p>
            <span className="bold">Year:</span> {car.year}
          </p>
          <p>
            <span className="bold">Owner:</span> {car?.owner?.name}
          </p>
          <p>
            <span className="bold">Mileage:</span> {car.mileage}
          </p>
          <h1 className="car-details-big">
            <span className="bold">Price:</span> {car.price} €
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
