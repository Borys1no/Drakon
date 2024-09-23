// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZyuQcUnmGJKyJMGVOZJal6zb91h1Sot8",
  authDomain: "drakon-5a6cf.firebaseapp.com",
  projectId: "drakon-5a6cf",
  storageBucket: "drakon-5a6cf.appspot.com",
  messagingSenderId: "597308599344",
  appId: "1:597308599344:web:7052cfd3f6a82b3ede91f5",
  measurementId: "G-KVEYGQQ5QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};