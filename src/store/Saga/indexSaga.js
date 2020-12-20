import { takeEvery } from "redux-saga/effects";
import { fetchProjectsSaga, createNewProjectSaga } from "./projects";
import { fetchNotificationsSaga } from "./notifications";
import * as actionTypes from "../Actions/actionTypes";

export function* watchProjects() {
  yield takeEvery(actionTypes.CREATE_NEW_PROJECT, createNewProjectSaga);
  yield takeEvery(actionTypes.FETCH_PROJECTS_START, fetchProjectsSaga);
}
export function* watchNotifications() {
  yield takeEvery(
    actionTypes.FETCH_NOTIFICATIONS_START,
    fetchNotificationsSaga
  );
}
