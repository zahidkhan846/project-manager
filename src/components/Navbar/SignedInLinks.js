import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <NavLink to="/new-project">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          CWZ
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
