// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWhflE5EpYOrE7HenMz0iGH7vKMzVv5TY",
  authDomain: "firegram-99da7.firebaseapp.com",
  projectId: "firegram-99da7",
  storageBucket: "firegram-99da7.appspot.com",
  messagingSenderId: "659646633445",
  appId: "1:659646633445:web:53e60626f55d8e648e4b0c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const firebaseStorage = firebase.storage();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { app, firebaseStorage, firebaseFireStore, timestamp };
