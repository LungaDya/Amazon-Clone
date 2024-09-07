import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvLLKGve_TdUoMyCk5lUWrIT2gJ9sRWA8",
    authDomain: "lunga-amazoon-clone.firebaseapp.com",
    projectId: "lunga-amazoon-clone",
    storageBucket: "lunga-amazoon-clone.appspot.com",
    messagingSenderId: "248065668444",
    appId: "1:248065668444:web:c3351ef9479537dfe47d99",
    measurementId: "G-BXYPHQXK3V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ db, auth };