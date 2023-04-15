import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage"
import { getFirestore } from "@firebase/firestore"
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const credentials = {
  apiKey: "AIzaSyBbWot5lPBhka2lRliN1WhzI-CsQUkGM4A",
  authDomain: "csgo-smokes-74a32.firebaseapp.com",
  projectId: "csgo-smokes-74a32",
  storageBucket: "csgo-smokes-74a32.appspot.com",
  messagingSenderId: "757227471877",
  appId: "1:757227471877:web:fc67ac8db130ced837c86c"
};

firebase.initializeApp(credentials);

const app = firebase.initializeApp(credentials);
export const auth = getAuth(app);
export const storage = getStorage(app)
export const db = getFirestore(app)
setPersistence(auth, browserLocalPersistence);
export default firebase;