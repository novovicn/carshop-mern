import axios from 'axios';

const API_URL = '/api/cars';

const getCars = async (page, keyword) => {
  const search = keyword ? `&keyword=${keyword}` : '';
  const response = await axios.get(API_URL + `?page=${page}${search}`);
  return response.data;
};

 const carsService = {
     getCars
 }

 export default carsService