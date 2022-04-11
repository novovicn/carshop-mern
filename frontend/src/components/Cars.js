import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Car from "./Car";
import "./Cars.css";
import { Pagination } from "./Pagination";
import Spinner from "./Spinner";

function Cars() {

  const { cars, loading, error } = useSelector(state => state.cars);

  return (
    <div className="carsRender">
      <div className="cars">
      {loading ? (
        <Spinner />
      ) : (
        cars?.map((car) => (
          <Car
            key={car._id}
            id={car._id}
            image={car.image}
            brand={car.brand}
            model={car.model}
            owner={car.owner}
            price={car.price}
            year={car.year}
            mileage={car.mileage}
          />
        ))
      )}
      </div>
    </div>
  );
}

export default Cars
