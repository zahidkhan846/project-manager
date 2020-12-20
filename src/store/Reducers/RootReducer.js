import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import UserReducer from "./UserReducer";
import NotificationReducer from "./NotificationReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  user: UserReducer,
  notification: NotificationReducer,
});

export default rootReducer;
