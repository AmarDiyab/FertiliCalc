"use client"
import { createSlice } from '@reduxjs/toolkit';

const pregnancySlice = createSlice({
  name: 'pregnancy',
  initialState: {
    startDate: null,
  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
  },
});

export const { setStartDate } = pregnancySlice.actions;
export const selectStartDate = (state) => state.pregnancy.startDate;

export default pregnancySlice.reducer;
