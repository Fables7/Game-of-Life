import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type RootState = {
  userPoints: {
    points: number;
  };
};

export const userPointsSlice = createSlice({
  name: "userPoints",
  initialState: {
    points: 0,
  },
  reducers: {
    initialisePoints: (state, action) => {
      state.points = action.payload;
    },
    addPoints: (state, action) => {
      state.points += action.payload;
    },
    subtractPoints: (state, action: PayloadAction<number>) => {
      state.points -= action.payload;
    },
  },
});

export const { initialisePoints, addPoints, subtractPoints } =
  userPointsSlice.actions;

export default userPointsSlice.reducer;
