// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6Dn-7NO-bxpjU2MGyxt2lYcdTG9wopBc",
    authDomain: "clone-a2ef7.firebaseapp.com",
    projectId: "clone-a2ef7",
    storageBucket: "clone-a2ef7.appspot.com",
    messagingSenderId: "97639246873",
    appId: "1:97639246873:web:1f4ec0264b4e9f4db5ce88",
    measurementId: "G-2DYKPJ991D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};