import firebase from "firebase";
const config = {
  apiKey: "AIzaSyD6aTS8W5ILmQTTJuSBYCHemKInxsyyZLM",
  authDomain: "q0-app.firebaseapp.com",
  databaseURL: "https://q0-app.firebaseio.com",
  projectId: "q0-app",
  storageBucket: "q0-app.appspot.com",
  messagingSenderId: "458629012862"
};
firebase.initializeApp(config);

export default firebase;
