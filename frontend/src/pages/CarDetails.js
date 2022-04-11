import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './CarDetails.css'
import { useHistory, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getSingleCar } from "../features/cars/carsSlice";

function CarDetails({match, history}) {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSingleCar(match.params.id))
  }, [])

  const { car, loading, success, error, message  } = useSelector(state => state.cars);

  const handleBack = () => {
    history.replace("/cars");
  };

  return (
    <div className="moreInfo">
      <button onClick={handleBack} className="moreInfo__cancel">
        BACK
      </button>
      <div className="moreInfo__car">
        <div className="moreInfo__image">
          <img src={car.image} alt="" />
        </div>
        <div className="moreInfo__text">
          <h1 className="car-details-big">Car details</h1>
          <br />
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
            <span className="bold">Owner:</span> {car.owner}
          </p>
          <p>
            <span className="bold">Mileage:</span> {car.mileage}
          </p>
          <p>
            <span className="bold">VIN:</span> {car.vin}
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
