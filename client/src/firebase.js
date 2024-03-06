// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "roomnroof-ef553.firebaseapp.com",
  projectId: "roomnroof-ef553",
  storageBucket: "roomnroof-ef553.appspot.com",
  messagingSenderId: "482634070613",
  appId: "1:482634070613:web:6cfdd1548770424342b2dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);