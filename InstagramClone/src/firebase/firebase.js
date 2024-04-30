// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDD_QiSU3Vvr3taGebdTW6Hjwoqx3Zx_zw",
  authDomain: "instagram-clone-ba057.firebaseapp.com",
  projectId: "instagram-clone-ba057",
  storageBucket: "instagram-clone-ba057.appspot.com",
  messagingSenderId: "594547862095",
  appId: "1:594547862095:web:b373152b4969cbcedc183a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};