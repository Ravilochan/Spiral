import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6QxRJb8E_x0FAcy1VzGOX1OEvw4EFaIo",
  authDomain: "cloud-campus-15a0d.firebaseapp.com",
  databaseURL: "https://cloud-campus-15a0d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cloud-campus-15a0d",
  storageBucket: "cloud-campus-15a0d.appspot.com",
  messagingSenderId: "249323278304",
  appId: "1:249323278304:web:e052d89cd90273de07e585",
  measurementId: "G-0JTPZLEJ3Q"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;