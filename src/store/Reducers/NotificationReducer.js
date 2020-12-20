import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  notifications: [],
};

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.notifications,
      };

    default:
      return state;
  }
};

export default NotificationReducer;
