import axios from 'axios';

const API_URL = '/api/cars/';

const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const addCar = async (carData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, carData, config);

  return response.data;
};


 const carsService = {
     getCars,
     addCar
 }

 export default carsService