import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import userSlice from "../slices/userSlice";

// All Reducers
export const reducers = combineReducers({
  authState: userSlice,
  productState: productSlice,
});
