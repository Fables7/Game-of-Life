import React from "react";
import { Progress } from "./ui/progress";

const XpBar = () => {
  return (
    <div className="flex flex-col items-center w-full ml-2 mr-2">
      <Progress value={33} className="shadow-md mt-4" />
      <h2>100/230xp</h2>
    </div>
  );
};

export default XpBar;
