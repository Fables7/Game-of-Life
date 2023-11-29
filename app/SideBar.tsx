"use client";
import { useSidebarContext } from "@/context/sidebar-context";
import classNames from "classnames";

const SideBar = () => {
  const { setSidebarOpen, sidebarOpen } = useSidebarContext();

  return (
    <div
      className={classNames({
        " transition-[width] bg-[var(--white)] dark:bg-[var(--dark-gray)]":
          true,
        "w-[300px]": sidebarOpen,
        "w-0": !sidebarOpen,
      })}
    >
      {sidebarOpen ? "open" : "closed"}
    </div>
  );
};

export default SideBar;
