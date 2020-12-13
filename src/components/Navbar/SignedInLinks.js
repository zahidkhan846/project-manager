import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SignedInLinks() {
  const { signOutUser } = useContext(AuthContext);

  const history = useHistory();

  const signOutUserHandler = async () => {
    try {
      await signOutUser();
      history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className="right hide-on-med-and-down ">
      <li>
        <NavLink to="/new-project">New Project</NavLink>
      </li>
      <li>
        <a onClick={signOutUserHandler} href="#!">
          Logout
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating  orange darken-4">
          <strong style={{ color: "white" }}>ZK</strong>
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
