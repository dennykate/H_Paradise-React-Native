import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAKROKbi4dgshCtw-H1rL-vPqMVDHKRnGg",
  authDomain: "hornyparadise1.firebaseapp.com",
  projectId: "hornyparadise1",
  storageBucket: "hornyparadise1.appspot.com",
  messagingSenderId: "254617868591",
  appId: "1:254617868591:web:f163253846a22405b669da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
