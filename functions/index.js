const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config());

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc))
    .catch((err) => console.log(err));
};

exports.addedProject = functions.firestore
  .document("projects/{projectId}")
  .onCreate((snapshot) => {
    const project = snapshot.data();
    const notification = {
      content: "Added new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.addedNewUser = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((snapshot) => {
      const newUser = snapshot.data();
      const notification = {
        content: "Added new user",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };
      return createNotification(notification);
    })
    .catch((err) => console.log(err));
});
