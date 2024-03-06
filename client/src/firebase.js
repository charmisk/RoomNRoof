// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "surat-estate.firebaseapp.com",
  projectId: "surat-estate",
  storageBucket: "surat-estate.appspot.com",
  messagingSenderId: "718523417019",
  appId: "1:718523417019:web:d7adaad584f3c9c6b6449e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);