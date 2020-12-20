import * as actionTypes from "./actionTypes";

export const createNewProject = (project) => {
  return {
    type: actionTypes.CREATE_NEW_PROJECT,
    project: project,
  };
};

export const fetchProjectsStart = () => {
  return {
    type: actionTypes.FETCH_PROJECTS_START,
  };
};

export const setProjects = (projects) => {
  return {
    type: actionTypes.SET_ALL_PROJECTS,
    projects: projects,
  };
};
