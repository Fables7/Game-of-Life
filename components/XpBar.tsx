import React from "react";
import { Progress } from "./ui/progress";

const XpBar = () => {
  return (
    <div className="flex flex-col items-center mb-4">
      <Progress value={33} className="mb-2 shadow-md" />
      <h2>100/230xp</h2>
    </div>
  );
};

export default XpBar;
