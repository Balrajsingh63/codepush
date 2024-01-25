import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { rootReducer } from "../rootReducer/reducers"; // Assuming this is the combined root reducer

function logger() {
  return (next) => (action) => {
    const returnValue = next(action);
    return returnValue;
  };
}
// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["authReducer", "taskReducer"], // Reducers to persist
};

// Persist the combined reducer configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persisted reducers and apply middleware
export const Store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(Store);
