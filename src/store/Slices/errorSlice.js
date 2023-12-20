import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    message: null,
  },
  reducers: {
    setError: (state, action) => {
      return { ...state, message: action.payload };
    },
    clearError: (state) => {
      return { ...state, message: null };
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
