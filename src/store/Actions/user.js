import { firestore } from "../../config/firebaseConfig";
import * as actionTypes from "./actionTypes";

export const fetchUserInfo = (id) => {
  return (dispatch) => {
    firestore
      .doc(`users/${id}`)
      .get()
      .then((snapshot) => {
        const userDoc = snapshot.data();
        dispatch({
          type: actionTypes.FETCH_USER_DATA,
          userDoc: userDoc,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_USER_DATA_FAIL,
          error: error,
        });
      });
  };
};
