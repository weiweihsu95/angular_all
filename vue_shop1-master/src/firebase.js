import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChLAStQjw_gIAGWYUZC8pUFSTKM2ZR1R4",
    authDomain: "login-test-43f16.firebaseapp.com",
    databaseURL: "https://login-test-43f16-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-test-43f16",
    storageBucket: "login-test-43f16.appspot.com",
    messagingSenderId: "966892669780",
    appId: "1:966892669780:web:7bfdcc729e0db015e816c1",
    measurementId: "G-BRZYKNE6HD"
};

  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {fb,db}
