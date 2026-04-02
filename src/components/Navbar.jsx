import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" p-3 flex  gap-6 place-content-center ">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/pastes">PASETE</NavLink>
    </div>
  );
};

export default Navbar;
