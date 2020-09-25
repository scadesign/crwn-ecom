import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCqyciTMISeDGdcDzCAKstAggcP5gZHhh4",
  authDomain: "crwn-db-7df58.firebaseapp.com",
  databaseURL: "https://crwn-db-7df58.firebaseio.com",
  projectId: "crwn-db-7df58",
  storageBucket: "crwn-db-7df58.appspot.com",
  messagingSenderId: "276972246867",
  appId: "1:276972246867:web:196d9a2b089e13c0a7f3a6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;