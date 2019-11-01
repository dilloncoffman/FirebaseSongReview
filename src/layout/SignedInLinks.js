import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-song-review">New Review</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating light-blue lighten-4">
          DC
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
