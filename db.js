import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    // apiKey: "AIzaSyBA7ElfHLwZ6tu-fbByGQi6mpJTaAh__rQ",
    // authDomain: "messages1-c16bc.firebaseapp.com",
    // databaseURL: "https://messages1-c16bc.firebaseio.com",
    // projectId: "messages1-c16bc",
    // storageBucket: "messages1-c16bc.appspot.com",
    // messagingSenderId: "26907623108",
    // appId: "1:26907623108:web:123dc947b016a3a6245391",
    // measurementId: "G-LQNMLNGSN5"
});

export default firebase.firestore()
