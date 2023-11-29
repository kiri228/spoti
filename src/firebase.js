// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe9a0hGbFJnkvlqFOJVx5G05yi9fyW7hU",
  authDomain: "pac-man-ea502.firebaseapp.com",
  projectId: "pac-man-ea502",
  storageBucket: "pac-man-ea502.appspot.com",
  messagingSenderId: "174126230776",
  appId: "1:174126230776:web:925d0c63de466dc71d9f0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
