import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC7ZRhbcRnQVecRYwihMaiIIdNPrOsVgoM",
    authDomain: "spiral-8b963.firebaseapp.com",
    projectId: "spiral-8b963",
    storageBucket: "spiral-8b963.appspot.com",
    messagingSenderId: "457979055764",
    appId: "1:457979055764:web:89106397acb6d7e26aae81",
    measurementId: "G-ZS3ZPLEFVH"
  }

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;