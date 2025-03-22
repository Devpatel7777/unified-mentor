//import firebase from "firebase/app";
//import "firebase/firestore";

//import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { firestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Initialize the firebase app
const app = initializeApp({
  // Your firebase configuration
  apiKey: '<AIzaSyDfBy0AxaTqJuMIF2uOcIImRCbMohG8q60>',
  authDomain: '<dev001-754dc.firebaseapp.com>',
  projectId: '<dev001-754dc>',
  storageBucket: "dev001-754dc.firebasestorage.app",
  messagingSenderId: "499998211745",
  appId: "1:499998211745:web:aa51e8d4021956cf2dfae0",
  measurementId: "G-BB4PK292YG"
});

// Initialize the db variable
const db = getFirestore(app);

// Now you can use the db variable
db.collection('your-collection').get().then((querySnapshot) => {
  // Process the query snapshot
});