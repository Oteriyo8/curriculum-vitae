// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZU5LMJ_RrAkkw6VdCde7Q28Pvbqh_CU",
  authDomain: "diego-curriculum.firebaseapp.com",
  projectId: "diego-curriculum",
  storageBucket: "diego-curriculum.appspot.com",
  messagingSenderId: "304226624385",
  appId: "1:304226624385:web:3f1fe26857645e060b7e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const storage = getStorage(app);

// console.log(app)