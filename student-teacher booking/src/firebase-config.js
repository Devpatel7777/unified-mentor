
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4D51QrWWmmeC8XFJlQ3C3opH4GKOcFYs",
  authDomain: "student-5b9ed.firebaseapp.com",
  projectId: "student-5b9ed",
  storageBucket: "student-5b9ed.firebasestorage.app",
  messagingSenderId: "384859809699",
  appId: "1:384859809699:web:65ce2e92c282126d3e5c16",
  measurementId: "G-FC20DW0FRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install firebase
// npm install -g firebase-tools
// firebase login
// firebase init
// firebase init

