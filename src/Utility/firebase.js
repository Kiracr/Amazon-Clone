import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4NOrBi-1i3g8JPyxY1CSTPvDEyDhgpoc",
  authDomain: "clone-f2471.firebaseapp.com",
  projectId: "clone-f2471",
  storageBucket: "clone-f2471.firebasestorage.app",
  messagingSenderId: "621528744160",
  appId: "1:621528744160:web:0bbc6e533e0e0d3ab59085"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();