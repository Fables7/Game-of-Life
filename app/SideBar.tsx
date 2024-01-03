"use client";
import SidebarButton from "@/components/SidebarButton";
import { useSidebarContext } from "@/context/sidebar-context";
import classNames from "classnames";
import Link from "next/link";

const SideBar = () => {
  const { setSidebarOpen, sidebarOpen } = useSidebarContext();

  return (
    <div
      className={classNames({
        " transition-[width] bg-[var(--white)] dark:bg-[var(--dark-gray)] flex flex-col   overflow-hidden space-y-2":
          true,
        "w-[300px]": sidebarOpen,
        "w-0": !sidebarOpen,
      })}
    >
      <SidebarButton link={"tasks"} label="Tasks" />
      <SidebarButton link={"dashboard"} label="Dashboard" />
      <SidebarButton link={"shop"} label="Shop" />
    </div>
  );
};

export default SideBar;
