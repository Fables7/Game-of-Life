import React from "react";
import AvatarMenu from "./AvatarMenu";

const NavBar = () => {
  return (
    <div className="h-[70px] bg-[var(--white)] dark:bg-[var(--dark-gray)] flex items-center px-5 justify-between">
      <h1>Game Of Life</h1>
      <AvatarMenu />
    </div>
  );
};

export default NavBar;
