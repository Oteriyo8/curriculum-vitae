// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ0rSAK4QR7mpn_AV2X9v3HY5873mPon0",
  authDomain: "curriculum-vitae-fabian.firebaseapp.com",
  projectId: "curriculum-vitae-fabian",
  storageBucket: "curriculum-vitae-fabian.appspot.com",
  messagingSenderId: "839198619836",
  appId: "1:839198619836:web:a3b78786f63d77505f78b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;