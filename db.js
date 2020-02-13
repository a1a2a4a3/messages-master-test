import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC0mVetMmzrWGWMJ-25HbR3KMa6QhNLuvA",
    authDomain: "messages2-d7153.firebaseapp.com",
    databaseURL: "https://messages2-d7153.firebaseio.com",
    projectId: "messages2-d7153",
    storageBucket: "messages2-d7153.appspot.com",
    messagingSenderId: "943887766424",
    appId: "1:943887766424:web:dd3fe25f23c685075c51ed",
    measurementId: "G-DCLKCLXBQ1"
});

export default firebase.firestore()
