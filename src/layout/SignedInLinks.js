import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create-song-review">New Review</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Sign Out</a>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating light-blue-text text-lighten-4"
        >
          {props.profile.initial}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
