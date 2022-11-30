// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import { getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOGzeQGh0RAtYxbnVW0b4Kfb0Cg-9Qu7c",
  authDomain: "unichat-c4d39.firebaseapp.com",
  projectId: "unichat-c4d39",
  storageBucket: "unichat-c4d39.appspot.com",
  messagingSenderId: "1057430513008",
  appId: "1:1057430513008:web:3fc01317b68d3a639a5bb5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
export default firebaseAuth;
