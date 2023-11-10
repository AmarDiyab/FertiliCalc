"use client"
import { configureStore } from '@reduxjs/toolkit';
import pregnancyReducer from './pregnancySlice';

export const store = configureStore({
  reducer: {
    pregnancy: pregnancyReducer,
  },
});
