import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

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
export const firebaseAuth = getAuth(firebaseApp);
export const storage = getStorage();
export const db = getFirestore(firebaseApp);
