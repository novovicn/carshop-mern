import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carsService from './carsService';

export const getCars = createAsyncThunk('/cars/get', async (_, thunkAPI) => {
  try {
      return await carsService.getCars();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  cars: [],
  loading: false,
  success: false,
  error: false,
  message: ''
}

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
      .addCase(getCars.pending, (state) => {
          state.loading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
          state.loading = false;
          state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          state.message = action.payload;
      })
  }
});

export default carsSlice.reducer;
