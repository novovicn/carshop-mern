import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  success: false,
  error: false,
  message: '',
};

const registerUser = createAsyncThunk('/user/register', (_, thunkAPI) => {
    
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {

  }
});


export const { reset } = authSlice.actions;
export default authSlice.reducer;
