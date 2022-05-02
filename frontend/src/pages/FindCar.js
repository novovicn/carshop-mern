import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cars from '../components/Cars';
import Search from '../components/Search';
import { getCars } from '../features/cars/carsSlice';
import './FindCar.css';

function FindCar({ location }) {
  const dispatch = useDispatch();
  const [searchCriteria, setSearchCriteria] = useState('');

  const page = location.search.split('=')[1] || 1;
  useEffect(() => {
    if(searchCriteria){
        dispatch(getCars({page, searchCriteria}));
    }else{
        dispatch(getCars({page}));
    }
  }, [searchCriteria, page]);

  const onSearch = (keyword) => {
    setSearchCriteria(keyword);
    console.log('keyworrd', keyword);
  }

  return (
    <>
      <div className="findCar">
        <div className="heading">
          <div className="heading__photo">
            <h1>Find a car for you.</h1>
          </div>
          <Search onSearch={onSearch}/>
        </div>
        <Cars />
      </div>
    </>
  );
}

export default FindCar;
