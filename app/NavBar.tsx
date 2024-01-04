import React from "react";
import AvatarMenu from "./AvatarMenu";
import LogoButton from "./LogoButton";
import XpBar from "@/components/XpBar";

const NavBar = () => {
  return (
    <div className="h-[70px] bg-[var(--white)] dark:bg-[var(--dark-gray)] flex items-center px-5 justify-between shadow-lg z-10">
      <LogoButton />
      {/* <XpBar /> */}
      <AvatarMenu />
    </div>
  );
};

export default NavBar;
