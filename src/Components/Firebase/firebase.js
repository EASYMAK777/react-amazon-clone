import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzusI2g43-U6IOgi3iXomKS6zbdC1ujVM",
    authDomain: "blistlyfe-9e68d.firebaseapp.com",
    projectId: "blistlyfe-9e68d",
    storageBucket: "blistlyfe-9e68d.appspot.com",
    messagingSenderId: "732987945511",
    appId: "1:732987945511:web:89a09d2407cc624f3ed402",
    measurementId: "G-LJ3FVQGG3F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();