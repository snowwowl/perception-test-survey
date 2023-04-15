// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlJloQYdVjxGlEynIQZyqQ4V5NlquHpfg",
  authDomain: "surveytwo-9c0f3.firebaseapp.com",
  projectId: "surveytwo-9c0f3",
  storageBucket: "surveytwo-9c0f3.appspot.com",
  messagingSenderId: "739373687990",
  appId: "1:739373687990:web:8ff2df4bc296e9d9daf217"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);


