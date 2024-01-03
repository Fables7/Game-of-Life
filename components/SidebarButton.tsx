import React from "react";
import Link from "next/link";

const SidebarButton = ({ link, label }: { link: string; label: string }) => {
  return (
    <Link
      className="bg-black w-[80%] h-10 rounded-r-xl text-white flex items-center pl-4"
      href={`/${link}`}
    >
      {label}
    </Link>
  );
};

export default SidebarButton;
