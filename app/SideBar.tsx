"use client";
import { useSidebarContext } from "@/context/sidebar-context";
import classNames from "classnames";
import Link from "next/link";

const SideBar = () => {
  const { setSidebarOpen, sidebarOpen } = useSidebarContext();

  return (
    <div
      className={classNames({
        " transition-[width] bg-[var(--white)] dark:bg-[var(--dark-gray)] flex flex-col   overflow-hidden":
          true,
        "w-[300px]": sidebarOpen,
        "w-0": !sidebarOpen,
      })}
    >
      <Link href={"/tasks"}>Tasks</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/shop"}>Shop</Link>
    </div>
  );
};

export default SideBar;
