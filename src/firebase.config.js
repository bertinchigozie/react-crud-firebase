// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAuCdQDawzrKQ7bA2FGtOeyK0hVolpy6k",
  authDomain: "crud-6e8e0.firebaseapp.com",
  projectId: "crud-6e8e0",
  storageBucket: "crud-6e8e0.appspot.com",
  messagingSenderId: "563524359984",
  appId: "1:563524359984:web:3f62d792cd53d83a55daf5",
  measurementId: "G-ZPCGWD04FF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
