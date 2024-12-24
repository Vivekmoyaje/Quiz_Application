import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-400 pb-2"
              : " hover:text-orange-500 pb-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/QuizApp"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-400 pb-2"
              : " hover:text-orange-500 pb-2"
          }
        >
          Quiz
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-400 pb-2"
              : " hover:text-orange-500 pb-2"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 border-b-2 border-orange-400 pb-2"
              : " hover:text-orange-500 pb-2"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
};

export default NavLinkItem;
