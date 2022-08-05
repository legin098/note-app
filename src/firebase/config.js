// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcgPS4iCNoI6z-IgCFA6pScMoohrTzUXc",
  authDomain: "notesapp-ea2e7.firebaseapp.com",
  projectId: "notesapp-ea2e7",
  storageBucket: "notesapp-ea2e7.appspot.com",
  messagingSenderId: "119654691512",
  appId: "1:119654691512:web:64829b0f0de21d212f3a4d",
  measurementId: "G-5NQ9D42QF4",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
