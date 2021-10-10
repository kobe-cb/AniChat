//import firebase from "firebase";
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHA5_eM13-5o5L9wVI2iDB6yL-ViUDROM",
    authDomain: "anichat-c75f0.firebaseapp.com",
    projectId: "anichat-c75f0",
    storageBucket: "anichat-c75f0.appspot.com",
    messagingSenderId: "497615259456",
    appId: "1:497615259456:web:5d850e5e79187209ff9ca5",
    measurementId: "G-GR3KQQP0JK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
