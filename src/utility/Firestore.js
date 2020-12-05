import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBV67i19bMeE2nFDDhz4Mx_wyZgSmEOYIk",
  authDomain: "firestore-cwz.firebaseapp.com",
  projectId: "firestore-cwz",
  storageBucket: "firestore-cwz.appspot.com",
  messagingSenderId: "878128473722",
  appId: "1:878128473722:web:df91fb1118e120e18bfdc3",
  measurementId: "G-10PB697EP8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
