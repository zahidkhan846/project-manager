import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { fetchUserInfo } from "../../store/Actions/user";

function SignedInLinks() {
  const { signOutUser, currentUser: cu } = useContext(AuthContext);
  const userDoc = useSelector((state) => state.user.userDoc);

  const history = useHistory();

  const [loading, setLoading] = useState(true);

  const signOutUserHandler = async () => {
    try {
      await signOutUser();
      history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo(cu.uid));
    setLoading(false);
  }, []);

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
        <NavLink
          to={`user-profile/${cu.uid}`}
          className="btn btn-floating red darken-4"
        >
          <strong style={{ color: "white" }}>
            {!loading && userDoc.initials}
          </strong>
        </NavLink>
      </li>
    </ul>
  );
}

export default SignedInLinks;
