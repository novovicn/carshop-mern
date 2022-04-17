import axios from 'axios';

const API_URL = '/api/cars/';

const getCars = async (page) => {
  const response = await axios.get(API_URL + `?page=${page}`);
  return response.data;
};

 const carsService = {
     getCars
 }

 export default carsService