"use client";
import { Button } from "@/components/ui/button";
import { useSidebarContext } from "@/context/sidebar-context";
import React from "react";

const LogoButton = () => {
  const { setSidebarOpen, sidebarOpen } = useSidebarContext();
  return (
    <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
      <h1>Game Of Life</h1>
    </Button>
  );
};

export default LogoButton;
