import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    countries: categoriesReducer,
  },
});

export default store;
