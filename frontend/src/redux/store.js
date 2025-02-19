import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './Slice/signupSlice'; 
import loginReducer from './Slice/loginSlice';
import  { fetchPromotionData } from './Slice/PromotionSlice'
import { fetchActivityData } from './Slice/ActivitySlice';

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer, 
    promotion: fetchPromotionData,
    activity: fetchActivityData,
  },
});

export default store;
