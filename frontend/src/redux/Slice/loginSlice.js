import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async action (API call) for login
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('YOUR_API_URL/login', loginData);
      return response.data; // Return the response data (usually the token)
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message); // Return the error message if API call fails
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    error: null,
    token: null, // Store the token after successful login
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token; // Store token on successful login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message on failure
      });
  },
});

export default loginSlice.reducer;
