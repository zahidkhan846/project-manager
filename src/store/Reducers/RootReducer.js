import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  user: UserReducer,
});

export default rootReducer;
