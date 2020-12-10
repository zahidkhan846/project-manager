import * as actionType from "./actionTypes";

export const createNewProject = (project) => {
  return {
    type: actionType.CREATE_NEW_PROJECT,
    project: project,
  };
};

export const fetchProjectsStart = () => {
  return {
    type: actionType.FETCH_PROJECTS_START,
  };
};

export const setProjects = (projects) => {
  return {
    type: actionType.SET_ALL_PROJECTS,
    projects: projects,
  };
};
