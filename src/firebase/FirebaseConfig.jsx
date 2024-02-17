// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "realtor-clone-af501.firebaseapp.com",
  projectId: "realtor-clone-af501",
  storageBucket: "realtor-clone-af501.appspot.com",
  messagingSenderId: "600125363362",
  appId: "1:600125363362:web:90087127b9f917a40ff3fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
