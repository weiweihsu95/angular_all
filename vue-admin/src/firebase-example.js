
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDv9xFxejA4c7yTBtO11cjdz_UH2kgvLsc",
    authDomain: "project-test-6ab68.firebaseapp.com",
    projectId: "project-test-6ab68",
    storageBucket: "project-test-6ab68.appspot.com",
    messagingSenderId: "453731937838",
    appId: "1:453731937838:web:e99c9ebd9d540f0c6179bf",
    measurementId: "G-V2SC2R2X28"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}
