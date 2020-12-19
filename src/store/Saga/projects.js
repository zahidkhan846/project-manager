import { firestore } from "../../config/firebaseConfig";
import { setProjects } from "../Actions/projects";
import { put } from "redux-saga/effects";

export function* createNewProjectSaga(action) {
  const createNewProject = (project) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection("projects")
        .doc()
        .set(project)
        .then(() => {
          resolve();
        })
        .catch((err) => reject(err));
    });
  };
  try {
    yield createNewProject({
      ...action.project,
      createdDate: new Date(),
    });
  } catch (err) {
    console.log(err);
  }
}

export function* fetchProjectsSaga() {
  const fetchProjects = ({}) => {
    return new Promise((resolve, reject) => {
      firestore
        .collection("projects")
        .get()
        .then((snapshot) => {
          const allProjects = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          resolve(allProjects);
        })
        .catch((err) => reject(err));
    });
  };
  try {
    const projects = yield fetchProjects();
    yield put(setProjects(projects));
  } catch (err) {
    console.log(err);
  }
}
