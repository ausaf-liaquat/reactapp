// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCWFUpqb_cWJrdtoe78GBTCTzFYV8Uxw0U",
  authDomain: "avian-branch-296320.firebaseapp.com",
  projectId: "avian-branch-296320",
  storageBucket: "avian-branch-296320.appspot.com",
  messagingSenderId: "1085917653244",
  appId: "1:1085917653244:web:da8eb34bb8e34d880ecf79",
  measurementId: "G-DNB197VXTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app