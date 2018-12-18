import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact={true}>Home</NavLink>
      <NavLink to="/movies" exact={true}>Movies</NavLink>
      <NavLink to="/directors" exact={true}>Directors</NavLink>
      <NavLink to="/actors" exact={true}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
