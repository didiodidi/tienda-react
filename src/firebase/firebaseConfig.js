import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8vphjreocvpylO6dlZhp2eoa59Hao4zs",
  authDomain: "mi-ecomerce.firebaseapp.com",
  projectId: "mi-ecomerce",
  storageBucket: "mi-ecomerce.appspot.com",
  messagingSenderId: "726770128637",
  appId: "1:726770128637:web:effea9900ab1b4a0b0d094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
