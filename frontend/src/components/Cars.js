import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Car from "./Car";
import "./Cars.css";
import { Pagination } from "./Pagination";
import Spinner from "./Spinner";

function Cars(props) {

  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    fetch('/cars')
      .then(response => response.json())
      .then(data => console.log(data.cars))
  }, [])

  useEffect( () => {
    setFiltered(false);
    
    if(!props.user){
      alert('Only authenticated users can buy a car')
    }

    const getCars = async () => {
      setLoading(true);
      const response = await fetch('/cars')
      const data = await response.json()
      setCars(data.cars);
      setLoading(false);
    }

    getCars();
  }, [])

  useEffect(() => {



    const carsFilteredByPrice = cars.filter((car) => {
      if (parseInt(car.price) <= parseInt(props.searchPriceHigh) &&
        parseInt(car.price) >= parseInt(props.searchPriceLow)) {
        return car;
      }
    });

    const filterBrandAndPrice = carsFilteredByPrice.filter(car => {
      if (car.brand.toUpperCase().indexOf(props.searchBrand.trim().toUpperCase()) != -1 ||
                car.model.toUpperCase().indexOf(props.searchBrand.trim().toUpperCase()) != -1) {
                return car;
      }
    })


    console.log(cars);
    setFilteredCars(filterBrandAndPrice);
    setFiltered(true);
  }, [props.searchPriceLow, props.searchBrand, props.searchPriceHigh, cars]);


  const carsToRender = filtered? filteredCars : cars;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = carsToRender.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageNumber = (num) => {
    setCurrentPage(num);
  };

  console.log(filtered);

  return (
    <div className="carsRender">
      <div className="cars">
      {loading ? (
        <Spinner />
      ) : (
        currentPosts?.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            image={car.image}
            vin={car.vin}
            brand={car.brand}
            model={car.model}
            owner={car.owner}
            price={car.price}
            sold={car.is_sold}
            year={car.year}
            mileage={car.mileage}
            sold={car.sold}
          />
        ))
      )}
      </div>
      
      <div className="pagination">
      <Pagination
        paginate={handlePageNumber}
        postsPerPage={postsPerPage}
        totalPosts={cars.length}
      />
      </div>
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchPriceLow: state.searchPriceLow,
    searchPriceHigh: state.searchPriceHigh,
    searchBrand: state.searchBrand,
    user: state.user
  };
};

export default connect(mapStateToProps)(Cars);
