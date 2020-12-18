import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../store/Actions/user";

function UserProfile() {
  const { currentUser } = useContext(AuthContext);

  const { uid } = currentUser;

  const dispatch = useDispatch();

  const userDoc = useSelector((state) => state.user.userDoc);

  useEffect(() => {
    dispatch(fetchUserInfo(uid));
  }, [uid]);

  return (
    <div className="page-layout">
      <div className="container">
        <h1>
          {userDoc.firstName} {userDoc.lastName}
        </h1>
      </div>
    </div>
  );
}

export default UserProfile;
