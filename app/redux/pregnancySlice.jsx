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
    clearStartState: (state, action) => {
        state.startDate = null
    }
  },
});

export const { setStartDate, clearStartState } = pregnancySlice.actions;
export const selectStartDate = (state) => state.pregnancy.startDate;

export default pregnancySlice.reducer;
