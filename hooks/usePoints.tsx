"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  RootState,
  addPoints as addPointsReducer,
  subtractPoints as subtractPointsReducer,
} from "@/store/userPoints";

const usePoints = () => {
  const dispatch = useDispatch();
  const userPoints = useSelector((state: RootState) => state.userPoints.points);
  const addPoints = (points: number) => {
    dispatch(addPointsReducer(points));
  };
  const subtractPoints = (points: number) => {
    dispatch(subtractPointsReducer(points));
  };
  return { userPoints, addPoints, subtractPoints };
};

export default usePoints;
