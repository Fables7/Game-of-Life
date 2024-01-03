"use client";
import React from "react";
import usePoints from "@/hooks/usePoints";

const PointsDisplay = () => {
  const { userPoints } = usePoints();
  return <h1>{userPoints} Points</h1>;
};

export default PointsDisplay;
