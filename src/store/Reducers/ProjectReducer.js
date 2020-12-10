import * as actionType from "../Actions/actionTypes";

const initialState = {
  projects: [],
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_ALL_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };
    default:
      return state;
  }
};

export default ProjectReducer;
