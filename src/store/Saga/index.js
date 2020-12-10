import { takeEvery } from "redux-saga/effects";
import { fetchProjectsSaga, createNewProjectSaga } from "./projects";
import * as actionType from "../Actions/actionTypes";

export function* watchProjects() {
  yield takeEvery(actionType.CREATE_NEW_PROJECT, createNewProjectSaga);
  yield takeEvery(actionType.FETCH_PROJECTS_START, fetchProjectsSaga);
}
