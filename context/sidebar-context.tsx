"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface SidebarContext {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
export const SidebarContext = createContext<SidebarContext | null>(null);

export default function SidebarContextProvider({
  children,
}: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(
      "useSidebarContext must be used within a SidebarContextProvider"
    );
  }
  return context;
}
