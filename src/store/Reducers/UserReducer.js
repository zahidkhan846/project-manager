import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  userDoc: [],
  userError: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_DATA:
      return {
        ...state,
        userDoc: action.userDoc,
      };
    case actionTypes.FETCH_USER_DATA_FAIL:
      return {
        ...state,
        userError: action.error,
      };
    default:
      return state;
  }
};

export default UserReducer;
