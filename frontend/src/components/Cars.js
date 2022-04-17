import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Car from "./Car";
import "./Cars.css";
import { Pagination } from "./Pagination";
import Spinner from "./Spinner";

function Cars() {

  const { cars, loading, pages, page, error } = useSelector(state => state.cars);

  if(cars && cars.length === 0){
    return <p> No cars available at the moment! You can change this by adding one <Link to='/sellcar'>here</Link></p>
  }

  if(loading){
    return <Spinner />
  }
  
  return (
    <div className="carsRender">
      <div className="cars">
      {
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
      }
      </div>
      <Pagination pages={pages} currentPage={page} />
    </div>
  );
}

export default Cars
