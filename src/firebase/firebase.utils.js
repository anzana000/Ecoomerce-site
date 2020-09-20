import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdRbFA5feNEbbTbD3DIobrFZpQMhnbKFg",
  authDomain: "crwn-db-d8b00.firebaseapp.com",
  databaseURL: "https://crwn-db-d8b00.firebaseio.com",
  projectId: "crwn-db-d8b00",
  storageBucket: "crwn-db-d8b00.appspot.com",
  messagingSenderId: "63223927117",
  appId: "1:63223927117:web:526a32ed7bfca049f7e704",
  measurementId: "G-RE2PCW2NPY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
