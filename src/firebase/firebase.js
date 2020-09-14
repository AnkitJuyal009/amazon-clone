import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDob5kQ64YdKO0-KR7YOXq8rJUpDLrHPE",
  authDomain: "clone-32466.firebaseapp.com",
  databaseURL: "https://clone-32466.firebaseio.com",
  projectId: "clone-32466",
  storageBucket: "clone-32466.appspot.com",
  messagingSenderId: "649630124615",
  appId: "1:649630124615:web:c02707da4cbebaf09fbf62",
  measurementId: "G-S6KH850WW0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
