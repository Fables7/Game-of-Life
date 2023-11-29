import React from "react";
import AvatarMenu from "./AvatarMenu";
import LogoButton from "./LogoButton";

const NavBar = () => {
  return (
    <div className="h-[70px] bg-[var(--white)] dark:bg-[var(--dark-gray)] flex items-center px-5 justify-between">
      <LogoButton />
      <AvatarMenu />
    </div>
  );
};

export default NavBar;
