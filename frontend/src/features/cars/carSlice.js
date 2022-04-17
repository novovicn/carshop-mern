import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carsService from './carService';

export const getSingleCar = createAsyncThunk(
  '/cars/get/single',
  async (id, thunkAPI) => {
    try {
      return await carsService.getSingleCar(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addCar = createAsyncThunk(
  '/cars/add',
  async (carData, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth.user;
      return await carsService.addCar(carData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCar = createAsyncThunk('/cars/delete', async (id, thunkAPI) => {
  try {
    const { token } = thunkAPI.getState().auth.user;
    return await carsService.deleteCar(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const initialState = {
  car: {},
  loading: false,
  success: false,
  error: false,
  message: '',
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.car = action.payload;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(getSingleCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleCar.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(getSingleCar.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCar.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = carSlice.actions;
export default carSlice.reducer;
