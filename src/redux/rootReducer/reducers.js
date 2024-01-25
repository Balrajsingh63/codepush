import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slice/Slice"; // Assuming this is your authentication reducer
import taskReducer from "../Slice/StoreData";
// Combine your reducers
export const rootReducer = combineReducers({
  authReducer,
  taskReducer
});
