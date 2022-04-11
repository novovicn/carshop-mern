import axios from 'axios';

const API_URL = '/api/cars/';

const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


 const carsService = {
     getCars,
 }

 export default carsService