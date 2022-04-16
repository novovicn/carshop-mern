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
  cars: [],
  car: {},
  loading: false,
  success: false,
  error: false,
  message: '',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
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

export const { reset } = carsSlice.actions;
export default carsSlice.reducer;
