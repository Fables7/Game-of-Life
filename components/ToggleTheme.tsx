"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Switch defaultChecked={theme === "dark"} onCheckedChange={handleToggle} />
  );
};

export default ToggleTheme;
