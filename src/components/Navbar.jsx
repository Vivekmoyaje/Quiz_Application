import React from "react";
import NavLinkItem from "./NavLinkItem";
import PlayBtn from "./PlayBtn";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid flex justify-around items-center py-3 shadow-lg font-bold tracking-wider">
        {/* Logo */}
        <div className="text-2xl md:text-3xl shadow-lg italic border-b-orange-500 p-2 rounded-lg">
          <span className="text-2xl md:text-4xl text-orange-500">Q</span>
          <span className="underline">uiz</span>
          <span className="text-2xl md:text-4xl text-orange-500">A</span>pp.
        </div>

        {/* Nav Links */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-6 text-[20px] p-2">
            <NavLinkItem></NavLinkItem>
          </ul>
        </div>

        {/* Play Btn and Theme Changer */}
        <div className="flex justify-center items-center gap-3">
          <div className="hidden md:block">
            <PlayBtn></PlayBtn>
          </div>
          <div>
            <ResponsiveNavbar></ResponsiveNavbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
