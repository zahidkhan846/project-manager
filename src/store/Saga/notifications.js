import { setNotifications } from "../Actions/notfications";
import { firestore } from "../../config/firebaseConfig";
import { put } from "redux-saga/effects";

export function* fetchNotificationsSaga() {
  const fetchNotifications = () => {
    return new Promise((resolve, reject) => {
      firestore
        .collection("notifications")
        .limit(5)
        .orderBy("time", "desc")
        .get()
        .then((snapshot) => {
          const allNotifications = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          resolve(allNotifications);
        })
        .catch((err) => reject(err));
    });
  };
  try {
    const notifications = yield fetchNotifications();
    yield put(setNotifications(notifications));
  } catch (err) {
    console.log(err);
  }
}
