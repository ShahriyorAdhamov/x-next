// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-425113.firebaseapp.com",
  projectId: "x-next-425113",
  storageBucket: "x-next-425113.appspot.com",
  messagingSenderId: "567162735856",
  appId: "1:567162735856:web:1532c317f6e14ddbbac635"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);