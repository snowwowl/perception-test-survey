// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "surveytwo-9c0f3.firebaseapp.com",
  projectId: "surveytwo-9c0f3",
  storageBucket: "surveytwo-9c0f3.appspot.com",
  messagingSenderId: process.env.MESSG_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


