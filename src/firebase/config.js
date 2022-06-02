// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjCq0oCmwWIBblPPMlJElYNSlh4N70oY",
  authDomain: "reacts-ecommerce-haili.firebaseapp.com",
  projectId: "reacts-ecommerce-haili",
  storageBucket: "reacts-ecommerce-haili.appspot.com",
  messagingSenderId: "926062009767",
  appId: "1:926062009767:web:211566a4e4ede3b4deaa82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
