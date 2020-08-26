import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2IX9EpgbNG4vJpN_XdvhUTJjhmUxKMlk",
    authDomain: "twitter-clone-b458e.firebaseapp.com",
    databaseURL: "https://twitter-clone-b458e.firebaseio.com",
    projectId: "twitter-clone-b458e",
    storageBucket: "twitter-clone-b458e.appspot.com",
    messagingSenderId: "226753348677",
    appId: "1:226753348677:web:08c33e0a6291a9a2254f2c",
    measurementId: "G-PTKFML5HZ5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
   
  const db = firebaseApp.firestore();

  export default db;