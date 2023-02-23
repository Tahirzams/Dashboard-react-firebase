import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import { getAuth  } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3I6CO95wqVOHH-eto1Pvky8ksiiHhWqg",
  authDomain: "lama-admin-board.firebaseapp.com",
  projectId: "lama-admin-board",
  storageBucket: "lama-admin-board.appspot.com",
  messagingSenderId: "398913696268",
  appId: "1:398913696268:web:1130b3707aa3bd2bcbb429",
  measurementId: "G-B6MZSCHS7B"
};

 const app = initializeApp(firebaseConfig);
export const  auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);