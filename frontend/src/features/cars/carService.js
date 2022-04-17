import axios from 'axios';

const API_URL = '/api/cars/';

const getSingleCar = async (id) => {
  const response = await axios.get(API_URL+id);
  return response.data;
};

const deleteCar = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL+id, config);
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

 const carService = {
     getSingleCar,
     addCar,
     deleteCar
 }

 export default carService