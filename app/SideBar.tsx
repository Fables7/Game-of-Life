"use client";
import { useSidebarContext } from "@/context/sidebar-context";

const SideBar = () => {
  const { setSidebarOpen, sidebarOpen } = useSidebarContext();

  return <div>{sidebarOpen ? "open" : "closed"}</div>;
};

export default SideBar;
