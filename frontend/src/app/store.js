import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'


console.log(authReducer);
export const store = configureStore({
    reducer:{
        auth: authReducer,
    }
})

