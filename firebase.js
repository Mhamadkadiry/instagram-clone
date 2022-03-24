// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpj-Rrsq_Zf420BfuRmn-akYVLH4pNIc",
  authDomain: "instagram-6b121.firebaseapp.com",
  projectId: "instagram-6b121",
  storageBucket: "instagram-6b121.appspot.com",
  messagingSenderId: "30884034267",
  appId: "1:30884034267:web:e6fac3f4d7bcd224563efe",
  measurementId: "G-76P15PPVRV",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
//const analytics = getAnalytics(app);

export { app, db, storage };
