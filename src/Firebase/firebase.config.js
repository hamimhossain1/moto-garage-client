// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaI7dnw3yZGOI4EvgekEn3iinh6ychllM",
  authDomain: "moto-garage-b0da8.firebaseapp.com",
  projectId: "moto-garage-b0da8",
  storageBucket: "moto-garage-b0da8.appspot.com",
  messagingSenderId: "894241472302",
  appId: "1:894241472302:web:ce9f9cdb489ccc24a844bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;