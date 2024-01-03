import { configureStore } from "@reduxjs/toolkit";
import userPointsReducer from "./userPoints";

export const store = configureStore({
  reducer: {
    userPoints: userPointsReducer,
  },
});
