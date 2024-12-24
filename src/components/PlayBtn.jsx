import React from "react";
import { NavLink } from "react-router-dom";
const PlayBtn = () => {
  return (
    <>
      <NavLink
        to="/QuizApp"
        className="bg-orange-400 mr-0 md:mr-2 py-3 px-2 md:px-4 rounded-lg "
      >
        Get Started
      </NavLink>
    </>
  );
};

export default PlayBtn;
