import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async action (API call)
export const signupUser = createAsyncThunk(
  'signup/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('YOUR_API_URL/signup', userData);
      return response.data; // Return the response data
    } catch (error) {
      return rejectWithValue(error.response.data); // Return the error message if API call fails
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: null,
    user: null, // Store user data after successful signup
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store user data after successful signup
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      });
  },
});

export default signupSlice.reducer;
