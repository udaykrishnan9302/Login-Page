// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "expense-tracker-997e2.firebaseapp.com",
  projectId: "expense-tracker-997e2",
  storageBucket: "expense-tracker-997e2.appspot.com",
  messagingSenderId: "562178621011",
  appId: "1:562178621011:web:9e07a68d0dfa11f3b650a6",
  measurementId: "G-RGPYDXMW5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);