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

export const createUserDocumentProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  if (!snapShot.exists) {
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("You have an error that says ", error);
    }
  }
  return userRef;
};
