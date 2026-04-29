// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHNC4n8rvnz6WmZD4etYfuuiaB2X99f1s",
  authDomain: "netflixgpt-9a3e8.firebaseapp.com",
  projectId: "netflixgpt-9a3e8",
  storageBucket: "netflixgpt-9a3e8.firebasestorage.app",
  messagingSenderId: "637154282708",
  appId: "1:637154282708:web:3a80b1c6aad39ce6053f41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth();