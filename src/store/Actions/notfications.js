import * as actionTypes from "./actionTypes";

export const fetchNotificationsStart = () => {
  return {
    type: actionTypes.FETCH_NOTIFICATIONS_START,
  };
};

export const setNotifications = (notifications) => {
  return {
    type: actionTypes.SET_NOTIFICATIONS,
    notifications: notifications,
  };
};
