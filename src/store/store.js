import { configureStore } from "@reduxjs/toolkit";
import { Slice as formInputsSlice } from "./Slices/formInputsSlice";
import errorReducer from "./Slices/errorSlice";
import errorInputsSliceReducer from "./Slices/errorInputsSlice"; 
import userReducer from "./Slices/userSlice";
import configSlice from "./Slices/configSlice";

export default configureStore({
  reducer: {
    formInputs: formInputsSlice.reducer,
    error: errorReducer,
    errorInputs:errorInputsSliceReducer,
    user:userReducer,
    config:configSlice
  },
});

