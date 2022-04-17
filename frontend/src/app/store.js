import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import carsReducer from '../features/cars/carsSlice'
import carReducer from '../features/cars/carSlice'


console.log(authReducer);
export const store = configureStore({
    reducer:{
        auth: authReducer,
        cars: carsReducer,
        car: carReducer
    }
})

